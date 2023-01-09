import DataCards from "./DataCards";
import Filter from "./Filter";
import styles from "../styles/Index.module.css";
import { cookies } from "next/headers";

export default async function Home() {
  const nextCookies = cookies();
  const auth = nextCookies.get("supabase-auth-token");
  const projects = [
    "hapeprime",
    "clonex",
    "friendship-bracelets-by-alexis-andre",
    "boredapeyachtclub",
    "cryptopunks",
    "thecaptainz",
    "mutant-ape-yacht-club",
    "thememes6529",
    "hapeprime",
    "clonex",
    "friendship-bracelets-by-alexis-andre",
  ];
  console.log([...projects]);
  return (
    <>
      <title>Home</title>
      <main>
        {auth ? (
          <div className={styles.wrapper}>
            <>
              <div className={styles.filter}>
                <Filter projects={projects} />
              </div>
              {[...projects].map((project) => {
                // prettier-ignore
                {/* @ts-expect-error Server Component */}
                return <DataCards name={project}></DataCards>;
              })}
            </>
          </div>
        ) : (
          <></>
        )}
      </main>
    </>
  );
}
