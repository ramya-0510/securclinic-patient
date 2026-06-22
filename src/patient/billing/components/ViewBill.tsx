import { Phone, Mail, Calendar, CreditCard, ClipboardList, Download, Printer, Share2, Stethoscope } from "lucide-react";
import type { Bill } from "../types/billing.types";
import { useState } from "react";
import ShareBillModal from "./ShareBillModal";

interface Props {
  bill: Bill;
  onBack: () => void;
}


const MOCK_ITEMS = [
  { name: "Doctor's Fees",       price: 200, qty: 1 },
  { name: "Sugar Test",          price: 100, qty: 1 },
  { name: "Blood Pressure Test", price: 100, qty: 1 },
];

export default function ViewBill({ bill, onBack }: Props) {
  const [shareOpen, setShareOpen] = useState(false);
  const subtotal = MOCK_ITEMS.reduce((sum, i) => sum + i.price * i.qty, 0);
  const tax = 0;
  const total = subtotal + tax;

  return (
    <div className="flex gap-4 w-full min-h-0 flex-1">

      {/* Left — Invoice document */}
      <div className="flex-1 rounded-xl bg-white shadow-sm flex flex-col hmin-h-0">
        <div className="px-6 py-5 flex flex-col gap-5 flex-1 min-h-0">

          <div className="flex flex-col gap-5 flex-1">

            {/* Clinic header */}
            <div className="flex items-start justify-between">
              <div className="flex flex-col gap-1">
                <h1 className="text-blue-600 font-bold text-xl tracking-wide">SECURCLINIC</h1>
                <div className="flex items-center gap-4 text-xs text-slate-500">
                  <span className="flex items-center gap-1"><Phone size={11} /> 1-800-123-4567</span>
                  <span className="flex items-center gap-1"><Mail size={11} /> support@securoak.com</span>
                </div>
                <p className="text-xs text-slate-400 mt-1">Invoice ID: {bill.invoiceId}</p>
              </div>
              <div className="flex flex-col items-end gap-2">
                <img
                  src="src/assets/logo.png"
                  alt="SecurClinic logo"
                  className="h-10 w-10 rounded-lg object-contain"
                />
                <span className="flex items-center gap-1 text-xs text-slate-500">
                  <Calendar size={11} /> Bill Date: {bill.date}
                </span>
              </div>
            </div>

            {/* Patient & Doctor */}
            <div className="rounded-lg border border-slate-200 p-4 grid grid-cols-2 gap-4">
              <div>
                <div className="flex items-center gap-1.5 text-blue-600 text-xs font-semibold mb-2">
                  <CreditCard size={12} /> Patient Information
                </div>
                <p className="text-sm font-semibold text-slate-800 mb-1.5">John Mathew</p>
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-1 flex-wrap">
                  <span className="flex items-center gap-1"><CreditCard size={11} /> PID: C0987654321</span>
                  <span>·</span>
                  <span className="flex items-center gap-1"><ClipboardList size={11} /> Treatment: {bill.treatment}</span>
                </div>
                <span className="flex items-center gap-1 text-xs text-slate-500"><Phone size={11} /> +91 98765 43210</span>
              </div>
              <div>
                <div className="flex items-center gap-1.5 text-blue-600 text-xs font-semibold mb-2">
                  <Stethoscope size={12} /> Doctor Information
                </div>
                <p className="text-sm font-semibold text-slate-800 mb-1.5">{bill.doctor}</p>
                <div className="flex items-center gap-1 text-xs text-slate-500 mb-1">
                  <CreditCard size={11} /> Reg no: LKG3456709
                </div>
                <span className="flex items-center gap-1 text-xs text-slate-500"><Phone size={11} /> +91 98765 43210</span>
              </div>
            </div>

            {/* Items table */}
            <div className="rounded-lg border border-slate-200 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="text-left px-4 py-2.5 text-xs font-medium text-slate-600">Item</th>
                    <th className="text-center px-4 py-2.5 text-xs font-medium text-slate-600">Price</th>
                    <th className="text-center px-4 py-2.5 text-xs font-medium text-slate-600">Qty</th>
                    <th className="text-right px-4 py-2.5 text-xs font-medium text-slate-600">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {MOCK_ITEMS.map((item, idx) => (
                    <tr key={idx} className={idx !== MOCK_ITEMS.length - 1 ? "border-b border-slate-100" : ""}>
                      <td className="px-4 py-3 text-sm text-slate-800">{item.name}</td>
                      <td className="px-4 py-3 text-center text-sm text-slate-700">₹{item.price.toFixed(2)}</td>
                      <td className="px-4 py-3 text-center text-sm text-slate-700">{String(item.qty).padStart(2, "0")}</td>
                      <td className="px-4 py-3 text-right text-sm text-slate-700">₹{(item.price * item.qty).toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Bottom — total + footer */}
          <div className="flex flex-col gap-3 mt-auto">
            <div className="rounded-lg border border-slate-200 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3">
                <span className="text-sm font-semibold text-slate-800">Total:</span>
                <span className="text-sm font-semibold text-slate-800">₹{total.toFixed(2)}</span>
              </div>
            </div>
            <div className="border-t border-slate-100 pt-3">
              <p className="text-center text-xs text-slate-400">
                Digitally generated invoice via SecurClinic
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Right — Payment Summary */}
      <div className="w-80 shrink-0 rounded-xl bg-white shadow-sm flex flex-col min-h-0">
        <div className="px-5 py-5 flex flex-col flex-1 min-h-0">

          {/* Top — summary + paid stamp */}
          <div className="flex flex-col gap-3">
            <h2 className="text-base font-semibold text-slate-800">Payment Summary</h2>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-500">Subtotal</span>
                <span className="text-sm text-slate-700 font-medium">₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-500">Tax (0%)</span>
                <span className="text-sm text-slate-700 font-medium">₹{tax.toFixed(2)}</span>
              </div>
            </div>

            {/* Dashed divider */}
            <div className="border-t border-dashed border-slate-300" />

            <div className="flex items-center justify-between">
              <span className="text-base font-bold text-green-600">Total:</span>
              <span className="text-base font-bold text-green-600">₹{total.toFixed(2)}</span>
            </div>

            {/* Paid stamp */}
            {bill.status === "Paid" && (
              <div className="flex justify-center py-4">
                <div className="border-[3px] border-green-500 rounded-lg px-6 py-2 rotate-[-8deg] shadow-sm">
                  <span className="text-green-500 font-extrabold text-2xl tracking-widest">PAID</span>
                </div>
              </div>
            )}
          </div>

          {/* Bottom — QR + actions */}
          <div className="flex flex-col gap-3 mt-1">

            {/* QR in grey box */}
            <div className="bg-slate-50 rounded-xl p-4 flex flex-col items-center gap-3">
              <div className="w-40 h-40 rounded-lg overflow-hidden">
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${bill.invoiceId}`}
                  alt="QR Code"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-xs text-slate-400 text-center leading-relaxed">
                Scan the QR code to view this invoice digitally
              </p>
            </div>

            {/* or divider */}
            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-slate-200" />
              <span className="text-xs text-slate-400 shrink-0">or</span>
              <div className="flex-1 h-px bg-slate-200" />
            </div>

            <div className="flex flex-col gap-2 pb-2">
              <button className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2.5 rounded-lg transition">
                <Download size={14} /> Download PDF
              </button>
              <div className="grid grid-cols-2 gap-2">
                <button className="flex items-center justify-center gap-1.5 border border-slate-200 text-sm text-slate-600 hover:bg-slate-50 py-2 rounded-lg transition">
                  <Printer size={13} /> Print
                </button>
                <button
                 onClick={() => setShareOpen(true)}
                 className="flex items-center justify-center gap-1.5 border border-slate-200 text-sm text-slate-600 hover:bg-slate-50 py-2 rounded-lg transition"
                >
                <Share2 size={13} /> Share
                </button>
              </div>
              <ShareBillModal
        isOpen={shareOpen}
        onClose={() => setShareOpen(false)}
        invoiceId={bill.invoiceId}
      />
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}