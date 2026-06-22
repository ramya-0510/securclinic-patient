export interface Patient {
  id: string;
  name: string;
  phone: string;
  uhid?: string;
  age?: number;
  gender?: string;
  email?: string;
  lastVisit?: string;
}

export interface Prescription {
  id: string;
  //patientId: string;
  date: string;
  //medicines: Medicine[];
  notes?: string;
  doctor: string;
  treatment: string;
}
export type MedicineType = "Tablet" | "Syrup" | "Injection" | "Ointment" | "Drops";
export type TimesPerDay = "Morning" | "Afternoon" | "Evening" | "Night";
export type RelationToFood = "Before Food" | "After Food" | "With Food";
export type DurationUnit = "Day(s)" | "Week(s)" | "Month(s)";

export interface MedicineEntry {
  id: string;
  name: string;
  quantity: number;
  duration: number;
  durationUnit: DurationUnit;
  type: MedicineType;
  timesPerDay: TimesPerDay[];
  relationToFood: RelationToFood;
  notes: string;
}


export interface Medicine {
  name: string;
  dosage: string;
  frequency: string;
  duration: string;
}