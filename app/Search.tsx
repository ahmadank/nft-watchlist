"use client";
import { InputBase, Paper } from "@mui/material";
import { getProjects } from "../functions/query";
import { useEffect, useState } from "react";
import Project from "../components/Project";
import styles from "../styles/Index.module.css";
import getData from "../functions/getDataProject";
import { addProjectToCollection } from "../functions/mutation";
import _, { unique } from "underscore";

interface project {
  name: string;
  slug: string;
  imageUrl: string;
}

function useDebounceValue(value: string, time = 250) {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceValue(value);
    }, time);
    return () => {
      clearTimeout(timeout);
    };
  }, [value, time]);
  return debounceValue;
}
function SearchBar(props: any) {
  const [searchResults, setSearchResults] = useState([] as any);
  const [search, setSearch] = useState("");
  const [unknownProject, setUnkownProject] = useState({} as project);
  const debounceQuery = useDebounceValue(search);
  useEffect(() => {
    setSearchResults([]);
    setUnkownProject({} as any);
    async function searchProject() {
      if (debounceQuery?.length > 3) {
        setSearchResults(await getProjects(debounceQuery));
      }
      if (searchResults.filter((p: project) => p.name == search) == 0) {
        const res = await getData(search);
        if (res) {
          addProjectToCollection(res.collection);
          setSearchResults((oldArr: any) => [oldArr, res.collection]);
        }
      }
    }
    if (search != "") searchProject();
  }, [debounceQuery]);

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
          sx={{ color: "white", padding: "4px 0 5px 10px", width: "100%" }}
          inputProps={{ "aria-label": "Search For A Project" }}
          onChange={(event) => setSearch(event.target.value)}
        />
      </Paper>
      {_.unique(searchResults, "name").map((r: any) => {
        if (r.name)
          return (
            <Paper
              key={r.name || "unknownKey"}
              sx={{
                display: "flex",
                alignItems: "center",
                width: "calc(90% - 3px)",
                height: "60px",
                alignSelf: "center",
                backgroundColor: "rgba(21,25,23)",
                borderRadius: "0px",
                borderBlock: "1px",
                border: "solid",
                borderColor: "white",
              }}
            >
              <Project project={r} currUser={props.currUser} />
            </Paper>
          );
      })}
    </div>
  );
}
export default SearchBar;
