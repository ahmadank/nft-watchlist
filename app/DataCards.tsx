import React, { Suspense } from "react";
import InfoCard from "../components/InfoCard";
import getData from "../functions/getDataProject";
import { useSearchParams } from "next/navigation";
interface prop {
  name: string;
  userId: string;
  params: string;
}

async function DataCards(props: prop) {
  let project: any;
  const data = await getData(props.name);
  if (data?.collection) {
    const unit = props.params ? data.collection.payment_tokens[0].usd_price : 1;
    project = {
      key: props.name,
      name: data.collection.name,
      imageUrl: data.collection.image_url,
      price: Math.round(data.collection.stats.floor_price * unit * 100) / 100,
      oneDayVolume:
        Math.round(data.collection.stats.one_hour_volume * 100) / 100,
    };
  }
  return <InfoCard userId={props.userId} project={project} />;
}
export default DataCards;
