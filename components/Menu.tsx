import {
  IconButton,
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  Settings as SettingsIcon,
  ShowChart as ShowChartIcon,
  Logout as LogoutIcon,
  AdminPanelSettings as AdmingIcon,
} from "@mui/icons-material";
import { makeStyles } from "@mui/styles";

import styles from "../styles/Header.module.css";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { updateCollections } from "../functions/admin.js";
import { handleLogout } from "../functions/login.js";

const useStyles = makeStyles({
  paper: {
    background: "#000000db",
  },
  font: {
    color: "#16abff6e",
    textShadow: "0.5px 0.5px 1px #fff, 1px 1px 50px",
  },
});

function Menu() {
  const [open, setState] = useState(false);
  const [menuOptions, setOptions] = useState([
    "Watch",
    "Settings",
    "Logout",
    "Admin",
  ]);
  const toggleDrawer = (toggle: boolean) => () => {
    setState(toggle);
  };
  const router = useRouter();

  const handleMenuButton = (index: number) => () => {
    setState(false);
    switch (index) {
      case 0:
        router.push("/");
        break;
      case 1:
        router.push("/settings");
        break;
      case 2:
        handleLogout();
        break;
      case 3:
        updateCollections();
        break;
    }
  };

  const handleImage = {
    0: <ShowChartIcon style={{ fill: "white" }} />,
    1: <SettingsIcon style={{ fill: "white" }} />,
    2: <LogoutIcon style={{ fill: "white" }} />,
    3: <AdmingIcon style={{ fill: "white" }} />,
  };

  const handleImageNotAdmin = {
    0: <ShowChartIcon style={{ fill: "white" }} />,
    1: <SettingsIcon style={{ fill: "white" }} />,
    2: <LogoutIcon style={{ fill: "white" }} />,
  };

  const classes = useStyles();

  return (
    <div className={styles.menu}>
      {!open && (
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer(!open)}
        >
          <MenuIcon fontSize="large" />
        </IconButton>
      )}
      <Drawer classes={{ paper: classes.paper }} anchor="left" open={open}>
        <Box sx={{ width: 250 }}>
          <IconButton sx={{ pb: 1, pl: 4 }} onClick={toggleDrawer(false)}>
            <CloseIcon fontSize="large" style={{ fill: "white" }} />
          </IconButton>
          <List>
            {menuOptions.map((text, index) => (
              <ListItem
                sx={{
                  borderTop: "1px solid #16abff6e",
                  borderBottom: "1px solid #16abff6e",
                  boxShadow: "0.5px 0.5px 1px #fff, 1px 1px 50px",
                }}
                key={text}
                disablePadding
              >
                <ListItemButton onClick={handleMenuButton(index)}>
                  <ListItemIcon>
                    {handleImage[index as keyof typeof handleImage]}
                  </ListItemIcon>
                  <ListItemText
                    classes={{ primary: classes.font }}
                    primary={text}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </div>
  );
}
export default Menu;
