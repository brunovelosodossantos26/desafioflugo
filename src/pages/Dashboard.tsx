import Sidebar from "../components/Sidebar";
import DataTable from "../components/Table";

export function Dashboard() {
  return (
    <div className="h-screen bg-white">
      <div className="h-[100%] flex">
        <Sidebar />
        <div className="flex-1 p-4">
          <DataTable />
        </div>
      </div>
    </div>
  );
}
