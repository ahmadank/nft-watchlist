"use client";
import React from "react";
import Menu from "./Menu.js";
import Login from "./Login";
import TextTransition, { presets } from "react-text-transition";
import styles from "../styles/Header.module.css";
import "@fontsource/poppins";

function Header(props) {
  const TEXTS = ["Watch", "Invest", "Grow"];
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 5000);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className={styles.header}>
      {props.session ? <Menu session={props.session} /> : <Login></Login>}
      <TextTransition
        springConfig={presets.wobbly}
        className={styles.headerText}
      >
        {TEXTS[index % TEXTS.length]}
      </TextTransition>
    </div>
  );
}
export default Header;
