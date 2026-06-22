export type AppointmentMode = "Online" | "Clinic";
export type AppointmentStatus = "pending" | "completed" | "cancelled" | "booked";

export interface Appointment {
  id: string;
  patientName: string;
  pid: string;
  time: string;
  slot: string;
  doctor: string;
  treatment: string;
  mode: AppointmentMode;
  status: AppointmentStatus;
  mobile?: string;
}

export type AppointmentMap = Record<string, Appointment[]>;
 
export type DotColor = "green" | "red" | "orange" | "blue";
export type DotColorMap = Record<string, DotColor>;
 
export interface CalendarCell {
  day: number;
  currentMonth: boolean;
  isPrev?: boolean;
  isNext?: boolean;
}