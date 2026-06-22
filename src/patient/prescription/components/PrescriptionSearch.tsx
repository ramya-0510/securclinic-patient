import { useState } from "react";
import { Search, Phone } from "lucide-react";
import type { Patient } from "../types/prescription.types";

interface Props {
  onPatientFound: (patient: Patient | null) => void;
}

export default function PrescriptionSearch({ onPatientFound }: Props) {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 10) {
      setPhone(value);
      setError("");
    }
  };

  const handleSearch = () => {
    if (phone.length !== 10) {
      setError("Please enter a valid 10-digit mobile number.");
      onPatientFound(null);
      return;
    }
    setError("");

    // TODO: Replace with real API call using `phone`
    onPatientFound({
      id: "1",
      name: "John Mathew",
      phone,
      uhid: "C0987654321",
      email: "jmathew@gmail.com",
      lastVisit: "03 Dec 2025",
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold text-gray-700 mb-3">Search Patient</h2>
      <div className="flex gap-2">
        <div
          className={`flex items-center border rounded-lg px-3 py-2 flex-1 bg-white gap-2 ${
            error ? "border-red-400" : "border-gray-300"
          }`}
        >
          <Phone size={16} className="text-gray-400 shrink-0" />
          <input
            type="text"
            inputMode="numeric"
            value={phone}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder="Enter mobile number"
            className="outline-none w-full text-gray-700 text-sm"
          />
        </div>
        <button
          onClick={handleSearch}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
        >
          <Search size={18} />
        </button>
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}