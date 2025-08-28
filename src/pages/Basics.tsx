import { useState } from "react";
import { Link } from "react-router";
import Sidebar from "../components/Sidebar";
import BasicStepper from "../components/BasicStepper";
import Button from "../components/Button";
import BasicSwitch from "../components/BasicSwitch";
import TextField from "@mui/material/TextField";
import AvatarTop from "../components/AvatarTop";
import ProgressBar from "../components/ProgressBar";

export function Basics() {
  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<{
    [k: number]: boolean;
  }>({});

  const handleNext = () => {
    setCompletedSteps({ ...completedSteps, [activeStep]: true });
  };

  return (
    <div className="h-screen bg-white flex">
      <Sidebar />
      <div className="flex-1 p-10 pr-36">
        <div className="pb-4 flex justify-end">
          <AvatarTop />
        </div>
        <div className="pt-6 pb-4">
          <ProgressBar value={0} /> {/* Sem animação aqui */}
        </div>
        <div className="flex gap-16 items-start">
          <div>
            <BasicStepper activeStep={activeStep} completed={completedSteps} />
          </div>

          <div className="flex flex-col gap-4 flex-1">
            <h1 className="text-xl font-bold">Informações Básicas</h1>
            <TextField
              required
              id="outlined-required"
              label="Título"
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
            />
            <TextField
              required
              id="outlined-required-2"
              label="E-mail"
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
            />
            <div className="pt-6 pl-2">
              <BasicSwitch />
            </div>

            <div className="flex justify-between mt-30">
              <Link to="/">
                <Button
                  text="Voltar"
                  bgColor="#fff"
                  hoverColor={"#fff"}
                  textColor="#919EABCC"
                />
              </Link>

              {/* Passa completedSteps via state, sem animar aqui */}
              <Link
                to="/Professionals"
                state={{
                  completedSteps: { ...completedSteps, [activeStep]: true },
                }}
                onClick={handleNext}
              >
                <Button text="Próximo" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
