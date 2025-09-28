import React from "react";
export const Input = React.forwardRef(function Input({ className = "", ...props }, ref) {
  return <input ref={ref} className={`w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 ${className}`} {...props} />;
});
