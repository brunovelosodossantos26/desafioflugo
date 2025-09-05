import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

type DepartamentoSelectProps = {
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  error?: boolean;
  helperText?: string;
};

export default function DepartamentoSelect({
  value,
  onChange,
  error,
  helperText,
}: DepartamentoSelectProps) {
  return (
    <TextField
      select
      label="Selecione um departamento"
      value={value}
      onChange={onChange}
      error={error}
      helperText={helperText}
      fullWidth
      sx={{
        "& label": { color: "#225" },
        "& label.Mui-focused": { color: "#22c55e" },
        "& .MuiOutlinedInput-root": {
          "& fieldset": { borderColor: "#22c55e" },
          "&:hover fieldset": { borderColor: "#16a34a" },
          "&.Mui-focused fieldset": { borderColor: "#22c55e" },
          "& .MuiOutlinedInput-notchedOutline": {
            borderRadius: "12px",
          },
        },
      }}
    >
      <MenuItem value="TI">Tecnologia da Informação</MenuItem>
      <MenuItem value="Produto">Produto</MenuItem>
      <MenuItem value="Design">Design</MenuItem>
      <MenuItem value="Marketing">Marketing</MenuItem>
      <MenuItem value="Recursos Humanos">Recursos Humanos</MenuItem>
      <MenuItem value="Administração">Administração</MenuItem>
    </TextField>
  );
}
