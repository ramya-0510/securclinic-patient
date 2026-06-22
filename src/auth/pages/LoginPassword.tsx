import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AuthLayout from "../components/authLayout/AuthLayout";
import InputField from "../components/ui/InputField";
import Button from "../components/ui/Button";

interface LocationState {
  mobile?: string;
}

function LoginPassword() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as LocationState;

  const [mobile, setMobile] = useState(state?.mobile ?? "");
  const [password, setPassword] = useState("");

  const handleLogin = (): void => {
    if (mobile.trim().length < 10) {
      alert("Please enter a valid mobile number");
      return;
    }
    if (!password) {
      alert("Please enter your password");
      return;
    }
    navigate("/patient/dashboard");
  };

  return (
    <AuthLayout>
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Welcome Back 👋</h1>
        <p className="text-sm text-gray-500 mt-1">
          Login with your registered mobile number
        </p>
      </div>

      <InputField
        label="Mobile Number"
        placeholder="Enter Mobile Number"
        type="tel"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />

      <div className="flex flex-col gap-1">
        <InputField
          label="Password"
          placeholder="Enter Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="text-right">
          <button className="text-blue-600 text-sm font-medium hover:underline cursor-pointer">
            Forgot Password?
          </button>
        </div>
      </div>

      <Button label="Login" variant="primary" fullWidth onClick={handleLogin} />

      <p className="text-center text-sm text-gray-500">
        <button
          onClick={() => navigate("/auth/login")}
          className="text-blue-600 font-medium hover:underline cursor-pointer"
        >
          Login with OTP
        </button>
      </p>

      <p className="text-center text-sm text-gray-500">
        New here?{" "}
        <button
          onClick={() => navigate("/auth/signup")}
          className="text-blue-600 font-medium hover:underline cursor-pointer"
        >
          Sign Up
        </button>
      </p>
    </AuthLayout>
  );
}

export default LoginPassword;
