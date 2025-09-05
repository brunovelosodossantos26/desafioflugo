import AvatarTop from "../components/AvatarTop";
import Sidebar from "../components/Sidebar";
import DataTable from "../components/Table";

export function Dashboard() {
  return (
    <div className="h-screen bg-white flex flex-col md:flex-row">
      <Sidebar />

      <div className="flex-1 p-4 flex flex-col">
        <div className="pr-10">
          <AvatarTop />
        </div>
        <div className="flex-1 overflow-auto">
          <DataTable />
        </div>
      </div>
    </div>
  );
}
