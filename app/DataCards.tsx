import React, { Suspense } from "react";
import InfoCard from "../components/InfoCard.js";
async function getData(name: string) {
  const res = await fetch(`https://api.opensea.io/collection/${name}`);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
interface prop {
  name: string;
}

async function DataCards(props: prop) {
  const data = await getData(props.name);
  return (
    <InfoCard />
    // <Suspense fallback={<h1>Loading profile...</h1>}>
    //   <p>test</p>)
    // </Suspense>
  );
}
export default DataCards;
