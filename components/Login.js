import { handleLogin } from "../functions/login.js";
import { Button } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import styles from "../styles/Header.module.css";

function login() {
  return (
    <Button
      className={styles.login}
      variant="outlined"
      size="medium"
      onClick={handleLogin}
    >
      <LoginIcon fontSize="large" /> Login
    </Button>
  );
}
export default login;
