import type { InputHTMLAttributes, ReactNode } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: ReactNode;
}

function Input({ leftIcon, className = "", ...props }: InputProps) {
  return (
    <div className="relative">
      {leftIcon && (
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
          {leftIcon}
        </span>
      )}
      <input
        className={`h-10 w-full rounded-md border border-slate-200 bg-slate-50 pr-4 text-xs font-medium text-slate-600 outline-none placeholder:text-slate-500 focus:border-blue-400 focus:bg-white ${
          leftIcon ? "pl-10" : "pl-4"
        } ${className}`}
        {...props}
      />
    </div>
  );
}

export default Input;
