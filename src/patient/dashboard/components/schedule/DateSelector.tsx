import Button from "../ui/Button";

const dates = [
  { day: "Sunday", date: "07" },
  { day: "Monday", date: "08" },
  { day: "Tuesday", date: "09", active: true },
  { day: "Wednesday", date: "10" },
  { day: "Thursday", date: "11" },
  { day: "Friday", date: "12" },
];

function DateSelector() {
  return (
    <div className="grid grid-cols-3 overflow-hidden rounded-lg bg-blue-50 sm:grid-cols-6">
      {dates.map((item) => (
        <Button
          key={item.day}
          variant="ghost"
          fullWidth
          className={`h-17 min-w-0 px-2 text-center font-normal transition ${
            item.active
              ? "rounded-lg bg-blue-600 text-white shadow-sm"
              : "rounded-none text-blue-600 hover:bg-blue-100"
          }`}
        >
          <span className="flex w-full flex-col items-center justify-center">
            <span
              className={`block w-full whitespace-nowrap text-[10px] font-medium leading-3 ${
                item.active ? "text-white" : "text-blue-600"
              }`}
            >
              {item.day}
            </span>
            <span
              className={`mt-1 block w-full text-lg font-bold leading-5 ${
                item.active ? "text-white" : "text-slate-800"
              }`}
            >
              {item.date}
            </span>
            <span
              className={`mt-0.5 block w-full text-[10px] font-normal leading-3 ${
                item.active ? "text-white/90" : "text-slate-500"
              }`}
            >
              Dec
            </span>
          </span>
        </Button>
      ))}
    </div>
  );
}

export default DateSelector;
