import AppointmentRow from "./AppointmentRow";
import type { Appointment } from "../types/appointment.types";

const mockAppointments: Appointment[] = [
  { id: "1", patientName: "John Mathew", pid: "D0987654321", time: "11.30 AM", slot: "Slot - 2 / 4", doctor: "Dr. Prakash", treatment: "General Checkup", mode: "Clinic",  status: "pending" },
  { id: "2", patientName: "John Mathew", pid: "D0987654321", time: "11.30 AM", slot: "Slot - 2 / 4", doctor: "Dr. Prakash", treatment: "General Checkup", mode: "Online",  status: "pending" },
  { id: "3", patientName: "John Mathew", pid: "D0987654321", time: "11.30 AM", slot: "Slot - 2 / 4", doctor: "Dr. Prakash", treatment: "General Checkup", mode: "Online",  status: "pending" },
  { id: "4", patientName: "John Mathew", pid: "D0987654321", time: "11.30 AM", slot: "Slot - 2 / 4", doctor: "Dr. Prakash", treatment: "General Checkup", mode: "Online",  status: "pending" },
];

function TodayAppointment() {
  return (
    <div className="divide-y divide-slate-100">
      {mockAppointments.map((appt) => (
        <AppointmentRow key={appt.id} appointment={appt} />
      ))}
    </div>
  );
}

export default TodayAppointment;