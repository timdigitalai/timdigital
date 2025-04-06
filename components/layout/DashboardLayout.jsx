import Sidebar from "../organisms/Sidebar";
import Topbar from "../organisms/Topbar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 py-[18px] bg-[white] flex flex-col overflow-hidden">
        <Topbar text={"Dashboard"} />
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
