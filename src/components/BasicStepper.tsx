import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Box from "@mui/material/Box";

const steps = ["Infos Básicas", "Infos Profissionais"];

type Props = {
  activeStep: number;
  completed: { [k: number]: boolean };
};

export default function BasicStepper({ activeStep, completed }: Props) {
  return (
    <Box>
      <Stepper
        activeStep={activeStep}
        orientation="vertical"
        nonLinear
        sx={{
          "& .MuiStepIcon-root.Mui-completed": {
            color: "#22c55e",
          },
          "& .MuiStepIcon-root.Mui-active": {
            color: "#22c55e",
          },
        }}
      >
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton>{label}</StepButton>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
