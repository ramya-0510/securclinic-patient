import { Eye, Printer, Share2, CalendarDays, Stethoscope, ClipboardList, Plus, Receipt, IndianRupee, CircleCheck } from "lucide-react";
import type { Bill } from "../types/billing.types";
import { useState } from "react";
import ShareBillModal from "./ShareBillModal";

interface Props {
  bills: Bill[];
  onCreateNew: () => void;
  onView: (bill: Bill) => void;
}

export default function ExistingBills({ bills, onCreateNew, onView }: Props) {
    const [shareModalOpen, setShareModalOpen] = useState(false);
    const [selectedInvoiceId, setSelectedInvoiceId] = useState<string>("");

    const handleShare = (invoiceId: string) => {
    setSelectedInvoiceId(invoiceId);
    setShareModalOpen(true);
  };
  return (
    <div className="rounded-xl bg-white px-5 py-4 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-semibold text-slate-800">Existing Bills</h2>
        <button
          onClick={onCreateNew}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-3 py-2 rounded-lg transition"
        >
          <Plus size={15} />
          Create New Bill
        </button>
      </div>

      <div className="rounded-lg border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="grid grid-cols-[150px_140px_200px_200px_140px_120px_160px] border-b border-slate-200 bg-slate-50">
          {[
            { icon: Receipt, label: "Invoice ID" },
            { icon: CalendarDays, label: "Date" },
            { icon: Stethoscope, label: "Doctor" },
            { icon: ClipboardList, label: "Treatment" },
            { icon: IndianRupee, label: "Total Amount" },
            { icon: CircleCheck, label: "Status" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-medium text-slate-600 border-r border-slate-200 last:border-r-0">
              <Icon size={13} /> {label}
            </div>
          ))}
          <div className="px-4 py-2.5 border-l border-slate-200" />
        </div>

        {/* Rows */}
        {bills.map((bill, idx) => (
          <div
            key={bill.id}
            className={`grid grid-cols-[150px_140px_200px_200px_140px_120px_160px] items-center ${
              idx !== bills.length - 1 ? "border-b border-slate-100" : ""
            }`}
          >
            <div className="px-4 py-2.5 text-xs text-slate-700 border-r border-slate-100">
              {bill.invoiceId}
            </div>
            <div className="px-4 py-2.5 text-center border-r border-slate-100">
              <span className="text-xs text-blue-500 bg-blue-50 px-2 py-0.5 rounded">
                {bill.date}
              </span>
            </div>
            <div className="px-4 py-2.5 text-center text-sm text-slate-700 border-r border-slate-100">
              {bill.doctor}
            </div>
            <div className="px-4 py-2.5 text-center text-sm text-slate-700 border-r border-slate-100">
              {bill.treatment}
            </div>
            <div className="px-4 py-2.5 text-center text-sm text-slate-700 font-medium border-r border-slate-100">
              ₹{bill.totalAmount}
            </div>
            <div className="px-4 py-2.5 text-center border-r border-slate-100">
              <span className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full ${
                bill.status === "Paid"
                  ? "bg-green-50 text-green-600"
                  : bill.status === "Pending"
                  ? "bg-yellow-50 text-yellow-600"
                  : "bg-red-50 text-red-500"
              }`}>
                <span className="w-1.5 h-1.5 rounded-full bg-current" />
                {bill.status}
              </span>
            </div>
            <div className="flex items-center gap-3 px-4 py-2.5">
              <button
                onClick={() => onView(bill)}
                className="flex items-center gap-1 text-xs text-slate-500 hover:text-blue-600 transition"
              >
                <Eye size={13} /> View
              </button>
              <button className="flex items-center gap-1 text-xs text-slate-500 hover:text-blue-600 transition">
                <Printer size={13} /> Print
              </button>
              <button
                onClick={() => handleShare(bill.invoiceId)}
                className="flex items-center gap-1 text-xs text-slate-500 hover:text-blue-600 transition"
             >
                <Share2 size={13} /> Share
            </button>
            </div>
            <ShareBillModal
                isOpen={shareModalOpen}
                onClose={() => setShareModalOpen(false)}
                invoiceId={selectedInvoiceId}
            />
          </div>
          
        ))}
      </div>
    </div>
  );
}