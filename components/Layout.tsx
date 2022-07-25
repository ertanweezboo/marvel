import React, { ReactNode } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Modal from "./Modal";

type Props = {
  children?: ReactNode;
  title?: string;
  description?: string;
};

const Layout = ({
  children,
  title = "Marvel Characters and Comics",
  description = "This project use Marvel developer API.",
}: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="description" content={description} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/favicon.ico" />
      <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"/>
    </Head>
    <Header />
    {children}
    <Footer />
    <Modal />
  </>
);

export default Layout;
