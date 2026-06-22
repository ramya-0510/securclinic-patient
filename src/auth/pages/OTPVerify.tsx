import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AuthLayout from "../components/authLayout/AuthLayout";
import OTPInput from "../components/ui/OTPInput";
import Button from "../components/ui/Button";

interface LocationState {
  mobile: string;
  from: string;
}

function OTPVerify() {
  const [otp, setOtp] = useState("");
  const [countdown, setCountdown] = useState(30);
  const [canResend, setCanResend] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const state = location.state as LocationState;
  const mobile = state?.mobile ?? "Unknown Number";
  const from = state?.from ?? "/";

  useEffect(() => {
    if (countdown === 0) {
      setCanResend(true);
      return;
    }

    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown]);

  const handleResend = (): void => {
    if (!canResend) return;
    setOtp("");
    setCountdown(30);
    setCanResend(false);
    console.log("OTP resent to", mobile);
  };

  const handleVerify = (): void => {
    if (otp.length < 6) {
      alert("Please enter all 6 digits");
      return;
    }
    console.log("Verifying OTP:", otp);

    // Root-relative now — the subdomain (patient./doctor./admin.) already
    // determines which AppRouter section is active, so "/dashboard" resolves
    // correctly no matter who's logging in. No role-specific prefix needed.
    navigate("/dashboard");
  };

  return (
    <AuthLayout>
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Welcome Back 👋</h1>
        <p className="text-sm text-gray-500 mt-1">
          Enter the OTP sent to{" "}
          <span className="font-medium text-gray-700">{mobile}</span>.{" "}
          <button
            onClick={() => navigate(from)}
            className="text-blue-600 font-medium hover:underline cursor-pointer"
          >
            Edit
          </button>
        </p>
      </div>

      <div>
        <label className="text-sm font-medium text-gray-700 block mb-3">
          Enter OTP
        </label>
        <OTPInput length={6} value={otp} onChange={setOtp} />
      </div>

      <Button
        label="Verify"
        variant="primary"
        fullWidth
        onClick={handleVerify}
      />

      <p className="text-center text-sm text-gray-500">
        {canResend ? (
          <button
            onClick={handleResend}
            className="text-blue-600 font-medium hover:underline cursor-pointer"
          >
            Resend OTP
          </button>
        ) : (
          <>
            Resend OTP in{" "}
            <span className="text-blue-600 font-medium">{countdown}s</span>
          </>
        )}
      </p>
    </AuthLayout>
  );
}

export default OTPVerify;