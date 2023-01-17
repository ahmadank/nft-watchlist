import supabase from "../utils/supabase-browser";
import _, { unique } from "underscore";

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
    .select("name, slug, imageUrl")
    .ilike("name", `%${params}%`)
    .limit(20);
  return _.unique(data, "name").slice(0, 3);
  return data;
}

export { getUserProject, getProjects };
