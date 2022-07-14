import React from "react";
import LinkItem from "./LinkItem";

export default function SideBar() {
  const linksArr = [
    { displayValue: "Transactions", route: "/all-transaction" },
    { displayValue: "Home", route: "/dashboard" },
    { displayValue: "Settings", route: "/settings" },
  ];

  const links = linksArr.map((link) => <LinkItem linkDetails={link} />);
  return (
    <>
      <div className=" hidden sm:block bg-white w-1/4 shadow-lg p-4 ">{links}</div>
    </>
  );
}
