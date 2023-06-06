import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Open_Sans } from "next/font/google";
import type { NextPage } from "next";
import clsx from "clsx";
import "@/styles/carousel.css";
import { Provider } from "react-redux";
import store from "@/redux/features/store";

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
				{getLayout(<Component {...pageProps} />)}
			</Provider>
		</>
	);
}
