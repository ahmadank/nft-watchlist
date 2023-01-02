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
} from "@mui/icons-material";
import { makeStyles } from "@mui/styles";

import styles from "../styles/Header.module.css";
import React, { useState } from "react";

const useStyles = makeStyles({
  paper: {
    background: "#ffffff0d",
  },
  font: {
    color: "#16abff6e",
    textShadow: "0.5px 0.5px 1px #fff, 1px 1px 50px",
  },
});

function Menu() {
  const [open, setState] = useState(false);

  const toggleDrawer = (toggle) => (event) => {
    setState(toggle);
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
          <IconButton
            sx={{ mb: 2, mt: 2, ml: 1 }}
            onClick={toggleDrawer(false)}
          >
            <CloseIcon style={{ fill: "white" }} />
          </IconButton>
          <List>
            {["Watch", "Settings"].map((text, index) => (
              <ListItem
                sx={{
                  borderTop: "1px solid #16abff6e",
                  borderBottom: "1px solid #16abff6e",
                  boxShadow: "0.5px 0.5px 1px #fff, 1px 1px 50px",
                }}
                key={text}
                disablePadding
              >
                <ListItemButton>
                  <ListItemIcon>
                    {index === 0 ? (
                      <ShowChartIcon style={{ fill: "white" }} />
                    ) : (
                      <SettingsIcon style={{ fill: "white" }} />
                    )}
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
