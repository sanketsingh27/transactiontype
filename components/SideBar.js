import React from "react";
import LinkItem from "./LinkItem";

export default function SideBar() {
  const linksArr = [
    { displayValue: "Home", route: "/dashboard" },
    { displayValue: "Transactions", route: "/all-transaction" },
    { displayValue: "Home", route: "/settings" },
  ];

  const links = linksArr.map((link) => <LinkItem linkDetails={link} />);
  return (
    <>
      <div className="bg-white w-1/4 shadow-lg p-4 ">{links}</div>
    </>
  );
}
