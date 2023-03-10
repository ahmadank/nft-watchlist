"use client";
import React, { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Card,
  CardContent,
  FormGroup,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material/";
import { motion } from "framer-motion";

type props = {
  projects: [string];
};

function Filter(props: props) {
  const [projectSet, setSet] = useState(new Set());
  const [filter, setFiltered] = useState(false);
  const addToSet = (k: string) => {
    setSet(projectSet.add(k));
  };
  const router = useRouter();
  const params = useSearchParams();
  const array = useMemo(() => {
    props.projects?.forEach((project: string) => {
      const char = project[0].toUpperCase();
      if (!projectSet.has(char)) addToSet(char);
    });
    setSet((oldSet) => new Set(oldSet));
    return projectSet;
  }, [props]);

  useEffect(() => {
    if (!params.get("filter") && filter) {
      router.push("/");
      setFiltered(false);
    }
  }, [params.get("filter")]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    setFiltered(true);
    const filterParams = params.get("filter") || "";
    if (filterParams.includes(key))
      router.push(`/?filter=${filterParams?.replace(key, "")}`);
    else if (filterParams.includes(key.toLowerCase()))
      router.push(`/?filter=${filterParams?.replace(key.toLowerCase(), "")}`);
    else router.push(`/?filter=${filterParams}${key}`);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Card
        sx={{
          backgroundColor: "rgba(21,25,23, 0.85)",
          overflow: "overlay",
          height: "400px",
          maxWidth: "275px",
          borderRadius: "10px",
        }}
      >
        {props.projects ? (
          <CardContent>
            <Typography
              sx={{
                fontSize: 14,
                color: "#16abff6e",
                textShadow: "0.5px 0.5px 1px #fff, 1px 1px 50px",
                border: "2px solid #fff",
                textAlign: "center",
              }}
            >
              Filter
            </Typography>
            <FormGroup>
              {Array.from(array.keys()).map((key: any) => (
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={
                        params
                          .get("filter")
                          ?.toUpperCase()
                          ?.includes(key.toUpperCase())
                          ? true
                          : false
                      }
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
    </motion.div>
  );
}
export default Filter;
