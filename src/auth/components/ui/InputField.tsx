import { useState } from "react";

interface InputFieldProps {
  label?: string;
  placeholder?: string;
  type?: "text" | "password" | "tel" | "email";
  icon?: React.ReactNode;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function InputField({
  label,
  placeholder,
  type = "text",
  icon,
  value,
  onChange,
}: InputFieldProps) {
  const [show, setShow] = useState<boolean>(false);
  const inputType = type === "password" ? (show ? "text" : "password") : type;

  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm text-gray-700 font-medium">{label}</label>}
      <div className="flex items-center border border-gray-200 rounded-lg px-3 py-2 gap-2 focus-within:border-blue-400">
        {icon && <span className="text-gray-400">{icon}</span>}
        <input
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="flex-1 outline-none text-sm bg-transparent"
        />
        {type === "password" && (
          <button type="button" onClick={() => setShow(!show)} className="text-xs text-gray-400">
            {show ? "Hide" : "Show"}
          </button>
        )}
      </div>
    </div>
  );
}

export default InputField;