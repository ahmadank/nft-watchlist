import DataCards from "./DataCards";
import Filter from "./Filter";
import styles from "../styles/Index.module.css";
import { cookies } from "next/headers";
import Login from "../components/Login";

interface props {
  params: any;
  searchParams: any;
}
export default async function Home(props: props) {
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
  ];
  const displayedProjects = props.searchParams?.filter
    ? [...projects].filter((project) =>
        props.searchParams?.filter
          ?.toUpperCase()
          .includes(project[0].toUpperCase())
      )
    : [...projects];
  return (
    <>
      <title>Home</title>
      <main>
        {auth ? (
          <div className={styles.main}>
            <div className={styles.wrapper}>
              <>
                <div className={styles.filter}>
                  <Filter projects={projects} />
                </div>
                {displayedProjects.map((project) => {
                  // prettier-ignore
                  {/* @ts-expect-error Server Component */}
                  return <DataCards key={project} name={project}></DataCards>;
                })}
              </>
            </div>
          </div>
        ) : (
          <Login />
        )}
      </main>
    </>
  );
}
