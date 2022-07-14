import React from "react";
import DashboardLayout from "../components/DashboardLayout";

export default function Dashboard() {
  return (
    <>
      <DashboardLayout>
        <div className=" h-screen grid place-content-center">
          <h1 className=" text-center font-bold text-8xl text-primary">
            Account Summery details will be shown here.
          </h1>
        </div>
      </DashboardLayout>
    </>
  );
}
