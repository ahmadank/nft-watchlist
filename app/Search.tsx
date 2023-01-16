"use client";
import { InputBase, Paper } from "@mui/material";
import { getProjects } from "../functions/query";
import { useEffect, useState } from "react";
import Project from "../components/Project";
import styles from "../styles/Index.module.css";
import getData from "../functions/getDataProject";
import { addProjectToCollection } from "../functions/mutation";

interface project {
  name: string;
  slug: string;
  imageUrl: string;
}
function SearchBar() {
  const [searchResults, setSearchResults] = useState([] as any);
  const [search, setSearch] = useState("");
  const [unknownProject, setUnkownProject] = useState({} as project);
  useEffect(() => {
    setSearchResults([]);
    setUnkownProject({} as any);
    async function searchProject(searchParms: string) {
      if (searchParms?.length > 3) {
        setSearchResults(await getProjects(searchParms));
      }
      if (searchResults.filter((p: project) => p.name == search) == 0) {
        const res = await getData(search);
        if (res) {
          addProjectToCollection(res.collection);
          setUnkownProject(res.collection);
        }
      }
    }
    searchProject(search);
  }, [search]);

  return (
    <div className={styles.search}>
      <Paper
        component="form"
        sx={{
          display: "flex",
          alignItems: "center",
          alignSelf: "center",
          marginTop: "10px",
          backgroundColor: "rgba(21,25,23, 0.85)",
          width: "90%",
          height: "50px",
          borderRadius: "5px 5px 0px 0px",
        }}
      >
        <InputBase
          placeholder="Search For A Project"
          sx={{ color: "white", padding: "4px 0 5px 10px" }}
          inputProps={{ "aria-label": "Search For A Project" }}
          onChange={(event) => setSearch(event.target.value)}
        />
      </Paper>
      {searchResults.map((r: any) => {
        return (
          <Paper
            key={r.name}
            sx={{
              display: "flex",
              alignItems: "center",
              width: "calc(90% - 3px)",
              height: "50px",
              alignSelf: "center",
              backgroundColor: "rgba(21,25,23)",
              borderRadius: "0px",
              borderBlock: "1px",
              border: "solid",
              borderColor: "white",
            }}
          >
            <Project project={r} />
          </Paper>
        );
      })}
      {unknownProject != null && (
        <Paper
          component="form"
          sx={{
            display: "flex",
            alignItems: "center",
            width: "95%",
            height: "60%",
            alignSelf: "center",
            backgroundColor: "rgba(21,25,23, 0.85)",
            borderRadius: "0px",
            borderBlock: "1px",
            border: "solid",
            borderColor: "white",
          }}
        />
      )}
      <p></p>
    </div>
  );
}
export default SearchBar;
