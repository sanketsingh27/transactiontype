import React from "react";
import SideBar from "./SideBar";

export default function DashboardLayout({ children }) {
  return (
    <>
      <div className=" bg-slate-100 h-screen flex">
        <SideBar />
        <div className=" p-4 w-full">{children}</div>
      </div>
    </>
  );
}
