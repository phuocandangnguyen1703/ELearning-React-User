import ToastLayout from "@/layouts/ToastLayout";
import store from "@/redux/store";
import "@/styles/carousel.css";
import "@/styles/globals.css";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { Open_Sans } from "next/font/google";
// import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import "node_modules/video-react/dist/video-react.css"; // import css

const opensans = Open_Sans({ subsets: ["latin"] });

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      <Provider store={store}>
        {getLayout(
          <>
            <ToastLayout></ToastLayout>
            <Component {...pageProps} />
          </>
        )}
      </Provider>
    </>
  );
}
