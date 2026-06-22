import { useState } from "react";
import {
  ChevronLeft, RotateCcw, ClipboardList, Stethoscope,
  Pill, Minus, Plus, Calendar, Pencil, Hash,
  Clock, Utensils, Trash2,
  FlaskConical, Syringe, Package, Droplets,
} from "lucide-react";
import type {
  MedicineEntry, MedicineType, TimesPerDay,
  RelationToFood, DurationUnit,
} from "../types/prescription.types";

interface Props {
  onBack: () => void;
  onConfirm: () => void;
}

const TREATMENTS = ["Head Pain", "General Checkup", "Fever", "Cold & Cough", "Diabetes", "Hypertension", "Back Pain", "Skin Infection"];
const DOCTORS = ["Dr. Prakash", "Dr. Anitha", "Dr. Ramesh", "Dr. Kavitha", "Dr. Suresh"];
const MEDICINES = ["Paracetamol 650mg", "Amoxicillin 500mg", "Ibuprofen 400mg", "Cetirizine 10mg", "Metformin 500mg", "Omeprazole 20mg", "Azithromycin 250mg", "Pantoprazole 40mg"];
const MEDICINE_TYPES: MedicineType[] = ["Tablet", "Syrup", "Injection", "Ointment", "Drops"];
const TIMES: TimesPerDay[] = ["Morning", "Afternoon", "Evening", "Night"];
const RELATIONS: RelationToFood[] = ["Before Food", "After Food", "With Food"];
const DURATION_UNITS: DurationUnit[] = ["Day(s)", "Week(s)", "Month(s)"];

const emptyMedicine = (): Omit<MedicineEntry, "id"> => ({
  name: "",
  quantity: 1,
  duration: 1,
  durationUnit: "Month(s)",
  type: "Tablet",
  timesPerDay: ["Morning"],
  relationToFood: "Before Food",
  notes: "",
});

