"use client";
import { InputBase, Paper } from "@mui/material";
import { getProjects } from "../functions/query";
import { useEffect, useState } from "react";

function SearchBar() {
  const [searchResults, setSearchResults] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    console.log("useEffect");
    async function searchProject(searchParms: string) {
      if (searchParms?.length > 3) {
        console.log(await getProjects());
      }
    }
    searchProject(search);
  }, [search]);

  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: "95%",
        height: "60%",
        alignSelf: "center",
        marginTop: "10px",
        backgroundColor: "rgba(21,25,23, 0.85)",
      }}
    >
      <InputBase
        placeholder="Search For A Project"
        sx={{ color: "white" }}
        inputProps={{ "aria-label": "Search For A Project" }}
        onChange={(event) => setSearch(event.target.value)}
      />
    </Paper>
  );
}
export default SearchBar;
