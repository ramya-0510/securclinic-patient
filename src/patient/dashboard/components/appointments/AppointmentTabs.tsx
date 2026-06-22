import Button from "../ui/Button";

const tabs = ["All", "Pending", "Completed", "Cancelled"];

function AppointmentTabs() {
  return (
    <div className="mt-1 flex flex-wrap items-center gap-2">
      {tabs.map((tab) => (
        <Button
          key={tab}
          variant="tab"
          active={tab === "All"}
          className="font-medium"
        >
          {tab}
        </Button>
      ))}
    </div>
  );
}

export default AppointmentTabs;
