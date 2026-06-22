export type DoctorStatus = "available" | "busy" | "offline";
export type ConsultationStatus = "completed" | "pending" | "cancelled" | "booked";

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  status: DoctorStatus;
  avatar?: string;
}

export interface Consultation {
  id: string;
  patientId: string;
  patientName: string;
  time: string;
  mobile: string;
  doctor: string;
  treatment: string;
  status: ConsultationStatus;
}