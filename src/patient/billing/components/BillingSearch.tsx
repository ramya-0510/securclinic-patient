import { useState } from "react";
import { Search } from "lucide-react";
import type { BillingPatient } from "../types/billing.types";

interface Props {
  onPatientFound: (patient: BillingPatient | null) => void;
}

export default function BillingSearch({ onPatientFound }: Props) {
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setError("");
  };

  const isValidPhone = (value: string) => /^\d{10}$/.test(value);
  const isValidUHID = (value: string) => /^[A-Za-z]\d{10}$/.test(value);

  const handleSearch = () => {
    if (query.trim().length === 0) {
      setError("Please enter a mobile number or Patient ID.");
      return;
    }

    if (!isValidPhone(query) && !isValidUHID(query)) {
      setError("Enter a valid 10-digit mobile number or Patient ID (1 letter + 10 digits).");
      return;
    }

    setError("");

    const isPhone = isValidPhone(query);

    onPatientFound({
      id: "1",
      name: "John Mathew",
      phone: isPhone ? query : "9876543210",
      uhid: isPhone ? "C0987654321" : query,
      email: "jmathew@gmail.com",
      lastVisit: "03 Dec 2025",
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-700 mb-3">Search Patient</h2>
      <div className="flex gap-2">
        <div className={`flex items-center border rounded-lg px-3 py-2 flex-1 bg-white gap-2 ${
          error ? "border-red-400" : "border-gray-300"
        }`}>
          <Search size={16} className="text-gray-400 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder="Search by mobile number / Patient ID"
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