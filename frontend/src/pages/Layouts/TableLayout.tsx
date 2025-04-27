import React from "react";

export interface TableLayoutProps {
  children: React.ReactNode;
}
export default function TableLayout({ children }: TableLayoutProps) {
  return (
    <div className="flex flex-col ">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div className="overflow-hidden border border-gray-100  md:rounded-lg">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
