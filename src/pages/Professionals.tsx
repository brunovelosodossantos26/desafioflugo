import Sidebar from "../components/Sidebar";

export function Professionals() {
  return (
    <div className="h-screen bg-white">
      <div className="h-[100%] flex">
        <Sidebar />
        <div className="flex-1 p-4">
          <h1 className="text-2xl font-bold">Informações Profissionais</h1>
          <p>Conteúdo da página de Informações Básicas.</p>
        </div>
      </div>
    </div>
  );
}
