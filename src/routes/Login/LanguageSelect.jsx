import React from "react";
import { LANGUAGES } from "../../constants/constants";
import {
  Box,
  MenuItem,
  InputLabel,
  Select,
  FormControl,
  Chip,
  OutlinedInput,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const LanguageSelect = (props) => {
  const theme = useTheme();

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    props.setLanguageOption(
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <FormControl sx={{ m: 1, width: '100%' }}>
      <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
      <Select
        labelId="demo-multiple-chip-label"
        id="demo-multiple-chip"
        multiple
        value={props.optLanguage}
        onChange={handleChange}
        input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
        renderValue={(selected) => (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {selected.map((value) => (
              <Chip key={value} label={value} />
            ))}
          </Box>
        )}
        MenuProps={MenuProps}
      >
        {LANGUAGES.map((language, index) => (
          <MenuItem
            key={index}
            value={language}
            style={getStyles(language, props.optLanguage, theme)}
          >
            {language}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default LanguageSelect;
