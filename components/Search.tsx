"use client";
import AsyncSelect from "react-select/async";

async function getSearch() {}
function SearchBar() {
  const aquaticCreatures = [
    { label: "Shark", value: "Shark" },
    { label: "Dolphin", value: "Dolphin" },
    { label: "Whale", value: "Whale" },
    { label: "Octopus", value: "Octopus" },
    { label: "Crab", value: "Crab" },
    { label: "Lobster", value: "Lobster" },
  ];
  const loadOptions = (
    inputValue: string,
    callback: (options: any) => void
  ) => {
    setTimeout(() => {
      callback(aquaticCreatures);
    }, 1000);
  };
  return (
    <AsyncSelect
      cacheOptions
      loadOptions={loadOptions}
      id="long-value-select"
      instanceId="long-value-select"
    />
  );
}
export default SearchBar;
