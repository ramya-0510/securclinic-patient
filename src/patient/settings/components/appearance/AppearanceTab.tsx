import { useState } from "react";
import { BrandingSection } from "./BrandingSection";
import type { BrandingSettings } from "../../types/settings.types";

const DEFAULT_BRANDING: BrandingSettings = {
  clinicName:       "",
  logoFile:         null,
  logoPreviewUrl:   null,
  bannerFile:       null,
  bannerPreviewUrl: null,
  selectedTheme:    "blue",
};

export function AppearanceTab() {
  const [branding, setBranding] = useState<BrandingSettings>(DEFAULT_BRANDING);

  const updateBranding = (partial: Partial<BrandingSettings>) =>
    setBranding(prev => ({ ...prev, ...partial }));

  return (
    <div className="flex flex-col gap-8 p-6">
      <BrandingSection branding={branding} onChange={updateBranding} />
      {/* Add more appearance sections here (e.g. Typography, Colors) */}
    </div>
  );
}