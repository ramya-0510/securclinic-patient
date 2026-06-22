import { X, Copy } from "lucide-react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  prescriptionId?: string;
}

export default function SharePrescriptionModal({ isOpen, onClose, prescriptionId = "RX-20251212-001" }: Props) {
  if (!isOpen) return null;

  const shareUrl = `https://example.com/prescription/${prescriptionId}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl);
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(shareUrl)}`, "_blank");
  };

  const handleEmail = () => {
    window.open(`mailto:?subject=Prescription&body=${encodeURIComponent(shareUrl)}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/30 "
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-105 rounded-2xl bg-white p-8 shadow-2xl shadow-black/50 mx-4">

        {/* Header */}
        <div className="flex items-start justify-between mb-1">
          <h2 className="text-base font-semibold text-slate-800">Share this Prescription</h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 transition mt-0.5"
          >
            <X size={18} />
          </button>
        </div>
        <p className="text-xs text-slate-400 mb-8">Share this Prescription via WhatsApp, Email, or more.</p>

        {/* Share options */}
        <div className="flex items-center justify-center gap-9 mb-8">

          {/* WhatsApp */}
          <button
            onClick={handleWhatsApp}
            className="flex flex-col items-center gap-1.5 group"
          >
            <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center group-hover:bg-green-100 transition">
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-green-500" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>
            <span className="text-xs text-green-500 font-medium">WhatsApp</span>
          </button>

          {/* Email */}
          <button
            onClick={handleEmail}
            className="flex flex-col items-center gap-1.5 group"
          >
            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-slate-200 transition">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-slate-600 stroke-current fill-none" strokeWidth={1.8} xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m2 7 10 7 10-7" />
              </svg>
            </div>
            <span className="text-xs text-slate-500 font-medium">Email</span>
          </button>

          {/* Download */}
          <button className="flex flex-col items-center gap-1.5 group">
            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-slate-200 transition">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-slate-600 stroke-current fill-none" strokeWidth={1.8} xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3v13m0 0-4-4m4 4 4-4" />
                <path d="M3 18h18" />
              </svg>
            </div>
            <span className="text-xs text-slate-500 font-medium">Download</span>
          </button>

          {/* Print */}
          <button onClick={() => window.print()} className="flex flex-col items-center gap-1.5 group">
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-blue-500 stroke-current fill-none" strokeWidth={1.8} xmlns="http://www.w3.org/2000/svg">
                <path d="M6 9V3h12v6" />
                <rect x="3" y="9" width="18" height="10" rx="1" />
                <path d="M6 14h12M6 18h6" />
              </svg>
            </div>
            <span className="text-xs text-blue-500 font-medium">Print</span>
          </button>
        </div>

        {/* Copy link */}
        <div className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2.5">
          <span className="flex-1 text-xs text-blue-500 truncate">{shareUrl}</span>
          <button
            onClick={handleCopy}
            className="text-slate-400 hover:text-slate-600 transition shrink-0"
          >
            <Copy size={16} />
          </button>
        </div>

      </div>
    </div>
  );
}