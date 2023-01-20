"use client";
import React from "react";
import Menu from "./Menu";
import User from "./User";
import TextTransition, { presets } from "react-text-transition";
import styles from "../styles/Header.module.css";
import { Session } from "@supabase/gotrue-js/src/lib/types";
import "@fontsource/poppins";

type props = {
  session: Session | null;
};
function Header(props: props) {
  const TEXTS = ["Watch", "Invest", "Grow"];
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 5000);
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <div className={styles.header}>
      {props.session !== null && <Menu session={props.session !== null} />}
      <TextTransition
        springConfig={presets.wobbly}
        className={styles.headerText}
      >
        {TEXTS[index % TEXTS.length]}
      </TextTransition>
      {props.session !== null && <User session={props.session} />}
    </div>
  );
}
export default Header;
