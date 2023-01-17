import { FavoriteBorder, Favorite } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useState } from "react";
import {
  appendToUserProjects,
  removeFromUserProjects,
} from "../functions/mutation";
import { useRouter } from "next/navigation";

function naming(name: string) {
  let newName = "";
  name
    .toLowerCase()
    .split(" ")
    .forEach((word) => {
      newName += word.charAt(0).toUpperCase() + word.slice(1) + " ";
    });
  return newName;
}
function Project(props: any) {
  const [fav, setfav] = useState(
    props.userProject.includes(props.project.slug)
  );
  const router = useRouter();

  const clickHandler = () => {
    setfav((old: boolean) => !old);
    if (fav == false) {
      appendToUserProjects(props.currUser, props.project.slug);
    } else {
      removeFromUserProjects(props.currUser, props.project.slug);
    }
    router.refresh();
    props.clickHandler(true);
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
      <p style={{ marginLeft: "10px" }}> {naming(props.project.name)}</p>
      <div style={{ margin: "0 10px 0 auto" }}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={clickHandler}
        >
          {fav ? <Favorite style={{ fill: "red" }} /> : <FavoriteBorder />}
        </IconButton>
      </div>
    </div>
  );
}
export default Project;
