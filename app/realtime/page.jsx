import createClient from "../../utils/supabase-server";
import Posts from "./post";

export const revalidate = 0;

export default async function Realtime() {
  const supabase = createClient();
  const { data } = await supabase.from("profiles").select("*");

  return <Posts serverPosts={data || []} />;
}
