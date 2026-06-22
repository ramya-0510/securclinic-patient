const legends = [
  { label: "Available", color: "bg-emerald-200" },
  { label: "Booked", color: "bg-teal-400" },
  { label: "Cancelled", color: "bg-rose-100" },
  { label: "Slot Full", color: "bg-slate-200" },
  { label: "Past", color: "border border-slate-300 bg-white" },
];

function SlotLegend() {
  return (
    <div>
      <p className="mb-0.5 text-[10px] font-semibold text-blue-500">Legend</p>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        {legends.map((legend) => (
          <div key={legend.label} className="flex items-center gap-1.5">
            <span className={`h-2 w-2 rounded-full ${legend.color}`} />
            <span className="text-xs font-medium text-slate-700">
              {legend.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SlotLegend;
