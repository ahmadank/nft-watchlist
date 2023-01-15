"use client";
import { InputBase, Paper } from "@mui/material";
import { getProjects } from "../functions/query";
import { useEffect, useState } from "react";
import Project from "./Project";

function SearchBar() {
  const [searchResults, setSearchResults] = useState([] as any);
  const [search, setSearch] = useState("");
  useEffect(() => {
    async function searchProject(searchParms: string) {
      if (searchParms?.length > 3) {
        setSearchResults(await getProjects(searchParms));
      }
    }
    searchProject(search);
  }, [search]);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", zIndex: "1" }}>
      <Paper
        component="form"
        sx={{
          display: "flex",
          alignItems: "center",
          width: "95%",
          height: "60%",
          alignSelf: "center",
          marginTop: "10px",
          backgroundColor: "rgba(21,25,23, 0.85)",
          borderRadius: "0px",
        }}
      >
        <InputBase
          placeholder="Search For A Project"
          sx={{ color: "white" }}
          inputProps={{ "aria-label": "Search For A Project" }}
          onChange={(event) => setSearch(event.target.value)}
        />
      </Paper>
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
      >
        <Project />
      </Paper>
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
    </div>
  );
}
export default SearchBar;
