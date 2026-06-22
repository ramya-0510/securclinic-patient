import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../components/authLayout/AuthLayout";
import InputField from "../components/ui/InputField";
import Button from "../components/ui/Button";
import RoleSelector from "../components/authLayout/RoleSelector";
import type { UserRole } from "../types";
import cameraIcon from "../../assets/camera.png";

function Signup() {
  const [role, setRole] = useState<UserRole>("Doctor");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  return (
    <AuthLayout showLogo={false}>
      <div className="text-center">
        <h1 className="text-2xl  font-bold text-gray-800">
          Welcome to Securclinic 👋
        </h1>
        <p className="text-sm  text-gray-500 mt-1">
          Create account using your mobile number.
        </p>
      </div>

      <RoleSelector selected={role} onChange={setRole} />

      <InputField
        label="Full Name"
        placeholder="Enter Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <div className="grid grid-cols-2 gap-3">
        <InputField
          label="Mobile Number"
          placeholder="Enter Mobile Number"
          type="tel"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <InputField
          label="Email Address"
          placeholder="Enter Email Address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <label className="text-sm font-medium text-gray-700 block mb-1">
          Face login (optional)
        </label>
        <div className="border border-gray-200 rounded-lg p-4 flex items-center justify-center gap-2 cursor-pointer hover:border-blue-300 transition-all">
          <img
            src={cameraIcon}
            alt="Enroll Face"
            className="w-8 h-8 opacity-80"
            style={{
              filter:
                "invert(32%) sepia(98%) saturate(1000%) hue-rotate(200deg) brightness(95%)",
            }}
          />
          <span className="text-blue-600 text-sm font-medium">Enroll Face</span>
        </div>
        <p className="text-xs text-gray-400 mt-1">
          * Quick login using face recognition. Secure & private.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <InputField
          label="Password"
          placeholder="Enter Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <InputField
          label="Re-enter Password"
          placeholder="Re-enter Password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>

      <Button label="Send OTP" variant="primary" fullWidth />

      <p className="text-center text-sm text-gray-500">
        Already have an account?{" "}
        <button
          onClick={() => navigate("/")}
          className="text-blue-600 font-medium hover:underline cursor-pointer"
        >
          Log in
        </button>
      </p>
    </AuthLayout>
  );
}

export default Signup;