export default function AddPrescriptionForm({ onBack, onConfirm }: Props) {
  const [treatment, setTreatment] = useState("");
  const [doctor, setDoctor] = useState("");
  const [current, setCurrent] = useState(emptyMedicine());
  const [addedMedicines, setAddedMedicines] = useState<MedicineEntry[]>([]);

  const toggleTime = (t: TimesPerDay) => {
    setCurrent((prev) => ({
      ...prev,
      timesPerDay: prev.timesPerDay.includes(t)
        ? prev.timesPerDay.filter((x) => x !== t)
        : [...prev.timesPerDay, t],
    }));
  };

  const handleAddAnother = () => {
    if (!current.name) return;
    setAddedMedicines((prev) => [...prev, { ...current, id: crypto.randomUUID() }]);
    setCurrent(emptyMedicine());
  };

  const handleDelete = (id: string) => {
    setAddedMedicines((prev) => prev.filter((m) => m.id !== id));
  };

  const handleReset = () => {
    setCurrent(emptyMedicine());
    setAddedMedicines([]);
    setTreatment("");
    setDoctor("");
  };

  return (
    <div className="rounded-xl bg-white shadow-sm flex flex-col">

      {/* Header */}
      <div className="flex items-center justify-between px-6 py-3.5 border-b border-slate-100 shrink-0">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-slate-700 font-semibold text-base hover:text-blue-600 transition"
        >
          <ChevronLeft size={18} />
          Add Prescription
        </button>
        <button
          onClick={handleReset}
          className="flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-700 font-medium transition"
        >
          <RotateCcw size={13} />
          Reset
        </button>
      </div>

      {/* Scrollable content */}
      <div className="px-6 py-4 space-y-5">

        {/* Treatment & Doctor */}
        <div>
          <h3 className="text-sm font-semibold text-slate-700 mb-3">Treatment & Doctor</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-slate-500 mb-1 block">Treatment</label>
              <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden">
                <div className="flex items-center gap-1.5 px-3 py-2.5 w-full">
                  <ClipboardList size={13} className="text-slate-400 shrink-0" />
                  <select
                    value={treatment}
                    onChange={(e) => setTreatment(e.target.value)}
                    className="text-sm text-slate-700 outline-none bg-transparent w-full"
                  >
                    <option value="">Select Treatment</option>
                    {TREATMENTS.map((t) => <option key={t}>{t}</option>)}
                  </select>
                </div>
              </div>
            </div>
            <div>
              <label className="text-xs text-slate-500 mb-1 block">Doctor</label>
              <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden">
                <div className="flex items-center gap-1.5 px-3 py-2.5 w-full">
                  <Stethoscope size={13} className="text-slate-400 shrink-0" />
                  <select
                    value={doctor}
                    onChange={(e) => setDoctor(e.target.value)}
                    className="text-sm text-slate-700 outline-none bg-transparent w-full"
                  >
                    <option value="">Select Doctor</option>
                    {DOCTORS.map((d) => <option key={d}>{d}</option>)}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Medicines */}
        <div>
          <h3 className="text-sm font-semibold text-slate-700 mb-3">Medicines</h3>

          {/* Row 1 */}
          <div className="grid grid-cols-[2fr_auto_auto_1.5fr] gap-3 items-end mb-3">
            <div>
              <label className="text-xs text-slate-500 mb-1 block">Medicine Name</label>
              <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden">
                <div className="flex items-center gap-1.5 px-3 py-2.5 w-full">
                  <Pill size={13} className="text-slate-400 shrink-0" />
                  <select
                    value={current.name}
                    onChange={(e) => setCurrent({ ...current, name: e.target.value })}
                    className="text-sm text-slate-700 outline-none bg-transparent w-full"
                  >
                    <option value="">Select Medicine</option>
                    {MEDICINES.map((m) => <option key={m}>{m}</option>)}
                  </select>
                </div>
              </div>
            </div>

            <div>
              <label className="text-xs text-slate-500 mb-1 block">Quantity</label>
              <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setCurrent((p) => ({ ...p, quantity: Math.max(1, p.quantity - 1) }))}
                  className="px-2.5 py-2.5 text-slate-500 hover:bg-slate-50 border-r border-slate-200"
                >
                  <Minus size={13} />
                </button>
                <span className="px-3 py-2.5 text-sm text-slate-700 min-w-9 text-center">
                  {String(current.quantity).padStart(2, "0")}
                </span>
                <button
                  onClick={() => setCurrent((p) => ({ ...p, quantity: p.quantity + 1 }))}
                  className="px-2.5 py-2.5 text-slate-500 hover:bg-slate-50 border-l border-slate-200"
                >
                  <Plus size={13} />
                </button>
              </div>
            </div>

            <div>
              <label className="text-xs text-slate-500 mb-1 block">Duration</label>
              <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden">
                <span className="px-3 py-2.5 text-sm text-slate-700 border-r border-slate-200">
                  {String(current.duration).padStart(2, "0")}
                </span>
                <div className="flex items-center gap-1.5 px-2.5 py-2.5">
                  <Calendar size={13} className="text-slate-400 shrink-0" />
                  <select
                    value={current.durationUnit}
                    onChange={(e) => setCurrent({ ...current, durationUnit: e.target.value as DurationUnit })}
                    className="text-sm text-slate-700 outline-none bg-transparent"
                  >
                    {DURATION_UNITS.map((u) => <option key={u}>{u}</option>)}
                  </select>
                </div>
              </div>
            </div>

            <div>
              <label className="text-xs text-slate-500 mb-1 block">Notes (Optional)</label>
              <div className="flex items-center gap-2 border border-slate-200 rounded-lg px-3 py-2.5">
                <Pencil size={13} className="text-slate-400 shrink-0" />
                <input
                  value={current.notes}
                  onChange={(e) => setCurrent({ ...current, notes: e.target.value })}
                  placeholder="Write any notes..."
                  className="text-sm outline-none w-full text-slate-700 placeholder:text-slate-400"
                />
              </div>
            </div>
          </div>

          {/* Row 2: Type / Times / Relation */}
          <div className="grid grid-cols-[1.4fr_1fr_1fr] gap-4 mt-3">
            <div>
              <label className="text-xs text-slate-500 mb-2 block">Type</label>
              <div className="flex items-center border border-slate-200 rounded-xl bg-slate-50 p-1 gap-0.5">
                {MEDICINE_TYPES.map((t) => (
                  <button
                    key={t}
                    onClick={() => setCurrent({ ...current, type: t })}
                    className={`flex-1 flex items-center justify-center gap-1 py-1.5 rounded-lg text-xs font-medium transition whitespace-nowrap ${
                      current.type === t
                        ? "bg-blue-600 text-white shadow-sm"
                        : "text-slate-500 hover:bg-white hover:text-slate-700"
                    }`}
                  >
                    {t === "Tablet"    && <Pill size={12} />}
                    {t === "Syrup"     && <FlaskConical size={12} />}
                    {t === "Injection" && <Syringe size={12} />}
                    {t === "Ointment"  && <Package size={12} />}
                    {t === "Drops"     && <Droplets size={12} />}
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs text-slate-500 mb-2 block">Times per day</label>
              <div className="flex flex-wrap gap-2">
                {TIMES.map((t) => (
                  <button
                    key={t}
                    onClick={() => toggleTime(t)}
                    className={`px-3 py-2 rounded-lg border text-xs font-medium transition whitespace-nowrap ${
                      current.timesPerDay.includes(t)
                        ? "bg-blue-600 text-white border-blue-600"
                        : "border-slate-200 text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs text-slate-500 mb-2 block">Relation to food</label>
              <div className="flex flex-wrap gap-2">
                {RELATIONS.map((r) => (
                  <button
                    key={r}
                    onClick={() => setCurrent({ ...current, relationToFood: r })}
                    className={`px-3 py-2 rounded-lg border text-xs font-medium transition whitespace-nowrap ${
                      current.relationToFood === r
                        ? "bg-blue-600 text-white border-blue-600"
                        : "border-slate-200 text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Added Medicines */}
          {addedMedicines.length > 0 && (
            <div className="mt-4">
              <div className="border-t border-slate-200 pt-3 mb-3">
                <span className="text-xs text-slate-400 text-center block">Added Medicines</span>
              </div>
              <div className="space-y-2">
                {addedMedicines.map((m) => (
                  <div key={m.id} className="flex items-center justify-between border-l-4 border-blue-500 pl-3 py-1.5 pr-2">
                    <div>
                      <p className="text-sm font-semibold text-slate-800">{m.name}</p>
                      <div className="flex items-center gap-3 mt-0.5 text-xs text-slate-500 flex-wrap">
                        <span className="flex items-center gap-1"><Hash size={11} /> {m.quantity} {m.type}</span>
                        <span>·</span>
                        <span className="flex items-center gap-1"><Clock size={11} /> {m.duration} {m.durationUnit}</span>
                        <span>·</span>
                        <span className="flex items-center gap-1"><Stethoscope size={11} /> {m.timesPerDay.join(" & ")}</span>
                        <span>·</span>
                        <span className="flex items-center gap-1"><Utensils size={11} /> {m.relationToFood}</span>
                        {m.notes && (<><span>·</span><span className="flex items-center gap-1"><Pencil size={11} /> {m.notes}</span></>)}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <button className="p-1.5 border border-slate-200 rounded-lg text-slate-500 hover:text-blue-600 hover:border-blue-300 transition">
                        <Pencil size={15} />
                      </button>
                      <button
                        onClick={() => handleDelete(m.id)}
                        className="p-1.5 border border-red-100 rounded-lg text-red-400 hover:bg-red-50 transition"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Buttons — inside scroll area */}
        <div className="flex justify-end gap-3 pt-2 pb-2">
          <button
            onClick={handleAddAnother}
            className="px-4 py-2 rounded-lg border border-slate-200 text-sm font-medium text-slate-700 hover:bg-slate-50 transition"
          >
            Add Another Medicine
          </button>
          <button
            onClick={onConfirm}
            className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition"
          >
            Confirm Prescription
          </button>
        </div>

      </div>
      
    </div>
  );
}