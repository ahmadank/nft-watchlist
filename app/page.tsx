"use client";
import Head from "next/head";
import Menu from "../components/menu";

import classes from "./page.module.css";
import "../styles/globals.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <main className={classes.center}>
        <Menu />
      </main>
    </>
  );
}
