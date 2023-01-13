import supabase from "../utils/supabase-browser";

async function getUserProject(userId) {
  const { data } = await supabase
    .from("profiles")
    .select("projects")
    .eq("id", userId);
  if (data) return data[0].projects;
  return [];
}

async function getProjects() {
  const { data } = await supabase.from("collections").select("name");
  return data;
}

export { getUserProject, getProjects };
