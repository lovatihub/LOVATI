import React from "react";

export function Card({ className = "", children, ...props }) {
  return (
    <div className={`border rounded-xl bg-white ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardHeader({ className = "", children, ...props }) {
  return (
    <div className={`px-4 pt-4 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({ className = "", children, ...props }) {
  return (
    <h3 className={`font-semibold ${className}`} {...props}>
      {children}
    </h3>
  );
}

export function CardContent({ className = "", children, ...props }) {
  return (
    <div className={`px-4 pb-4 ${className}`} {...props}>
      {children}
    </div>
  );
}
