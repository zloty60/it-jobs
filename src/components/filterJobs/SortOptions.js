import React, { useState } from "react";
import { TextField, MenuItem } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";

import useCheckQuery from "./../../hooks/useCheckQuery";
import { sortOptions } from "./../../data/selectOptions";

export default function SortOptions() {
  const sortQuery = useCheckQuery();
  const location = useLocation();
  const currentUrl = location.pathname;
  const [value, setValue] = useState(sortQuery.sortSelectValue);

  return (
    <TextField
      fullWidth
      id="sort-select"
      select
      label="Sortuj według"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      variant="outlined"
    >
      {sortOptions.map((option) => (
        <MenuItem
          component={Link}
          to={`${currentUrl}${option.url}`}
          key={option.value}
          value={option.value}
        >
          {option.name}
        </MenuItem>
      ))}
    </TextField>
  );
}
