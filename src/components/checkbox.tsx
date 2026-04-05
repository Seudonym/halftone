import { useState } from "react";

export const Checkbox = ({ label }: { label: string }) => {
  const [checked, setChecked] = useState(false);
  return (
    <label className="flex items-center gap-3 cursor-pointer group">
      <div
        className={`w-6 h-6 border-2 border-black flex items-center justify-center transition-colors
        ${checked ? "bg-black" : "dithered-fill"}`}
      >
        {checked && <div className="w-2 h-2 bg-white" />}
      </div>
      <span className="font-mono text-sm font-bold bg-white px-1 border border-transparent group-hover:border-black">
        {label}
      </span>
      <input
        type="checkbox"
        className="hidden"
        onChange={() => setChecked(!checked)}
      />
    </label>
  );
};
