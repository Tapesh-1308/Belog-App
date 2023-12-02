import { forwardRef, useId } from "react";

const Input = forwardRef(
  ({ label, type = "text", className = "", ...props }, ref) => {
    const id = useId();
    return (
      <div className="w-full">
        {label && (
          <label className="inline-block mb-1 pl-1" htmlFor={id}>
            {label}
          </label>
        )}

        <input
          type={type}
          className={`px-3 py-2 rounded-lg bg-black/10 text-white/90 outline-none focus:bg-black/20 duration-200 border border-white/10 w-full ${className}`}
          ref={ref}
          {...props}
          id={id}
        />
      </div>
    );
  }
);

export default Input;
