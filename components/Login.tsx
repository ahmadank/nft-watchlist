"use client";
import React, { useRef } from "react";
import {
  handleLogin,
  handleGithubLogin,
  handleRegister,
} from "../functions/login";
import { Button, Card, Typography, TextField } from "@mui/material";
import {
  Login as LoginIcon,
  GitHub,
  Apple,
  Google,
  PermIdentity,
} from "@mui/icons-material";
import styles from "../styles/Login.module.css";
import { useEffect } from "react";

function Login() {
  const initialRef: any = null;
  const email = useRef(initialRef);
  const password = useRef(initialRef);
  const emailCheck =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const func =
    (type: string) =>
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (type === "login") {
        if (email.current?.value && password.current?.value)
          if (emailCheck.test(email.current?.value))
            handleLogin(email.current.value, password.current.value);
          else alert("Enter Valid email");
      } else {
        if (email.current?.value && password.current?.value) {
          if (emailCheck.test(email.current?.value))
            handleRegister(email.current.value, password.current.value);
          else alert("Enter Valid email");
        }
      }
      email.current.value = "";
      password.current.value = "";
    };

  useEffect(() => {
    email.current.value = "";
    password.current.value = "";
  }, []);
  return (
    <div className={styles.wrapper}>
      <Card
        sx={{
          backgroundColor: "#FAF9F6",
          maxHeight: "500px",
        }}
      >
        <TextField
          inputRef={email}
          id="outlined-helperText"
          label="Email"
          value={email.current?.value}
          sx={{ marginTop: "40px", marginLeft: "20px", width: "90%" }}
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          value={password.current?.value}
          inputRef={password}
          sx={{ marginTop: "20px", marginLeft: "20px", width: "90%" }}
        />
        <div className={styles.providers}>
          <div className={styles.login}>
            <Button
              variant="outlined"
              sx={{ width: "150px" }}
              onClick={func("login")}
            >
              <LoginIcon sx={{ paddingRight: "10px" }} fontSize="large" /> Login
            </Button>
            <Button
              variant="outlined"
              sx={{ width: "150px" }}
              onClick={func("register")}
            >
              <PermIdentity sx={{ paddingRight: "10px" }} fontSize="large" />{" "}
              Register
            </Button>
          </div>
          <Button
            variant="outlined"
            sx={{ width: "90%", marginBottom: "10px", marginTop: "30px" }}
            onClick={handleGithubLogin}
          >
            <GitHub sx={{ paddingRight: "10px" }} fontSize="large" /> Login With
            Github
          </Button>
          <Button
            variant="outlined"
            sx={{ width: "90%", marginBottom: "10px" }}
            onClick={handleLogin}
            disabled
          >
            <Apple sx={{ paddingRight: "10px" }} fontSize="large" /> Login With
            Apple
          </Button>
          <Button
            variant="outlined"
            sx={{ width: "90%", marginBottom: "10px" }}
            onClick={handleLogin}
            disabled
          >
            <Google sx={{ paddingRight: "10px" }} fontSize="large" /> Login With
            Google
          </Button>
        </div>
      </Card>
    </div>
  );
}
export default Login;
