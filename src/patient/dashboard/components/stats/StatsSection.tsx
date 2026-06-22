import StatsCard from "./StatsCard";
import { CalendarSync, Headphones, UserPlus, Users } from "lucide-react";

function StatsSection() {
  const stats = [
    { title: "Total Patients",         count: "25", action: "View List",         icon: Users },
    { title: "Recall Patients",        count: "12", action: "View Insights",     icon: CalendarSync },
    { title: "Upcoming Consultations", count: "05", action: "Open Schedule",     icon: Headphones },
    { title: "New Patients",           count: "03", action: "View Patient List", icon: UserPlus },
  ];

  return (
    <div className="grid grid-cols-4 gap-4">
      {stats.map((item) => (
        <StatsCard
          key={item.title}
          title={item.title}
          count={item.count}
          action={item.action}
          icon={item.icon}
        />
      ))}
    </div>
  );
}

export default StatsSection;