import React, { Suspense } from "react";
import InfoCard from "../components/InfoCard";
async function getData(name: string) {
  const res = await fetch(`https://api.opensea.io/collection/${name}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
interface prop {
  name: string;
}

async function DataCards(props: prop) {
  console.log(props);
  const data = await getData(props.name);
  const project = {
    name: data.collection.name,
    imageUrl: data.collection.image_url,
    price: data.collection.stats.floor_price,
    oneHourVolume: data.collection.stats.one_hour_volume,
  };
  return (
    <>
      <Suspense fallback={<h1>Loading profile...</h1>}>
        <InfoCard project={project} />
      </Suspense>
    </>
  );
}
export default DataCards;
