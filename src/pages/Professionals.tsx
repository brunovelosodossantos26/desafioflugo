import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import Sidebar from "../components/Sidebar";
import BasicStepper from "../components/BasicStepper";
import AvatarTop from "../components/AvatarTop";
import ProgressBar from "../components/ProgressBar";
import DepartamentoSelect from "../components/DepartamentoSelect";
import Button from "../components/Button";
import { collection, addDoc, query, getDocs, where } from "firebase/firestore";
import { db } from "../server/firebase";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export function Professionals() {
  const location = useLocation();
  const navigate = useNavigate();

  const titulo = location.state?.titulo || "";
  const email = location.state?.email || "";
  const status = location.state?.ativo ?? false;

  const completedStepsFromLocation = location.state?.completedSteps || {};
  const [localCompletedSteps, setLocalCompletedSteps] = useState(
    completedStepsFromLocation
  );

  const [progress, setProgress] = useState(0);
  const [departamento, setDepartamento] = useState("");
  const [error, setError] = useState(false);

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">(
    "success"
  );

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      setProgress(current);
      if (current >= 50) clearInterval(interval);
    }, 10);
    return () => clearInterval(interval);
  }, []);

  async function handleConcluir() {
    if (!departamento) {
      setError(true);
      return;
    } else {
      setError(false);
    }

    try {
      const q = query(
        collection(db, "Colaboradoes"),
        where("email", "==", email)
      );
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        setSnackbarMessage("Este e-mail já está cadastrado!");
        setSnackbarSeverity("error");
        setOpenSnackbar(true);
        return;
      }

      await addDoc(collection(db, "Colaboradoes"), {
        departamento,
        email,
        status,
        titulo,
      });

      const updatedSteps = { ...localCompletedSteps, [1]: true };
      setLocalCompletedSteps(updatedSteps);

      setSnackbarMessage("Cadastro concluído com sucesso!");
      setSnackbarSeverity("success");
      setOpenSnackbar(true);

      let current = 50;
      const interval = setInterval(() => {
        current += 1;
        setProgress(current);
        if (current >= 100) clearInterval(interval);
      }, 10);

      setTimeout(() => {
        navigate("/", { state: { completedSteps: updatedSteps } });
      }, 1500);
    } catch (err) {
      setSnackbarMessage("Erro ao adicionar documento!");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
      console.error(err);
    }
  }

  return (
    <div className="h-screen flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <div className="pb-4 pr-14 pt-4 flex justify-end">
          <AvatarTop />
        </div>
        <div className="flex-1 p-10 pr-36">
          <div className="pt-6 pb-4">
            <ProgressBar value={progress} />
          </div>
          <div className="flex gap-16">
            <BasicStepper activeStep={1} completed={localCompletedSteps} />
            <div className="flex flex-col gap-4 flex-1">
              <h1 className="text-xl font-bold">Informações Profissionais</h1>
              <DepartamentoSelect
                value={departamento}
                onChange={(e) => setDepartamento(e.target.value)}
                error={error && !departamento}
                helperText={
                  error && !departamento ? "Selecione um departamento" : ""
                }
              />
              <div className="flex justify-between mt-64.5">
                <Link to="/Basics">
                  <Button
                    text="Voltar"
                    bgColor="#fff"
                    hoverColor="#fff"
                    textColor="#919EABCC"
                  />
                </Link>
                <Button text="Concluir" onClick={handleConcluir} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          severity={snackbarSeverity}
          variant="filled"
          onClose={() => setOpenSnackbar(false)}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}
