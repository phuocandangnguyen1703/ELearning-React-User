import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import { Admin } from "~/layouts";
import { Category } from "~/components";

function Home() {
  return <div className=""></div>;
}

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <Admin>{page}</Admin>;
};

export default Home;
