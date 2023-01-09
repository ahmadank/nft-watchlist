"use client";
import { Card, CardContent, Typography } from "@mui/material/";

function InfoCard() {
  return (
    <Card
      sx={{
        maxWidth: 275,
        backgroundColor: "rgba(255, 255, 255, 0.75)",
      }}
    >
      <CardContent>
        <Typography
          sx={{
            fontSize: 14,
            color: "#16abff6e",
            textShadow: "0.5px 0.5px 1px #fff, 1px 1px 50px",
          }}
          color="text.secondary"
          gutterBottom
        >
          Word of the Day
        </Typography>
      </CardContent>
    </Card>
  );
}
export default InfoCard;
