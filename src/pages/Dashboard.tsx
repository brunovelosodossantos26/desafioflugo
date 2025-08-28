import Sidebar from "../components/Sidebar";
import DataTable from "../components/Table";

export function Dashboard() {
  return (
    <div className="h-screen bg-white flex">
      <Sidebar />

      <div className="flex-1 p-4">
        <DataTable />
      </div>
    </div>
  );
}
