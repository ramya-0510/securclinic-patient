import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../components/authLayout/AuthLayout";
import InputField from "../components/ui/InputField";
import Button from "../components/ui/Button";
import faceIcon from "../../assets/face-recognition.png";

function LoginProduct() {
  const [mobile, setMobile] = useState("");
  const navigate = useNavigate();

  const handleSendOTP = (): void => {
    if (mobile.trim().length < 10) {
      alert("Please enter a valid mobile number");
      return;
    }
    navigate("/auth/otp", { state: { mobile, from: "/auth/login" } });
  };

  return (
    <AuthLayout>
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Welcome Back 👋</h1>
        <p className="text-sm text-gray-500 mt-1">
          Login using Face Recognition or your registered mobile number.
        </p>
      </div>

      <div className="border border-gray-200 rounded-xl p-6 flex flex-col items-center gap-2 cursor-pointer hover:border-blue-300 transition-all">
        <img
          src={faceIcon}
          alt="Face Recognition"
          className="w-12 h-12 opacity-60"
        />
        <span className="text-sm text-gray-600 font-medium">
          Use Face Recognition to Login
        </span>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex-1 h-px bg-gray-200" />
        <span className="text-xs text-gray-400">or</span>
        <div className="flex-1 h-px bg-gray-200" />
      </div>

      <InputField
        label="Mobile Number"
        placeholder="Enter Mobile Number"
        type="tel"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />

      <Button
        label="Send OTP"
        variant="primary"
        fullWidth
        onClick={handleSendOTP}
      />

      <p className="text-center text-sm text-gray-500">
        <button
          onClick={() => navigate("/auth/password", { state: { mobile } })}
          className="text-blue-600 font-medium hover:underline cursor-pointer"
        >
          Login with Password
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

export default LoginProduct;
