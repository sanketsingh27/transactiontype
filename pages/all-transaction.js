import React, { useEffect, useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import TransactionItem from "../components/TransactionItem";

export default function AllTransactions() {
  const [transactions, setTransaction] = useState([]);

  useEffect(() => {
    fetch("/api/transactions")
      .then((res) => res.json())
      .then((json) => setTransaction(json))
      .catch((err) => alert(err));
  }, []);

  const TransactionList = transactions.map((item) => (
    <TransactionItem
      accountId={item.account_id}
      id={item._id}
      transactionCount={item.transaction_count}
    />
  ));
  return (
    <>
      <DashboardLayout>
        <h1 className=" text-center font-bold text-4xl">All Transactions</h1>

        {transactions.length < 0 ? (
          <span className="text-5xl font-bold">Loading ...</span>
        ) : (
          <div className=" overflow-auto h-full">{TransactionList}</div>
        )}
      </DashboardLayout>
    </>
  );
}
