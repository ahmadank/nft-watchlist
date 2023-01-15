import { supabase } from "./../lib/supabaseClient";

async function insertProject(i) {
  const options = {
    method: "GET",
    headers: { accept: "application/json" },
  };

  fetch(
    `https://api.opensea.io/api/v1/collections?offset=${i}&limit=300`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      response.collections.forEach(async (element) => {
        if (element.slug && element.image_url) {
          const { data } = await supabase
            .from("collections")
            .select("name")
            .eq("name", element.name);
          if (data == 0) {
            const { error } = await supabase.from("collections").insert({
              name: element.name,
              slug: element.slug,
              imageUrl: element.image_url,
            });
          }
        }
      });
    })
    .catch((err) => console.error(err));
  return new Promise((resolve) => setTimeout(resolve, 400));
}

async function updateCollections() {
  const { error } = await supabase.from("collections").delete().neq("id", -1);
  for (let i = 0; i < 1000; ++i) {
    await insertProject(i);
  }
}

export { updateCollections };
