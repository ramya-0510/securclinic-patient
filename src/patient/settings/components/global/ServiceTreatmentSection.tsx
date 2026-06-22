import { Plus, Trash2 } from "lucide-react";
import type { TreatmentItem } from "../../types/settings.types";

interface Props {
  items: TreatmentItem[];
  onChange: (items: TreatmentItem[]) => void;
}

export function ServiceTreatmentSection({ items, onChange }: Props) {
  const addItem = () => {
    onChange([
      ...items,
      { id: `item_${Date.now()}`, name: "", price: 0 },
    ]);
  };

  const removeItem = (id: string) => {
    if (items.length === 1) return;
    onChange(items.filter(item => item.id !== id));
  };

  const updateName = (id: string, name: string) => {
    onChange(items.map(item => item.id === id ? { ...item, name } : item));
  };

  const updatePrice = (id: string, value: string) => {
    const price = parseFloat(value);
    onChange(items.map(item =>
      item.id === id ? { ...item, price: isNaN(price) ? 0 : price } : item
    ));
  };

  return (
    <div className="flex flex-col gap-5 p-6">

      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-[13px] font-medium text-slate-500">
          Manage Treatments &amp; Services
        </span>
        <button
          type="button"
          onClick={addItem}
          className="flex items-center gap-1.5 text-[13px] font-semibold text-blue-600
            hover:text-blue-700 transition"
        >
          <Plus size={14} />
          Add Item
        </button>
      </div>

      {/* List */}
      <div className="flex flex-col gap-3">
        {items.map((item, index) => (
          <div key={item.id} className="flex items-center gap-3">
            {/* Row number */}
            <span className="text-[13px] font-medium text-slate-600 w-5 text-right shrink-0">
              {index + 1}.
            </span>

            {/* Treatment name */}
            <input
              type="text"
              value={item.name}
              onChange={e => updateName(item.id, e.target.value)}
              placeholder="Enter Treatment"
              className="flex-1 px-3.5 py-2.5 rounded-lg border border-slate-200 bg-white
                text-[13px] text-slate-700 placeholder:text-slate-400
                focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition"
            />

            {/* Price */}
            <div className="flex items-center gap-1.5 px-3 py-2.5 rounded-lg border border-slate-200
              bg-white w-[110px] shrink-0 focus-within:ring-2 focus-within:ring-blue-300
              focus-within:border-blue-400 transition"
            >
              <span className="text-[13px] text-slate-500 shrink-0">₹</span>
              <input
                type="number"
                min="0"
                step="0.01"
                value={item.price === 0 ? "" : item.price}
                onChange={e => updatePrice(item.id, e.target.value)}
                placeholder="0.00"
                className="w-full bg-transparent outline-none text-[13px] text-slate-700
                  placeholder:text-slate-400 text-right
                  [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none
                  [&::-webkit-outer-spin-button]:appearance-none"
              />
            </div>

            {/* Delete */}
            <button
              type="button"
              onClick={() => removeItem(item.id)}
              disabled={items.length === 1}
              className="text-slate-400 hover:text-red-500 transition disabled:opacity-30
                disabled:cursor-not-allowed p-1 rounded"
            >
              <Trash2 size={15} />
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}