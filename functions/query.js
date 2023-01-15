import supabase from "../utils/supabase-browser";

async function getUserProject(userId) {
  const { data } = await supabase
    .from("profiles")
    .select("projects")
    .eq("id", userId);
  if (data) return data[0].projects;
  return [];
}

async function getProjects(params) {
  const { data } = await supabase
    .from("collections")
    .select("name")
    .ilike("name", `%${params}%`);
  if (data?.length > 3) return data.splice(0, 3);
  return data;
}

export { getUserProject, getProjects };
