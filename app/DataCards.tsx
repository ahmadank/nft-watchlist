import React, { Suspense } from "react";
import InfoCard from "../components/InfoCard";
import getData from "../functions/getDataProject";

type props = {
  name: string;
  userId: string;
  params: string;
};

type projectType = {
  key: string;
  name: string;
  imageUrl: string;
  price: number;
  oneDayVolume: number;
};

async function DataCards(props: props) {
  const data = await getData(props.name);
  if (data?.collection) {
    const unit = props.params ? data.collection.payment_tokens[0].usd_price : 1;
    let project: projectType = {
      key: props.name,
      name: data.collection.name,
      imageUrl: data.collection.image_url,
      price: Math.round(data.collection.stats.floor_price * unit * 100) / 100,
      oneDayVolume:
        Math.round(data.collection.stats.one_hour_volume * 100) / 100,
    };

    return <InfoCard userId={props.userId} project={project} />;
  }
}
export default DataCards;
