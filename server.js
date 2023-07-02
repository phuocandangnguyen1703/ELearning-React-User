import { createServer } from "http";
import { parse } from "url";
import next from "next";
import cluster from "cluster";
import os from "os";

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = 3000;

if (cluster.isPrimary) {
  const numWorkers = os.cpus().length;

  console.log(`Master cluster setting up ${numWorkers} workers...`);

  for (let i = 0; i < numWorkers; i++) {
    cluster.fork();
  }

  cluster.on("online", (worker) => {
    console.log(`Worker ${worker.process.pid} is online`);
  });

  cluster.on("exit", (worker, code, signal) => {
    console.log(
      `Worker ${worker.process.pid} died with code ${code} and signal ${signal}`
    );
    console.log("Starting a new worker");
    cluster.fork();
  });
} else {
  const app = next({ dev });
  const handle = app.getRequestHandler();

  app.prepare().then(() => {
    createServer(async (req, res) => {
      try {
        const parsedUrl = parse(req.url, true);
        const { pathname, query } = parsedUrl;

        if (pathname === "/a") {
          await app.render(req, res, "/a", query);
        } else if (pathname === "/b") {
          await app.render(req, res, "/b", query);
        } else {
          await handle(req, res, parsedUrl);
        }
      } catch (err) {
        console.error("Error occurred handling", req.url, err);
        res.statusCode = 500;
        res.end("Internal Server Error");
      }
    })
      .once("error", (err) => {
        console.error(err);
        process.exit(1);
      })
      .listen(port, () => {
        console.log(
          `Worker ${process.pid} listening on http://${hostname}:${port}`
        );
      });
  });
}
