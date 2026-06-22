import { useState } from "react";
import { CalendarAppointmentCard } from "./CalendarAppointmentCard";
import type { Appointment } from "../../types/appointment.types";

interface CalendarGridProps {
  month: number;
  year: number;
}

const mockAppointments: Record<string, Appointment[]> = {
  "2025-12-09": [
    {
      id: "1",
      patientName: "John Mathew",
      pid: "D0987654321",
      time: "11.30 AM",
      slot: "2 / 4",
      doctor: "Dr. Prakash",
      treatment: "General Checkup",
      mode: "Online",
      status: "pending",
    },
    {
      id: "2",
      patientName: "John Mathew",
      pid: "D0987654321",
      time: "11.30 AM",
      slot: "2 / 4",
      doctor: "Dr. Prakash",
      treatment: "General Checkup",
      mode: "Clinic",
      status: "pending",
    },
    {
      id: "3",
      patientName: "John Mathew",
      pid: "D0987654321",
      time: "11.30 AM",
      slot: "2 / 4",
      doctor: "Dr. Prakash",
      treatment: "General Checkup",
      mode: "Clinic",
      status: "pending",
    },
    {
      id: "4",
      patientName: "John Mathew",
      pid: "D0987654321",
      time: "11.30 AM",
      slot: "2 / 4",
      doctor: "Dr. Prakash",
      treatment: "General Checkup",
      mode: "Clinic",
      status: "pending",
    },
    {
      id: "5",
      patientName: "John Mathew",
      pid: "D0987654321",
      time: "11.30 AM",
      slot: "2 / 4",
      doctor: "Dr. Prakash",
      treatment: "General Checkup",
      mode: "Clinic",
      status: "pending",
    },
  ],
  "2025-12-18": [
    {
      id: "6",
      patientName: "John Mathew",
      pid: "D0987654321",
      time: "11.30 AM",
      slot: "2 / 4",
      doctor: "Dr. Prakash",
      treatment: "General Checkup",
      mode: "Online",
      status: "cancelled",
    },
  ],
  "2025-12-24": [
    {
      id: "7",
      patientName: "John Mathew",
      pid: "D0987654321",
      time: "11.30 AM",
      slot: "2 / 4",
      doctor: "Dr. Prakash",
      treatment: "General Checkup",
      mode: "Online",
      status: "cancelled",
    },
  ],
};

const DOT_COLORS: Record<string, string> = {
  pending: "bg-green-500",
  completed: "bg-blue-500",
  cancelled: "bg-red-500",
};

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function getDaysInMonth(month: number, year: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(month: number, year: number) {
  return new Date(year, month, 1).getDay();
}

function CalendarGrid({ month, year }: CalendarGridProps) {
  const [selectedDateKey, setSelectedDateKey] = useState<string | null>(null);

  const daysInMonth = getDaysInMonth(month, year);
  const firstDay = getFirstDayOfMonth(month, year);
  const prevMonthDays = getDaysInMonth(month - 1, year);
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const cells: { date: number; currentMonth: boolean; dateKey?: string }[] = [];

  for (let i = firstDay - 1; i >= 0; i--)
    cells.push({ date: prevMonthDays - i, currentMonth: false });

  for (let i = 1; i <= daysInMonth; i++) {
    const dateKey = `${year}-${String(month + 1).padStart(2, "0")}-${String(i).padStart(2, "0")}`;
    cells.push({ date: i, currentMonth: true, dateKey });
  }

  const remaining = 35 - cells.length;
  for (let i = 1; i <= remaining; i++)
    cells.push({ date: i, currentMonth: false });

  const today = new Date();
  const isToday = (date: number, currentMonth: boolean) =>
    currentMonth &&
    date === today.getDate() &&
    month === today.getMonth() &&
    year === today.getFullYear();

  return (
    <div className="flex-1 overflow-auto">
      {/* Day-of-week headers */}
      <div className="grid grid-cols-7 border-t border-b border-l border-slate-200">
        {days.map((d) => (
          <div
            key={d}
            className="py-2.5 text-center text-xs font-semibold text-blue-500 tracking-wide border-r border-slate-200"
          >
            {d}
          </div>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-7 grid-rows-5 border-l  border-t border-slate-200">
        {cells.map((cell, idx) => {
          const appts = cell.dateKey
            ? (mockAppointments[cell.dateKey] ?? [])
            : [];
          const firstAppt = appts[0];
          const extra = appts.length - 1;
          const dotColor =
            appts.length > 0 ? DOT_COLORS[appts[0].status] : null;
          const todayCell = isToday(cell.date, cell.currentMonth);
          const isSelected =
            cell.dateKey != null && cell.dateKey === selectedDateKey;

          return (
            <div
              key={idx}
              onClick={() =>
                cell.currentMonth &&
                cell.dateKey &&
                setSelectedDateKey(cell.dateKey)
              }
              className={[
                "relative  border-b border-r border-slate-200",
                "min-h-25",
                "p-2",
                cell.currentMonth ? "bg-white" : "bg-slate-50",
                isSelected ? "ring-2 ring-inset ring-blue-500" : "",
                cell.currentMonth ? "cursor-pointer" : "cursor-default",
              ].join(" ")}
            >
              {/* Top row: date number + dot */}
              <div className="flex items-center justify-between mb-1.5">
                {todayCell ? (
                  <span className="inline-flex h-6 min-w-13 items-center justify-center rounded-md bg-blue-600 px-1.5 text-[11px] font-bold text-white">
                    {MONTHS[month]} {String(cell.date).padStart(2, "0")}
                  </span>
                ) : (
                  <span
                    className={`text-[13px] font-normal leading-none ${
                      cell.currentMonth ? "text-slate-500" : "text-slate-300"
                    }`}
                  >
                    {String(cell.date).padStart(2, "0")}
                  </span>
                )}

                {dotColor && (
                  <span
                    className={`h-2 w-2 shrink-0 rounded-full ${dotColor}`}
                  />
                )}
              </div>

              {/* Appointment card */}
              {firstAppt && <CalendarAppointmentCard appointment={firstAppt} />}

              {/* Overflow */}
              {extra > 0 && (
                <p className="mt-0.5 text-[9px] text-slate-400">
                  & {extra} more
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CalendarGrid;