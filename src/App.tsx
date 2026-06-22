// src/App.tsx

import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import { LogoutModal } from "./logout/LogoutModal";
import { AuthProvider } from "./auth/useAuth";

function App() {
  const [showLogout, setShowLogout] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRouter onLogoutClick={() => setShowLogout(true)} />
        <LogoutModal
          isOpen={showLogout}
          onCancel={() => setShowLogout(false)}
          onConfirm={handleLogout}
        />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;