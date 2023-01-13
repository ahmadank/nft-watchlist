import SupabaseListener from "../components/supabase-listener";
import createClient from "../utils/supabase-server";
import "../styles/globals.css";
import Header from "../components/Header.js";
export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();
  return (
    <html>
      <head />
      <body>
        <Header session={session} />
        <SupabaseListener accessToken={session?.access_token} />
        {children}
      </body>
    </html>
  );
}
