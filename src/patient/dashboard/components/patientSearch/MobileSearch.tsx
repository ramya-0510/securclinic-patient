import { Phone } from "lucide-react";
import Input from "../ui/Input";

function MobileSearch() {
  return (
    <Input
      type="text"
      placeholder="Search by mobile number"
      leftIcon={<Phone size={16} />}
    />
  );
}

export default MobileSearch;
