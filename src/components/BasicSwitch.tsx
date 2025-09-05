import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";

const IOSSwitch = styled(Switch)(() => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: "#65C466",
        opacity: 1,
        border: 0,
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: "#E9E9EA",
    opacity: 1,
  },
}));

type BasicSwitchProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
};

export default function BasicSwitch({ checked, onChange }: BasicSwitchProps) {
  return (
    <FormControlLabel
      control={
        <IOSSwitch
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
        />
      }
      label="Ativar ao criar"
      sx={{
        "& .MuiFormControlLabel-label": {
          marginLeft: 2,
        },
      }}
    />
  );
}
