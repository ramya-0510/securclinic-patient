import { useState } from "react";
import {
  ChevronLeft, Calendar, Stethoscope, ClipboardList,
  Plus, Trash2, Minus, ChevronDown,
} from "lucide-react";

interface Props {
  onBack: () => void;
  onGenerate: () => void;
}

const DOCTORS    = ["Dr. Prakash", "Dr. Anitha", "Dr. Ramesh", "Dr. Kavitha", "Dr. Suresh"];
const TREATMENTS = ["Head Pain", "General Checkup", "Fever", "Cold & Cough", "Diabetes", "Hypertension", "Back Pain"];
const SERVICES   = ["Doctor's Fees", "MRI Scan", "Utility Charges", "Blood Test", "X-Ray", "ECG", "Consultation Fee"];
const MEDICINES  = ["Paracetamol 650mg - Tablet", "Amoxicillin 500mg - Capsule", "Ibuprofen 400mg - Tablet", "Cetirizine 10mg - Tablet"];

const SERVICE_PRICES: Record<string, number> = {
  "Doctor's Fees": 200, "MRI Scan": 600, "Utility Charges": 200,
  "Blood Test": 150, "X-Ray": 300, "ECG": 250, "Consultation Fee": 200,
};
const MEDICINE_PRICES: Record<string, number> = {
  "Paracetamol 650mg - Tablet": 55, "Amoxicillin 500mg - Capsule": 65,
  "Ibuprofen 400mg - Tablet": 45, "Cetirizine 10mg - Tablet": 40,
};

interface LineItem {
  id: string;
  name: string;
  price: number;
  qty: number;
  isMedicine: boolean;
}

const MOCK_PRESCRIPTION_MEDICINES: LineItem[] = [
  { id: "pm1", name: "Paracetamol 650mg - Tablet",  price: 55, qty: 1, isMedicine: true },
  { id: "pm2", name: "Amoxicillin 500mg - Capsule", price: 65, qty: 1, isMedicine: true },
];

