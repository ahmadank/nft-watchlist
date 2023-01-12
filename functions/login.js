import supabase from "../utils/supabase-browser";

const handleGithubLogin = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "github",
  });
};

const handleLogin = async (email, password) => {
  const { error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  if (error) console.log(error);
};

const handleRegister = async (email, password) => {
  const { error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });
  if (error) console.log(error);
};

const handleLogout = async () => {
  const { error } = await supabase.auth.signOut();
};

export { handleGithubLogin, handleLogin, handleLogout, handleRegister };
