import React from "react";

export default function TransactionItem(props) {
  const { accountId, id, transactionCount } = props;
  return (
    <>
      <div className=" flex gap-2 flex-wrap justify-around my-4 rounded-lg bg-white p-2">
        <span className=" w-full sm:w-fit font-medium text-gray-600 bg-blue-200 py-2 px-3 rounded-md">
          {id}
        </span>
        <div className=" w-full   sm:w-1/5 font-medium text-gray-600 bg-yellow-100 py-2 px-3 rounded-md">
          {accountId}
        </div>

        <div className=" w-full  sm:w-1/5 font-medium text-gray-600 bg-red-200 py-2 px-3 rounded-md">
          {transactionCount}
        </div>
      </div>
    </>
  );
}
