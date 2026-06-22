import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  doctor: string;
}

export default function SessionSidebar({ doctor }: Props) {
  const navigate = useNavigate();
  const [complaint, setComplaint] = useState("Chest Pain");
  const [diagnosis, setDiagnosis] = useState("Angio");
  const [notes, setNotes] = useState("");

  return (
    <div className="w-80 shrink-0 flex flex-col gap-4">

      {/* Fields */}
      <div className="flex flex-col gap-4 flex-1">
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-slate-700">Complaint</label>
          <input
            type="text"
            value={complaint}
            onChange={(e) => setComplaint(e.target.value)}
            className="border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-700 outline-none focus:border-blue-400 transition"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-slate-700">Diagnosis</label>
          <input
            type="text"
            value={diagnosis}
            onChange={(e) => setDiagnosis(e.target.value)}
            className="border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-700 outline-none focus:border-blue-400 transition"
          />
        </div>

        <div className="flex flex-col gap-1.5 flex-1">
          <label className="text-sm font-medium text-slate-700">Clinical Notes</label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Enter Notes Here"
            className="flex-1 border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-700 outline-none focus:border-blue-400 transition resize-none placeholder:text-slate-300 min-h-[120px]"
          />
        </div>
      </div>

      {/* Actions pinned to bottom */}
      <div className="flex flex-col gap-2 shrink-0">
        <button
          onClick={() => navigate("/prescriptions")}
          className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-3 rounded-xl transition"
        >
          + Add New Prescription
        </button>
        <button className="w-full text-sm font-semibold text-slate-700 hover:text-blue-600 transition py-1">
          See History
        </button>
      </div>

    </div>
  );
}