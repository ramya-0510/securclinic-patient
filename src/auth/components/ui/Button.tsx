import type { ButtonVariant } from "../../types";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  fullWidth?: boolean;
  disabled?: boolean;
}

function Button({
  label,
  onClick,
  variant = "primary",
  fullWidth = false,
  disabled = false,
}: ButtonProps) {
  const base = "px-4 py-3 rounded-lg font-semibold text-sm transition-all";

  const variants: Record<ButtonVariant, string> = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-50",
    ghost: "text-blue-600 hover:underline bg-transparent",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${fullWidth ? "w-full" : ""}`}
    >
      {label}
    </button>
  );
}

export default Button;
