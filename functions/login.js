import supabase from "../utils/supabase-browser";

const handleLogin = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "github",
  });
};

const handleLogout = async () => {
  const { error } = await supabase.auth.signOut();
};

export { handleLogin, handleLogout };
