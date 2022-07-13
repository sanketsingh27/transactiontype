import React from "react";

export default function TransactionItem(props) {
  const { accountId, id, transactionCount } = props;
  return (
    <>
      <div className=" flex justify-around my-4 rounded-lg bg-white p-2">
        <span className=" font-medium text-gray-600 bg-blue-200 py-2 px-3 rounded-md">{id}</span>
        <span className=" font-medium text-gray-600 bg-yellow-100 py-2 px-3 rounded-md">
          {accountId}
        </span>

        <span className=" font-medium text-gray-600 bg-red-200 py-2 px-3 rounded-md">
          {transactionCount}
        </span>
      </div>
    </>
  );
}
