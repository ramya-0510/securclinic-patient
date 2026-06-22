import {
  LayoutDashboard,
  CalendarDays,
  FileText,
  Receipt,
  Headphones,
  Settings,
  LogOut,
} from "lucide-react";
import { Fragment } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "../ui/Button";
import logo from "../../../../assets/logo.png";

interface Props {
  onLogoutClick: () => void;
}

function Sidebar({ onLogoutClick }: Props) {
  const navigate = useNavigate();
  const location = useLocation();

  // Paths are root-relative now — each subdomain (patient./doctor./admin.)
    
  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard",     path: "/dashboard"    },
    { icon: CalendarDays,    label: "Appointments",  path: "/appointments" },
    { icon: FileText,        label: "Prescriptions", path: "/prescription" },
    { icon: Receipt,         label: "Billing",       path: "/billing"      },
    { icon: Headphones,      label: "Consultation",  path: "/consultation" },
  ];

  // Only Settings here — Logout is its own button below, wired to onLogoutClick
  const bottomItems = [
    { icon: Settings, label: "Settings", path: "/settings" },
  ];

  return (
    <aside className="hidden h-screen w-60 shrink-0 flex-col justify-between overflow-hidden border-r border-slate-200 bg-white lg:flex">
      <div>
        {/* Logo */}
        <div className="flex h-12 items-center border-b border-slate-100 px-5">
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="SecurClinic logo"
              className="h-8 w-8 rounded-lg object-contain"
            />
            <h1 className="font-brand text-[18px] tracking-normal text-[#198CFF] uppercase">
              SECURCLINIC
            </h1>
          </div>
        </div>

        {/* Top nav items */}
        <div className="space-y-2 p-4">
          {menuItems.map((item) => {
            const Icon     = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <Fragment key={item.label}>
                <Button
                  variant="ghost"
                  fullWidth
                  onClick={() => navigate(item.path)}
                  leftIcon={<Icon size={19} strokeWidth={2.2} />}
                  className={`justify-start gap-3 px-3 py-2.5 text-left text-[15px] font-medium
                    ${isActive
                      ? "bg-blue-50 !text-blue-600"
                      : "!text-slate-500 hover:bg-slate-50"
                    }`}
                >
                  <span>{item.label}</span>
                </Button>

                {item.label === "Billing" && (
                  <div className="my-3 border-t border-slate-200" />
                )}
              </Fragment>
            );
          })}
        </div>
      </div>

      {/* Bottom nav items */}
      <div className="space-y-2 p-4">
        {bottomItems.map((item) => {
          const Icon     = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <Button
              key={item.label}
              variant="ghost"
              fullWidth
              onClick={() => navigate(item.path)}
              leftIcon={<Icon size={19} strokeWidth={2.1} />}
              className={`justify-start gap-3 px-3 py-2.5 text-left text-[15px] font-medium
                ${isActive
                  ? "bg-blue-50 !text-blue-600"
                  : "!text-slate-500 hover:bg-slate-50"
                }`}
            >
              {item.label}
            </Button>
          );
        })}

        {/* Logout — opens modal instead of navigating */}
        <Button
          variant="ghost"
          fullWidth
          onClick={onLogoutClick}
          leftIcon={<LogOut size={19} strokeWidth={2.1} />}
          className="justify-start gap-3 px-3 py-2.5 text-left text-[15px] font-medium !text-slate-500 hover:bg-slate-50"
        >
          Logout
        </Button>
      </div>
    </aside>
  );
}

export default Sidebar;