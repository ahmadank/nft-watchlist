import createClient from "../utils/supabase-server";

async function updateUserProjects(projects) {
  const supabase = createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (session) {
    const { error } = await supabase
      .from("profiles")
      .update({ projects: projects })
      .eq("id", session.user.id);
    if (error) console.log(error);
  }
  return;
}

export { updateUserProjects };
