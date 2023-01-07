import { supabase } from "./../lib/supabaseClient";

async function data() {
  let { data } = await supabase.from("collections").select();
  console.log(data);
}

export default async function Home() {
  await data();
  return (
    <>
      <title>Home</title>
      <main></main>
    </>
  );
}
