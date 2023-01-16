async function getData(name) {
  const res = await fetch(`https://api.opensea.io/collection/${name}`);
  if (!res.ok) {
    return null;
  }
  return res.json();
}

export default getData;
