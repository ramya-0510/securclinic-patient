import Sidebar from "./Sidebar";
import Header from "./Header";

interface Props {
  children: React.ReactNode;
  headerTitle?: string;
  showSearch?: boolean;
  onLogoutClick: () => void;
}

function DashboardLayout({ children, headerTitle, showSearch = true, onLogoutClick }: Props) {
  return (
    <div className="h-screen bg-[#f7f7f7] text-slate-800 flex overflow-hidden">
      <Sidebar onLogoutClick={onLogoutClick} />

      <div className="flex flex-col flex-1 overflow-hidden min-w-0">
        <Header title={headerTitle} showSearch={showSearch} />

        <main className="flex-1 overflow-hidden p-4">
          {children}
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;