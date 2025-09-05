import { useState } from "react";
import { Link, useNavigate } from "react-router";
import Sidebar from "../components/Sidebar";
import BasicStepper from "../components/BasicStepper";
import Button from "../components/Button";
import BasicSwitch from "../components/BasicSwitch";
import TextField from "@mui/material/TextField";
import AvatarTop from "../components/AvatarTop";
import ProgressBar from "../components/ProgressBar";

export function Basics() {
  const [completedSteps, setCompletedSteps] = useState<{
    [k: number]: boolean;
  }>({});

  const [titulo, setTitulo] = useState("");
  const [email, setEmail] = useState("");
  const [ativo, setAtivo] = useState(false);

  const [tituloError, setTituloError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleNext = () => {
    let hasError = false;

    if (!titulo.trim()) {
      setTituloError(true);
      hasError = true;
    } else {
      setTituloError(false);
    }

    if (!email.trim()) {
      setEmailError(true);
      setEmailErrorMessage("Campo obrigatório");
      hasError = true;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setEmailError(true);
        setEmailErrorMessage("Digite um e-mail válido");
        hasError = true;
      } else {
        setEmailError(false);
        setEmailErrorMessage("");
      }
    }

    if (hasError) return;

    const updatedSteps = { ...completedSteps, 0: true };
    setCompletedSteps(updatedSteps);

    navigate("/Professionals", {
      state: {
        completedSteps: updatedSteps,
        titulo,
        email,
        ativo,
      },
    });
  };

  return (
    <div className="h-screen bg-white flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <div className="pb-4 pr-14 pt-4 justify-end pl-10">
          <AvatarTop />
        </div>
        <div className="flex-1 p-10 pr-36">
          <div className="pt-6 pb-4">
            <ProgressBar value={0} />
          </div>

          <div className="flex gap-16 items-start">
            {/* Stepper */}
            <div>
              <BasicStepper activeStep={0} completed={completedSteps} />
            </div>

            {/* Formulário */}
            <div className="flex flex-col gap-4 flex-1">
              <h1 className="text-xl font-bold">Informações Básicas</h1>

              <TextField
                required
                label="Título"
                fullWidth
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                error={tituloError}
                helperText={tituloError ? "Campo obrigatório" : ""}
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
                type="email"
                label="E-mail"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                helperText={emailError ? emailErrorMessage : ""}
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
                <BasicSwitch checked={ativo} onChange={setAtivo} />
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

                <Button text="Próximo" onClick={handleNext} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
