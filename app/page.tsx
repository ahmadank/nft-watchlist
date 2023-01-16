import DataCards from "./DataCards";
import Filter from "./Filter";
import styles from "../styles/Index.module.css";
import Login from "../components/Login";
import { getUserProject } from "../functions/query";
import SearchBar from "./Search";
import { updateUserProjects } from "../functions/mutation";
import createClient from "../utils/supabase-server";

interface props {
  params: any;
  searchParams: any;
}
export default async function Home(props: props) {
  const supabase = createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const projects = await getUserProject(session?.user.id);

  const displayedProjects = props.searchParams?.filter
    ? projects.filter((project: string) =>
        props.searchParams?.filter
          ?.toUpperCase()
          .includes(project[0].toUpperCase())
      )
    : projects;
  return (
    <>
      <title>Home</title>
      <main>
        {session ? (
          <div className={styles.main}>
            <SearchBar />
            <div className={styles.wrapper}>
              {displayedProjects ? (
                <>
                  <div className={styles.filter}>
                    <Filter projects={projects} />
                  </div>
                  {displayedProjects.map((project: string) => {
                    // prettier-ignore
                    {/* @ts-expect-error Server Component */}
                    return <DataCards key={project} name={project}></DataCards>;
                  })}
                </>
              ) : (
                <p>Project</p>
              )}
            </div>
          </div>
        ) : (
          <Login />
        )}
      </main>
    </>
  );
}
