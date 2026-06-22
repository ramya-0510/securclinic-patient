import { useRef } from "react";
import { Upload } from "lucide-react";

interface Props {
  label: "Logo" | "Banner";
  file: File | null;
  previewUrl: string | null;
  onFileChange: (file: File, previewUrl: string) => void;
}

export function ImageUploader({ label, file: _file, previewUrl, onFileChange }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (!selected) return;
    const url = URL.createObjectURL(selected);
    onFileChange(selected, url);
  };

  return (
    <div className="flex flex-col gap-2 flex-1 min-w-0">
      {/* Label */}
      <span className="text-[13px] font-medium text-slate-700">{label}</span>

      {/* Upload box */}
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="flex flex-col items-center justify-center gap-1.5 w-full h-[72px]
          rounded-xl border border-slate-200 bg-white
          hover:bg-slate-50 hover:border-blue-300 transition-colors cursor-pointer"
      >
        <div className="flex items-center gap-2">
          <Upload size={16} className="text-blue-500" strokeWidth={2.5} />
          <span className="text-[14px] font-bold text-blue-500">
            Upload {label}
          </span>
        </div>
        <span className="text-[11px] text-slate-400">
          Allowed: JPG, PNG, Max 5MB.
        </span>
      </button>

      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png"
        className="hidden"
        onChange={handleChange}
      />

      {/* Preview */}
      <span className="text-[13px] font-medium text-slate-700 mt-1">Preview</span>
      <div className="flex items-center justify-center w-full h-[72px] rounded-xl border border-slate-200 bg-white overflow-hidden">
        {previewUrl ? (
          <img
            src={previewUrl}
            alt={`${label} preview`}
            className="max-h-full max-w-full object-contain p-2"
          />
        ) : label === "Logo" ? (
          <img
            src="src/assets/logo.png"
            alt="SecurClinic logo"
            className="h-12 w-12 object-contain"
          />
        ) : (
          /* Default SECURCLINIC text for banner */
          <span className="font-brand text-[18px] tracking-normal text-[#198CFF] uppercase">
            SECURCLINIC
          </span>
          
        )}
      </div>
    </div>
  );
}