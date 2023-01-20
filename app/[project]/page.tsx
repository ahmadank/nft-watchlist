import styles from "../styles/Header.module.css";
import getData from "../../functions/getDataProject";

type PageProps = {
  params: {
    project?: string;
  };
  searchParams?: unknown;
};
async function page(props: PageProps) {
  const data = await getData(props.params.project);
  return (
    <main>
      <p style={{ textAlign: "center" }}>
        Hey we are excited that you are trying to access more info, however we
        are still building this site and are waiting for our API token. Thank
        you for understanding
      </p>
    </main>
  );
}
export default page;
