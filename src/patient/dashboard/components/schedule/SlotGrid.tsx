import { Fragment } from "react";

const times = ["10:00", "10:30", "11:00", "11:30", "12:00"];

const slotClasses = [
  "bg-white border border-slate-200",
  "bg-white border border-slate-200",
  "bg-slate-200",
  "bg-emerald-200",
  "bg-emerald-200",
];

function SlotGrid() {
  return (
    <div className="mt-3 border-y border-slate-200 py-4">
      <div className="grid grid-cols-[42px_repeat(4,minmax(56px,1fr))] gap-1.5 sm:gap-2">
        {times.map((time, rowIndex) => (
          <Fragment key={time}>
            <div
              className={`flex h-7 items-center text-xs font-semibold ${
                rowIndex < 2 ? "text-slate-400" : "text-slate-800"
              }`}
            >
              {time}
            </div>

            {Array.from({ length: 4 }).map((_, columnIndex) => (
              <div
                key={`${time}-${columnIndex}`}
                className={`h-7 rounded-md ${slotClasses[rowIndex]}`}
              />
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export default SlotGrid;
