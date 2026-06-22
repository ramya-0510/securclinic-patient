export type SettingsTab = "Appearance" | "Global Settings" | "User Management";

export type ThemeColor =
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "purple"
  | "pink"
  | "gradient";

export interface ThemeOption {
  id: ThemeColor;
  label: string;
  /** Tailwind bg class or inline style value */
  style: string;
  isGradient?: boolean;
}

export interface BrandingSettings {
  clinicName: string;
  logoFile: File | null;
  logoPreviewUrl: string | null;
  bannerFile: File | null;
  bannerPreviewUrl: string | null;
  selectedTheme: ThemeColor;
}

export interface GlobalSettings {
  timezone: string;
  dateFormat: string;
  language: string;
}

export interface UserManagementSettings {
  // extend as needed
}

export interface AppSettings {
  branding: BrandingSettings;
  global: GlobalSettings;
}

// ─── Global Settings Tab ─────────────────────────────────────────────────────

export interface DomainContactSettings {
  primaryDomain: string;
  clinicDescription: string;
  supportPhone: string;
  supportEmail: string;
}

export interface TreatmentItem {
  id: string;
  name: string;
  price: number;
}

// ─── User Management Tab ─────────────────────────────────────────────────────

export interface StaffFormData {
  fullName: string;
  specialization: string;
  designation: string;
  experience: string;
  email: string;
  phone: string;
  address: string;
  profilePicture: File | null;
}

export interface StaffMember {
  id: string;
  fullName: string;
  specialization: string;
  designation: string;
  experience: string;
  email: string;
  phone: string;
  address: string;
  profilePicture?: string; // object URL or remote URL
}