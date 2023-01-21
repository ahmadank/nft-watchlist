async function getData(name) {
  const res = await fetch(`https://api.opensea.io/collection/${name}`);
  if (!res.ok) {
    return null;
  }
  try {
    return res.json();
  } catch {
    return {
      name: name,
      collection: { name: name },
      imageUrl: "",
      price: 0,
      oneDayVolume: 0,
    };
  }
}

export default getData;
