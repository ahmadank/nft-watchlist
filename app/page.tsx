import DataCards from "./DataCards";
import Filter from "./Filter";
import styles from "../styles/Index.module.css";
export default async function Home() {
  return (
    <>
      <title>Home</title>
      <main>
        <div className={styles.wrapper}>
          <div className={styles.filter}>
            <Filter projects={["null"]} />
          </div>
          <div className={styles.cardContainer}>
            {/* @ts-expect-error Server Component */}
            <DataCards name="hapeprime"></DataCards>
          </div>
        </div>
      </main>
    </>
  );
}
