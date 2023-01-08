import PriceFetch from "./PriceFetch";
export default async function Home() {
  return (
    <>
      <title>Home</title>
      <main>
        {/* @ts-expect-error Server Component */}
        <PriceFetch name="hapeprime"></PriceFetch>
      </main>
    </>
  );
}
