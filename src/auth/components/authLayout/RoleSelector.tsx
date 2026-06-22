import type { UserRole } from "../../types";

interface RoleSelectorProps {
  selected: UserRole;
  onChange: (role: UserRole) => void;
}

function RoleSelector({ selected, onChange }: RoleSelectorProps) {
  const roles: UserRole[] = ["Doctor", "Patient"];

  return (
    <div>
      <p className="text-sm font-medium mb-2">I want to access as:</p>
      <div className="flex gap-3">
        {roles.map((role) => (
          <button
            key={role}
            onClick={() => onChange(role)}
            className={`flex-1 py-2 px-4 border rounded-lg text-sm transition-all
              ${
                selected === role
                  ? "border-blue-500 bg-blue-50 text-blue-700 font-medium"
                  : "border-gray-200 text-gray-500 hover:border-blue-300"
              }`}
          >
            {role}
          </button>
        ))}
      </div>
    </div>
  );
}

export default RoleSelector;
