import { Html, Head, Main, NextScript } from "next/document";
import { ToastContainer } from "@iscv/toast";
import { LoadingContainer } from "~/components/index";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="/fontawesome/css/all.min.css" />
        {/* <link
          href="https://fonts.googleapis.com/css?family=Quicksand&display=swap"
          rel="stylesheet"
        /> */}
      </Head>
      <body className="overflow-y-auto overflow-x-hidden">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
