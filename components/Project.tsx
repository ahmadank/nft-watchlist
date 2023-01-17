import { FavoriteBorder, Favorite } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useState } from "react";

function Project(props: any) {
  const [fav, setfav] = useState(false);

  const clickHandler = () => {
    setfav((old) => !old);
  };
  return (
    <div
      style={{
        padding: "4px 0 5px 10px",
        color: "rgb(175,175,175)",
        display: "flex",
        alignItems: "center",
        width: "100%",
      }}
    >
      <img
        style={{ width: "45px", borderRadius: "5px" }}
        src={props.project.imageUrl || props.project.image_url}
      />
      <p style={{ marginLeft: "10px" }}> {props.project.name}</p>
      <div style={{ margin: "0 10px 0 auto" }}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={clickHandler}
        >
          {fav ? <Favorite /> : <FavoriteBorder />}
        </IconButton>
      </div>
    </div>
  );
}
export default Project;
