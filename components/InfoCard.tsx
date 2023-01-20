"use client";
import {
  Card,
  CardContent,
  CardActionArea,
  Typography,
  CardMedia,
} from "@mui/material/";
import { FavoriteBorder, Favorite } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  appendToUserProjects,
  removeFromUserProjects,
} from "../functions/mutation";

type props = {
  project: {
    key: string;
    name: string;
    imageUrl: string;
    price: number;
    oneDayVolume: number;
  };
  userId: string;
};

function InfoCard(props: props) {
  const [favHandler, setFav] = useState(true);
  const router = useRouter();

  const clickHandler = () => {
    setFav((oldVal) => !oldVal);
    if (favHandler) removeFromUserProjects(props.userId, props.project.key);
    else appendToUserProjects(props.userId, props.project.key);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Card
        sx={{
          maxWidth: "275px",
          height: "400px",
          backgroundColor: "rgba(21,25,23, 0.85)",
          borderRadius: "10px",
        }}
      >
        <CardContent
          sx={{
            height: "100%",
          }}
        >
          <CardActionArea
            sx={{
              height: "85%",
              display: "grid",
              gridTemplateRows: "75% 25%",
              alignItems: "start",
            }}
            onClick={() => {
              router.push(`/${props.project.key}`);
            }}
          >
            <CardMedia
              component="img"
              sx={{
                alignSelf: "center",
                borderRadius: "10px",
                marginTop: "10px",
                gridRow: "1/2",
                height: "95%",
              }}
              image={props.project?.imageUrl}
              alt={props.project?.name}
            />
            <Typography
              sx={{
                fontSize: 14,
                color: "#FFD700",
                textShadow: "0.5px 0.5px 1px #fff, 1px 1px 50px",
                marginTop: "10px",
                marginLeft: "7px",
                gridColumn: "1",
                gridRow: "2",
              }}
              gutterBottom
            >
              Name: {props.project?.name} <br />
              Floor Price: {props.project?.price} <br />
              One Day Volume: {props.project?.oneDayVolume} <br />
            </Typography>
          </CardActionArea>
          <div style={{ float: "right" }}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={clickHandler}
            >
              {favHandler ? (
                <Favorite style={{ fill: "red" }} />
              ) : (
                <FavoriteBorder />
              )}
            </IconButton>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
export default InfoCard;
