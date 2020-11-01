import React, { useState } from "react";
import { TextField, MenuItem } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";

import {experienceOptions} from "./../../data/selectOptions";
import useSortQuery from "./../../hooks/useSortQuery";
import useExperienceQuery from "./../../hooks/useExperienceQuery";


export default function ExperienceOptions() {
  const location = useLocation();
  const currentUrl = location.pathname;
  const experienceQuery = useExperienceQuery();
  const sortQuery = useSortQuery();
  const [value, setValue] = useState(experienceQuery);
  
  return (
    <TextField
      fullWidth
      id="experience-select"
      select
      label="doświadczenie"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      variant="outlined"
    >
{experienceOptions.map((option) => (
  <MenuItem
    component={Link}
    to={`${currentUrl}?sort=${sortQuery.sortSelectValue}&${option.url}`} 
    key={option.value}
    value={option.value}
  >
    {option.name}
  </MenuItem>
))}
    </TextField>
  );
}

