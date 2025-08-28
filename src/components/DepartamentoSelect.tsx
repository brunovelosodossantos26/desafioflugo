import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import type { SelectChangeEvent } from "@mui/material/Select";

export default function DepartamentoSelect() {
  const [departamento, setDepartamento] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setDepartamento(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          Selecione um departamento
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={departamento}
          onChange={handleChange}
          input={<OutlinedInput label="Selecione um departamento" />}
          sx={{
            "& .MuiOutlinedInput-notchedOutline": {
              borderRadius: "12px",
            },
          }}
        >
          <MenuItem value={10}>Design</MenuItem>
          <MenuItem value={20}>Marketing</MenuItem>
          <MenuItem value={30}>Produto</MenuItem>
          <MenuItem value={30}>TI</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
