import type { ThemeColor, ThemeOption } from "../../types/settings.types";

const THEMES: ThemeOption[] = [
  { id: "red",      label: "Red",      style: "#ef4444" },
  { id: "orange",   label: "Orange",   style: "#f97316" },
  { id: "yellow",   label: "Yellow",   style: "#eab308" },
  { id: "green",    label: "Green",    style: "#22c55e" },
  { id: "blue",     label: "Blue",     style: "#2563eb" },
  { id: "purple",   label: "Purple",   style: "#a855f7" },
  { id: "pink",     label: "Pink",     style: "#ec4899" },
  { id: "gradient", label: "Gradient", style: "linear-gradient(135deg,#f97316,#eab308,#22c55e)", isGradient: true },
];

interface Props {
  selected: ThemeColor;
  onChange: (color: ThemeColor) => void;
}

export function ThemeSelector({ selected, onChange }: Props) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-[13px] font-medium text-slate-700">Select Theme</span>
      <div className="flex items-center gap-2 flex-wrap">
        {THEMES.map(({ id, label, style, isGradient: _isGradient }) => (
          <button
            key={id}
            aria-label={label}
            onClick={() => onChange(id)}
            className={`w-14 h-10 rounded-lg transition-all
              ${selected === id ? "ring-2 ring-offset-2 ring-blue-500 scale-105" : "hover:scale-105"}
            `}
            style={{ background: style }}
          />
        ))}
      </div>
      <span className="text-[12px] text-slate-400">Select your brand color</span>
    </div>
  );
}