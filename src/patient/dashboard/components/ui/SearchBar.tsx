import { Search } from "lucide-react";
import Input from "./Input";

interface SearchBarProps {
  placeholder: string;
  className?: string;
}

function SearchBar({ placeholder, className = "" }: SearchBarProps) {
  return (
    <Input
      type="text"
      placeholder={placeholder}
      leftIcon={<Search size={21} className="text-blue-600" />}
      className={`h-11 pl-12 text-sm text-slate-700 ${className}`}
    />
  );
}

export default SearchBar;
