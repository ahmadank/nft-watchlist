"use client";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  FormGroup,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material/";

function Filter(props: any) {
  const [projectMap, setMap] = useState(new Map());
  const updateMap = (k: string, v: boolean) => {
    setMap(projectMap.set(k, v));
  };
  useEffect(() => {
    props.projects.forEach((project: string) => {
      if (!projectMap.get(project[0])) updateMap(project[0], false);
    });
    setMap((oldMap) => new Map(oldMap));
  }, [props]);

  const [checked, setChecked] = useState(true);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    setChecked(event.target.checked);
  };

  return (
    <Card
      sx={{
        width: "20vw",
        backgroundColor: "rgba(21,25,23, 0.85)",
        height: "40vw",
        overflow: "overlay",
        display: "flex",
      }}
    >
      {props.projects ? (
        <CardContent>
          <FormGroup>
            {Array.from(projectMap.keys()).map((k: string) => (
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked}
                    onChange={(e) => handleChange(e, "test")}
                    sx={{ color: "white" }}
                  />
                }
                key={k}
                label={k}
                sx={{
                  fontSize: 14,
                  color: "#16abff6e",
                  textShadow: "0.5px 0.5px 1px #fff, 1px 1px 50px",
                }}
              />
            ))}
          </FormGroup>
        </CardContent>
      ) : (
        <CardContent sx={{ alignSelf: "center" }}>
          <Typography
            sx={{
              fontSize: 14,
              color: "#16abff6e",
              textShadow: "0.5px 0.5px 1px #fff, 1px 1px 50px",
            }}
          >
            No Filters available
          </Typography>
        </CardContent>
      )}
    </Card>
  );
}
export default Filter;
