import { handleLogin } from "../functions/login.js";
import { IconButton } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
function login() {
  return (
    <IconButton
      edge="start"
      color="inherit"
      aria-label="open drawer"
      onClick={handleLogin()}
    >
      <MenuIcon fontSize="large" />
    </IconButton>
  );
}
export default login;
