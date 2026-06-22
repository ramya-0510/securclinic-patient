import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Button from "../ui/Button";

interface StatsCardProps {
  title: string;
  count: string;
  action: string;
  icon: LucideIcon;
  className?: string;
}

function StatsCard({ title, count, action, icon: Icon, className }: StatsCardProps) {
  return (
    <div
      className={`rounded-xl bg-[#E1EEFF] p-5 flex flex-col justify-between h-[149px] ${className ?? ""}`}
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-4xl font-bold text-blue-600 leading-none">
            {count}
          </h3>
          <p className="mt-2 text-sm font-semibold text-slate-700">
            {title}
          </p>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-blue-500 shadow-sm">
          <Icon size={22} strokeWidth={1.5} />
        </div>
      </div>

      <Button
        variant="primary"
        fullWidth
        rightIcon={<ArrowRight size={15} />}
        className="rounded-lg py-1.5 text-sm font-light"
        style={{ backgroundColor: "1A73E8" }}
      >
        {action}
      </Button>
    </div>
  );
}

export default StatsCard;