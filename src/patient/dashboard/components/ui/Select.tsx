import { ChevronDown } from "lucide-react";
import type { ReactNode, SelectHTMLAttributes } from "react";

interface SelectOption {
  label: string;
  value: string;
  disabled?: boolean;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectOption[];
  leftIcon?: ReactNode;
}

function Select({ options, leftIcon, className = "", ...props }: SelectProps) {
  return (
    <div className="relative">
      {leftIcon && (
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
          {leftIcon}
        </span>
      )}
      <select
        className={`w-full appearance-none rounded-md border border-slate-200 bg-slate-50 pr-10 text-xs font-medium text-slate-500 outline-none focus:border-blue-400 focus:bg-white ${
          leftIcon ? "pl-10" : "pl-3"
        } ${className}`}
        {...props}
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            disabled={option.disabled}
          >
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDown
        size={15}
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
      />
    </div>
  );
}

export default Select;