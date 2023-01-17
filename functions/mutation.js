import supabase from "../utils/supabase-browser";

async function appendToUserProjects(user, projectName) {
  let { data, error } = await supabase.rpc("append_array", {
    id: user,
    new_element: projectName,
  });
}

async function removeFromUserProjects(user, projectName) {
  let { data, error } = await supabase.rpc("remove_array", {
    id: user,
    new_element: projectName,
  });
}

async function addProjectToCollection(project) {
  const { data } = await supabase
    .from("collections")
    .select("name")
    .eq("name", project.name);
  if (data == 0) {
    const { error } = await supabase.from("collections").insert({
      name: project.name,
      slug: project.slug,
      imageUrl: project.image_url,
    });
    if (error) console.log(error);
  }
}

export { appendToUserProjects, addProjectToCollection, removeFromUserProjects };
