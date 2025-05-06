import React from "react";

type CustomCardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function CustomCard({ children,className }: CustomCardProps) {
  return (
    <div className={`w-full p-3 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 ${className}`}>
      {children}
    </div>
  );
}