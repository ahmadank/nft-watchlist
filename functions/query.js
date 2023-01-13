import createClient from "../utils/supabase-server";

async function getUserProject() {
  const supabase = createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (session) {
    const { data } = await supabase
      .from("profiles")
      .select("projects")
      .eq("id", session.user.id);
    return data[0].projects;
  }
  return [];
}

export { getUserProject };
