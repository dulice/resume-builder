import { Box, FormControl, Select, InputLabel, MenuItem } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import React from "react";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
};

interface FontSizeProps {
  fontSize: string;
  setFontSize: (value: string) => void;
}
const FontSize = (props: FontSizeProps) => {
  const { fontSize, setFontSize } = props;
  return (
    <Box sx={{ maxWidth: 100 }}>
      <FormControl fullWidth>
        <InputLabel>Font Size</InputLabel>
        <Select
          value={fontSize}
          label="FontSize"
          MenuProps={MenuProps}
          onChange={(e: SelectChangeEvent) => setFontSize(e.target.value)}
        >
          {Array.from(Array(20)).map((e, index) => (
            <MenuItem value={11 + index} key={index}>
              {11 + index}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default FontSize;
