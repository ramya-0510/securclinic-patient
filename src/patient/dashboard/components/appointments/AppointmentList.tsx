import AppointmentCard from "./AppointmentCard";

const appointments = [
  { type: "Online", action: "Join" },
  { type: "Clinic", action: "View" },
  { type: "Clinic", action: "View" },
] as const;

function AppointmentList() {
  return (
    <div className="space-y-4 rounded-lg bg-white px-1.5 pb-1 pt-3">
      {appointments.map((appointment, index) => (
        <AppointmentCard
          key={`${appointment.type}-${index}`}
          type={appointment.type}
          action={appointment.action}
        />
      ))}
    </div>
  );
}

export default AppointmentList;
