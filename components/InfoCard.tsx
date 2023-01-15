"use client";
import {
  Card,
  CardContent,
  CardActionArea,
  Typography,
  CardMedia,
} from "@mui/material/";
import { useRouter } from "next/navigation";
interface props {
  project: {
    key: string;
    name: string;
    imageUrl: string;
    price: number;
    oneDayVolume: number;
  };
}

function InfoCard(props: props) {
  const router = useRouter();
  return (
    <Card
      sx={{
        maxWidth: "275px",
        height: "375px",
        backgroundColor: "rgba(21,25,23, 0.85)",
        borderRadius: "10px",
      }}
    >
      <CardActionArea
        sx={{ height: "100%" }}
        onClick={() => {
          router.push(`/${props.project.key}`);
        }}
      >
        <CardContent
          sx={{ height: "100%", display: "grid", gridTemplateRows: "70% 30%" }}
        >
          <CardMedia
            component="img"
            sx={{ width: "100%", alignSelf: "center", borderRadius: "10px" }}
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
            }}
            gutterBottom
          >
            Name: {props.project?.name} <br />
            Floor Price: {props.project?.price} <br />
            One Day Volume: {props.project?.oneDayVolume} <br />
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default InfoCard;
