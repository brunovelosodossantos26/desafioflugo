import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { styled } from "@mui/material/styles";

const steps = ["Infos Básicas", "Infos Profissionais"];

const ICON_SIZE = 3;

const CustomConnector = styled(StepConnector)(() => {
  const lineHeight = 80 - ICON_SIZE;
  return {
    [`&.${stepConnectorClasses.vertical}`]: {
      marginLeft: 18,
      padding: 0,
    },
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#E0E0E0",
      borderLeftWidth: 2,
      minHeight: `${lineHeight}px`,
    },
  };
});

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
        connector={<CustomConnector />}
        sx={{
          "& .MuiStepIcon-root.Mui-completed": { color: "#22c55e" },
          "& .MuiStepIcon-root.Mui-active": { color: "#22c55e" },
          "& .MuiStep-root": { alignItems: "flex-start" },
          "& .MuiStepLabel-root": { marginLeft: 1 },
        }}
      >
        {steps.map((label, index) => (
          <Step key={label} completed={Boolean(completed[index])}>
            <StepButton>{label}</StepButton>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
