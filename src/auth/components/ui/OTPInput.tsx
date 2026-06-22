import { useRef } from "react";

interface OTPInputProps {
  length?: number;
  value: string;
  onChange: (value: string) => void;
}

function OTPInput({ length = 6, value, onChange }: OTPInputProps) {
  const refs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number): void => {
    const val = e.target.value.replace(/\D/, "");
    if (!val) return;

    const digits = value.padEnd(length, " ").split("");
    digits[index] = val;
    onChange(digits.join("").trimEnd());

    // Auto-focus next box
    if (index < length - 1) {
      refs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number): void => {
    if (e.key === "Backspace") {
      const digits = value.padEnd(length, " ").split("");
      digits[index] = " ";
      onChange(digits.join("").trimEnd());

      // Move focus back
      if (index > 0) {
        refs.current[index - 1]?.focus();
      }
    }

    // Allow moving with arrow keys
    if (e.key === "ArrowRight" && index < length - 1) {
      refs.current[index + 1]?.focus();
    }
    if (e.key === "ArrowLeft" && index > 0) {
      refs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>): void => {
    e.preventDefault();
    const pasted = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, length);

    onChange(pasted);

    // Focus the next empty box after paste
    const nextIndex = Math.min(pasted.length, length - 1);
    refs.current[nextIndex]?.focus();
  };

  return (
    <div className="flex gap-3">
      {Array.from({ length }).map((_, i) => (
        <input
          key={i}
          ref={(el) => { refs.current[i] = el; }}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={value[i] ?? ""}
          onChange={(e) => handleChange(e, i)}
          onKeyDown={(e) => handleKeyDown(e, i)}
          onPaste={handlePaste}
          className="w-12 h-12 text-center border border-gray-200 rounded-lg text-lg
                     font-semibold text-gray-800 bg-white outline-none transition-all
                     focus:border-blue-500 focus:ring-2 focus:ring-blue-100
                     caret-transparent"
        />
      ))}
    </div>
  );
}

export default OTPInput;