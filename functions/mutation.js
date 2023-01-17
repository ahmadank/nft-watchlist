import supabase from "../utils/supabase-browser";

async function updateUserProjects(user, project) {
  //   const { error } = await supabase
  //     .from("profiles")
  //     .update({ projects: projects })
  //     .eq("id", session.user.id);
  //   if (error) console.log(error);
  return;
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

export { updateUserProjects, addProjectToCollection };
