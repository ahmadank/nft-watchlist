"use client";
import { handleLogin } from "../functions/login";
import { Button, Card, Typography, TextField } from "@mui/material";
import {
  Login as LoginIcon,
  GitHub,
  Apple,
  Google,
  PermIdentity,
} from "@mui/icons-material";
import styles from "../styles/Login.module.css";

function Login() {
  return (
    <div className={styles.wrapper}>
      <Card
        sx={{
          backgroundColor: "#FAF9F6",
          height: "500px",
        }}
      >
        <TextField
          id="outlined-helperText"
          label="Email"
          sx={{ marginTop: "40px", marginLeft: "20px", width: "90%" }}
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          sx={{ marginTop: "20px", marginLeft: "20px", width: "90%" }}
        />
        <div className={styles.providers}>
          <div className={styles.login}>
            <Button
              variant="outlined"
              sx={{ width: "150px" }}
              onClick={handleLogin}
            >
              <LoginIcon sx={{ paddingRight: "10px" }} fontSize="large" /> Login
            </Button>
            <Button
              variant="outlined"
              sx={{ width: "150px" }}
              onClick={handleLogin}
            >
              <PermIdentity sx={{ paddingRight: "10px" }} fontSize="large" />{" "}
              Register
            </Button>
          </div>
          <Button
            variant="outlined"
            sx={{ width: "90%", marginBottom: "10px", marginTop: "30px" }}
            onClick={handleLogin}
          >
            <GitHub sx={{ paddingRight: "10px" }} fontSize="large" /> Login With
            Github
          </Button>
          <Button
            variant="outlined"
            sx={{ width: "90%", marginBottom: "10px" }}
            onClick={handleLogin}
          >
            <Apple sx={{ paddingRight: "10px" }} fontSize="large" /> Login With
            Apple
          </Button>
          <Button
            variant="outlined"
            sx={{ width: "90%", marginBottom: "10px" }}
            onClick={handleLogin}
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
