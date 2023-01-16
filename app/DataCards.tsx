import React, { Suspense } from "react";
import InfoCard from "../components/InfoCard";
import getData from "../functions/getDataProject";
interface prop {
  name: string;
}

async function DataCards(props: prop) {
  let project: any;
  if (props?.name) {
    const data = await getData(props.name);
    if (data?.collection)
      project = {
        key: props.name,
        name: data.collection.name,
        imageUrl: data.collection.image_url,
        price: Math.round(data.collection.stats.floor_price * 100) / 100,
        oneDayVolume:
          Math.round(data.collection.stats.one_hour_volume * 100) / 100,
      };
  } else {
    project = { name: "test", imageUrl: "", price: 1, oneDayVolume: 1 };
  }
  return <InfoCard project={project} />;
}
export default DataCards;
