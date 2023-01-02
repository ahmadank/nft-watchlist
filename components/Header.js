"use client";
import React, { useState } from "react";
import Menu from "./Menu.js";
import TextTransition, { presets } from "react-text-transition";
import styles from "../styles/Header.module.css";
import "@fontsource/poppins";

function Header() {
  const TEXTS = ["Watch", "Invest", "Grow"];
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      10000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className={styles.header}>
      <Menu />
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
