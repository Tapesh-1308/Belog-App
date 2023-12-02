import { forwardRef, useId } from "react";

function Select({ options = [], label, className = "", ...props }, ref) {
  const id = useId();
  return (
    <div className="w-full">
      {label && <label htmlFor={id} className=""></label>}
      <select
        {...props}
        id={id}
        ref={ref}
        className={`px-3 py-2 rounded-lg bg-black/10 text-white outline-none focus:bg-black/10 duration-200 border border-white/40 w-full ${className}`}
      >
        {options?.map((option) => (
          <option key={option} value={option} className="bg-black">
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default forwardRef(Select);
