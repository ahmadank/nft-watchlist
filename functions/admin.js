import { supabase } from "./../lib/supabaseClient";

async function updateCollections() {
  const { error } = await supabase.from("collections").delete().neq("id", -1);
  if (error) console.log(error);
  for (let i = 0; i < 5; ++i) {
    const options = { method: "GET", headers: { accept: "application/json" } };

    fetch(
      `https://api.opensea.io/api/v1/collections?offset=${i}&limit=300`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        response.collections.forEach(async (element) => {
          const { error } = await supabase
            .from("collections")
            .insert({ name: element.name });
          await new Promise((r) => setTimeout(r, 10000));
        });
      })
      .catch((err) => console.error(err));
  }
}

export { updateCollections };
