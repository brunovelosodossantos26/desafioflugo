import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import Sidebar from "../components/Sidebar";
import BasicStepper from "../components/BasicStepper";
import AvatarTop from "../components/AvatarTop";
import ProgressBar from "../components/ProgressBar";
import DepartamentoSelect from "../components/DepartamentoSelect";
import Button from "../components/Button";

export function Professionals() {
  const location = useLocation();
  const completedSteps = location.state?.completedSteps || {};
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // animação da barra de 0 até 50%
    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      setProgress(current);
      if (current >= 50) clearInterval(interval);
    }, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen flex">
      <Sidebar />
      <div className="flex-1 p-10 pr-36">
        <div className="pb-4 flex justify-end">
          <AvatarTop />
        </div>
        <div className="pt-6 pb-4">
          <ProgressBar value={progress} />
        </div>
        <div className="flex gap-16">
          <BasicStepper activeStep={1} completed={completedSteps} />
          <div className="flex flex-col gap-4 flex-1">
            <h1 className="text-xl font-bold">Informações Profissionais</h1>
            <DepartamentoSelect />

            <div className="flex justify-between mt-64.5">
              <Link to="/Basics">
                <Button
                  text="Voltar"
                  bgColor="#fff"
                  hoverColor={"#fff"}
                  textColor="#919EABCC"
                />
              </Link>

              {/* Passa completedSteps via state, sem animar aqui */}
              <Link to="/Professionals">
                <Button text="Próximo" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
