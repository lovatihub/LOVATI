import React from "react";

export function Badge({ className = "", children, variant = "default", ...props }) {
  const base = "inline-flex items-center rounded-md px-2 py-1 text-xs font-medium";
  const variants = {
    default: "bg-slate-900 text-white",
    outline: "border border-slate-200 text-slate-700",
    secondary: "bg-slate-100 text-slate-700",
  };
  return (
    <span className={`${base} ${variants[variant] || variants.default} ${className}`} {...props}>
      {children}
    </span>
  );
}
