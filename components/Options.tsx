"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import styles from "../styles/Index.module.css";
import Switch from "@mui/material/Switch";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

function Options() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const handleSwitch = () => {
    if (searchParams.get("price")) return router.push("/");
    router.push("/?price=usd");
  };
  return (
    <div className={styles.options}>
      <img
        style={{ height: "50%" }}
        src={"https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"}
      ></img>
      <Switch
        sx={{ alignSelf: "center", paddingRight: "5px" }}
        onChange={handleSwitch}
      />
      <AttachMoneyIcon />
    </div>
  );
}
export default Options;
