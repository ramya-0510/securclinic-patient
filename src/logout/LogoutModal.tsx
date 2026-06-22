import { Power } from "lucide-react";

interface Props {
  isOpen: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

export function LogoutModal({ isOpen, onCancel, onConfirm }: Props) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      onClick={onCancel}
    >
      <div
        className="bg-white rounded-2xl w-full max-w-sm mx-4 px-8 py-8 flex flex-col items-center gap-5 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col items-center gap-2 text-center">
          <h2 className="text-lg font-bold text-slate-800">
            Are you sure you want to logout?
          </h2>
          <p className="text-sm text-slate-400">
            You will be returned to the login screen
          </p>
        </div>

        <div className="flex gap-3 w-full mt-1">
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 py-3 rounded-xl border border-slate-200 text-sm
              font-medium text-slate-500 hover:bg-slate-50 transition"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={onConfirm}
            className="flex-1 py-3 rounded-xl bg-[#F87171] hover:bg-[#FF5656] transition
              flex items-center justify-center gap-2 text-sm font-semibold text-white"
          >
            <Power size={16} />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}