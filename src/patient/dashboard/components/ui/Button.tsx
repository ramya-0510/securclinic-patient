import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "tab";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  fullWidth?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  active?: boolean;
}

function Button({
  children,
  variant = "primary",
  fullWidth = false,
  leftIcon,
  rightIcon,
  active = false,
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold transition disabled:cursor-not-allowed disabled:opacity-60";

  const variants: Record<ButtonVariant, string> = {
    primary: "rounded-md bg-blue-600 text-white hover:bg-blue-700",
    secondary: "rounded-md bg-slate-50 text-slate-800 hover:bg-slate-100",
    outline:
      "rounded-md border border-slate-200 bg-slate-50 text-slate-500 hover:bg-slate-100",
    ghost: "rounded-md text-slate-700 hover:text-blue-600",
    tab: active
      ? "h-6 rounded-md border border-blue-600 bg-blue-600 px-3 text-xs text-white"
      : "h-6 rounded-md border border-slate-200 bg-white px-3 text-xs text-slate-500 hover:bg-slate-50",
  };

  return (
    <button
      type={type}
      className={`${base} ${variants[variant]} ${fullWidth ? "w-full" : ""} ${className}`}
      {...props}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  );
}

export default Button;
