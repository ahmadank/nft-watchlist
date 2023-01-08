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

async function PriceFetch(props: prop) {
  const data = await getData(props.name);
  return <p>{JSON.stringify(data)}</p>;
}
export default PriceFetch;
