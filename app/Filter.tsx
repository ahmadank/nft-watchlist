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
      const char = project[0].toUpperCase();
      if (!projectMap.get(char)) updateMap(char, false);
    });
    setMap((oldMap) => new Map(oldMap));
  }, [props]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    updateMap(key, !projectMap.get(key));
    setMap((oldMap) => new Map(oldMap));
  };

  return (
    <Card
      sx={{
        backgroundColor: "rgba(21,25,23, 0.85)",
        height: "40vw",
        overflow: "overlay",
        display: "flex",
      }}
    >
      {props.projects ? (
        <CardContent>
          <FormGroup>
            {Array.from(projectMap.keys()).map((key: string) => (
              <FormControlLabel
                control={
                  <Checkbox
                    checked={projectMap.get(key)}
                    onChange={(e) => handleChange(e, key)}
                    sx={{ color: "white" }}
                  />
                }
                key={key}
                label={key}
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
