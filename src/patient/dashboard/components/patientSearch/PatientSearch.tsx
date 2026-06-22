import ImageSearch from "./ImageSearch";
import MobileSearch from "./MobileSearch";
import Button from "../ui/Button";
import Card from "../ui/Card";

interface PatientSearchProps {
  onSearchPatient?: () => void;
}

function PatientSearch({ onSearchPatient }: PatientSearchProps) {
  return (
    <Card className="h-full flex flex-col justify-between">
      <div>
        <h2 className="text-lg font-bold text-slate-800">
          Patient Search
        </h2>

        <div className="mt-1 space-y-4">
          <MobileSearch />

          <div className="border-t border-slate-200 pt-3">
            <ImageSearch />
          </div>
        </div>
      </div>

      <Button
        variant="primary"
        onClick={onSearchPatient}
        fullWidth
        className="mt-2 h-10 text-sm font-bold"
      >
        Search Patient
      </Button>
    </Card>
  );
}

export default PatientSearch;