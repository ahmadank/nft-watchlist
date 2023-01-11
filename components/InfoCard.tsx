"use client";
import { Card, CardContent, Typography } from "@mui/material/";

interface props {
  project: {
    name: string;
    imageUrl: string;
    price: number;
    oneHourVolume: number;
  };
}

function InfoCard(props: props) {
  return (
    <Card
      sx={{
        maxWidth: "275px",
        height: "375px",
        backgroundColor: "rgba(21,25,23, 0.85)",
      }}
    >
      <CardContent>
        <img
          src={props.project?.imageUrl}
          alt={props.project?.name}
          style={{ width: "100%" }}
        />
        <Typography
          sx={{
            fontSize: 14,
            color: "#FFD700",
            textShadow: "0.5px 0.5px 1px #fff, 1px 1px 50px",
            marginTop: "10px",
            marginLeft: "7px",
          }}
          gutterBottom
        >
          Name: {props.project?.name} <br />
          Floor Price: {props.project?.price} <br />
          One Hour Volume: {props.project?.oneHourVolume} <br />
        </Typography>
      </CardContent>
    </Card>
  );
}
export default InfoCard;
