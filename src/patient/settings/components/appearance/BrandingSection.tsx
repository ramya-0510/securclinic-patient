import { Building2 } from "lucide-react";
import { ImageUploader } from "./ImageUploader";
import { ThemeSelector } from "./ThemeSelector";
import type { BrandingSettings, ThemeColor } from "../../types/settings.types";

interface Props {
  branding: BrandingSettings;
  onChange: (updated: Partial<BrandingSettings>) => void;
}

export function BrandingSection({ branding, onChange }: Props) {
  return (
    <div className="flex flex-col gap-6">

      {/* Section heading */}
      <div className="flex items-center gap-2.5">
        <Building2 size={20} className="text-blue-500" />
        <h2 className="text-[18px] font-bold text-blue-500">Branding</h2>
      </div>

      {/* Clinic name */}
      <div className="flex flex-col gap-1.5">
        <label className="text-[13px] font-medium text-slate-700">
          Clinic Name
        </label>
        <div className="relative">
          <Building2
            size={15}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
          />
          <input
            type="text"
            value={branding.clinicName}
            onChange={e => onChange({ clinicName: e.target.value })}
            placeholder="Enter your clinic name"
            className="w-full max-w-lg pl-9 pr-4 py-2.5 rounded-lg border border-slate-200
              text-[13px] text-slate-700 placeholder:text-slate-400
              focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-400
              transition bg-white"
          />
        </div>
        <span className="text-[11px] text-slate-400">Appears in Header</span>
      </div>

      {/* Logo + Banner side by side */}
      <div className="flex gap-6">
        <ImageUploader
          label="Logo"
          file={branding.logoFile}
          previewUrl={branding.logoPreviewUrl}
          onFileChange={(file, previewUrl) => onChange({ logoFile: file, logoPreviewUrl: previewUrl })}
        />
        <ImageUploader
          label="Banner"
          file={branding.bannerFile}
          previewUrl={branding.bannerPreviewUrl}
          onFileChange={(file, previewUrl) => onChange({ bannerFile: file, bannerPreviewUrl: previewUrl })}
        />
      </div>

      {/* Theme swatches */}
      <ThemeSelector
        selected={branding.selectedTheme}
        onChange={(color: ThemeColor) => onChange({ selectedTheme: color })}
      />
    </div>
  );
}