export default function CreateNewBill({ onBack, onGenerate }: Props) {
  const [doctor, setDoctor]       = useState("");
  const [treatment, setTreatment] = useState("");
  const [items, setItems]         = useState<LineItem[]>([
    { id: crypto.randomUUID(), name: "", price: 0, qty: 1, isMedicine: false },
  ]);
  const [addPrescription, setAddPrescription] = useState(false);

  const today = new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });

  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
  const tax      = 0;
  const total    = subtotal + tax;

  const addItem = () => {
    setItems((prev) => [...prev, { id: crypto.randomUUID(), name: "", price: 0, qty: 1, isMedicine: false }]);
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const updateItem = (id: string, field: keyof LineItem, value: string | number | boolean) => {
    setItems((prev) => prev.map((i) => {
      if (i.id !== id) return i;
      if (field === "name") {
        const price =
          SERVICE_PRICES[value as string] ??
          MEDICINE_PRICES[value as string] ?? 0;
        const isMedicine = MEDICINES.includes(value as string);
        return { ...i, name: value as string, price, isMedicine };
      }
      return { ...i, [field]: value };
    }));
  };

  const handlePrescriptionToggle = () => {
    const next = !addPrescription;
    setAddPrescription(next);
    if (next) {
      setItems((prev) => {
        const existing = prev.filter((i) => !i.isMedicine);
        return [...existing, ...MOCK_PRESCRIPTION_MEDICINES];
      });
    } else {
      setItems((prev) => prev.filter((i) => !i.isMedicine));
    }
  };

  return (
    <div className="flex gap-4 w-full h-full">

      {/* Left — Form */}
      <div className="flex-1 rounded-xl bg-white shadow-sm flex flex-col min-h-0">
        <div className="px-6 py-4 flex flex-col gap-5 flex-1 overflow-y-auto">

          {/* Header */}
          <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
            <button
              onClick={onBack}
              className="flex items-center gap-1.5 text-slate-700 font-semibold text-base hover:text-blue-600 transition"
            >
              <ChevronLeft size={18} />
              Create New Bill
            </button>
          </div>

          {/* Bill Date / Doctor / Treatment */}
          <div className="grid grid-cols-3 gap-4">
            {/* Bill Date */}
            <div>
              <label className="text-xs text-slate-500 mb-1 block">Bill Date</label>
              <div className="flex items-center gap-2 border border-slate-200 rounded-lg px-3 py-2.5 justify-between">
                <div className="flex items-center gap-2">
                  <Calendar size={13} className="text-slate-400 shrink-0" />
                  <span className="text-sm text-slate-700">Today</span>
                </div>
                <Calendar size={13} className="text-slate-400" />
              </div>
            </div>

            {/* Doctor */}
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

            {/* Treatment */}
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
          </div>

          {/* Treatment & Services */}
          <div className="rounded-xl border border-slate-200 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100">
              <h3 className="text-sm font-semibold text-slate-800">Treatment & Services</h3>
              <button
                onClick={addItem}
                className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 font-medium transition"
              >
                <Plus size={15} /> Add Item
              </button>
            </div>

            <div className="divide-y divide-slate-100">
              {items.map((item, idx) => (
                <div key={item.id} className="flex items-center gap-3 px-4 py-3">
                  <span className="text-xs text-slate-400 w-4 shrink-0">{idx + 1}.</span>

                  {/* Name select */}
                  <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden flex-1">
                    <div className="flex items-center gap-1.5 px-3 py-2 w-full">
                      <select
                        value={item.name}
                        onChange={(e) => updateItem(item.id, "name", e.target.value)}
                        className="text-sm text-slate-700 outline-none bg-transparent w-full"
                      >
                        <option value="">Select Treatment</option>
                        <optgroup label="Services">
                          {SERVICES.map((s) => <option key={s}>{s}</option>)}
                        </optgroup>
                        <optgroup label="Medicines">
                          {MEDICINES.map((m) => <option key={m}>{m}</option>)}
                        </optgroup>
                      </select>
                      <ChevronDown size={13} className="text-slate-400 shrink-0" />
                    </div>
                  </div>

                  {/* Qty — only for medicines */}
                  {item.isMedicine && (
                    <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden shrink-0">
                      <button
                        onClick={() => updateItem(item.id, "qty", Math.max(1, item.qty - 1))}
                        className="px-2 py-2 text-slate-500 hover:bg-slate-50 border-r border-slate-200"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="px-2.5 py-2 text-sm text-slate-700 min-w-[32px] text-center">
                        {String(item.qty).padStart(2, "0")}
                      </span>
                      <button
                        onClick={() => updateItem(item.id, "qty", item.qty + 1)}
                        className="px-2 py-2 text-slate-500 hover:bg-slate-50 border-l border-slate-200"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  )}

                  {/* Price */}
                  <div className="flex items-center border border-slate-200 rounded-lg px-3 py-2 shrink-0 w-32">
                    <span className="text-slate-400 text-sm mr-1">₹</span>
                    <input
                      type="number"
                      value={item.price}
                      onChange={(e) => updateItem(item.id, "price", parseFloat(e.target.value) || 0)}
                      className="text-sm text-slate-700 outline-none bg-transparent w-full"
                    />
                  </div>

                  {/* Delete */}
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-slate-400 hover:text-red-500 transition shrink-0"
                  >
                    <Trash2 size={15} />
                  </button>
                </div>
              ))}
            </div>

            {/* Add prescription checkbox */}
            <div className="flex items-start justify-between px-4 py-3 border-t border-slate-100">
              <div>
                <p className="text-sm text-slate-700 font-medium">Add prescription medicines to this bill</p>
                <p className="text-xs text-slate-400 mt-0.5">
                  Automatically adds prescribed medicines to this bill. You can edit or remove items after adding.
                </p>
              </div>
              <input
                type="checkbox"
                checked={addPrescription}
                onChange={handlePrescriptionToggle}
                className="mt-1 w-4 h-4 accent-blue-600 shrink-0 cursor-pointer"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Right — Payment Summary */}
      <div className="w-72 shrink-0 rounded-xl bg-white shadow-sm flex flex-col min-h-0">
        <div className="px-5 py-5 flex flex-col flex-1">
          <h2 className="text-base font-semibold text-slate-800 mb-4">Payment Summary</h2>

          <div className="space-y-2 mb-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-500">Subtotal</span>
              <span className="text-sm text-slate-700 font-medium">₹{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-500">Tax (0%)</span>
              <span className="text-sm text-slate-700 font-medium">₹{tax.toFixed(2)}</span>
            </div>
          </div>

          <div className="border-t border-dashed border-slate-300 pt-3 flex items-center justify-between">
            <span className="text-base font-bold text-green-600">Total:</span>
            <span className="text-base font-bold text-green-600">₹{total.toFixed(2)}</span>
          </div>

          <div className="mt-auto pt-4">
            <button
              onClick={onGenerate}
              className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-3 rounded-lg transition"
            >
              Generate Bill & Pay
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}