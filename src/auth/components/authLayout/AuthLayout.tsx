import type { ReactNode } from "react";
import BrandPanel from "./BrandPanel";
import Logo from "../ui/Logo";

interface AuthLayoutProps {
  children: ReactNode;
  showLogo?: boolean;
}

function AuthLayout({ children, showLogo = true }: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen">
      <div className="w-150 flex flex-col justify-between  p-10">
        {showLogo && (
          <div className="flex justify-center">
            <Logo />
          </div>
        )}
        <div className="flex flex-col gap-6">{children}</div>
        <footer className="flex justify-between text-xs text-gray-400">
          <div className="flex gap-2"><a href="#">Terms</a><span>•</span><a href="#">Privacy</a></div>
          <span>🌐 English ▾</span>
        </footer>
      </div>
      <BrandPanel />
    </div>
  );
}

export default AuthLayout;