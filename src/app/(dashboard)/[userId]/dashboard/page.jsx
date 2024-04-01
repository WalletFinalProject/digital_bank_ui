"use client";
import React, { useEffect, useState } from "react";
import "./dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarCheck,
  faHandHolding,
  faMoneyBillTransfer,
  faMoneyBillTrendUp,
  faPiggyBank,
} from "@fortawesome/free-solid-svg-icons";
import { useParams, useRouter } from "next/navigation";
import { getAccountbyId } from "@/app/api/getByIdAccount";
import List from "@/component/list/List";
function Dashboard() {
  const router = useRouter();
  const { userId } = useParams();
  const [account, setAccount] = useState([]);
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getAccountbyId(userId);
      setAccount(data[0]);
    };
    fetchData();
  }, [userId]);

  useEffect(() => {
    fetch("http://localhost:4000/transaction/account/" + userId)
      .then((response) => response.json())
      .then((data) => setTransactions(data));
  }, [userId]);
  return (
    <div className="dashboard">
      <div className="card-content">
        <div className="accounts">
          <FontAwesomeIcon icon={faMoneyBillTrendUp} className="icon" />
          <p>Balance</p>
          <p>{account.balance}</p>
        </div>
        <div className="currency">
          <FontAwesomeIcon icon={faPiggyBank} className="icon" />
          <p>Credit</p>
          <p>{account.creditAmount}</p>
        </div>
        <div className="transaction">
          <FontAwesomeIcon icon={faCalendarCheck} className="icon" />
          <p>Date of creation</p>
          <p>{account.creationDate}</p>
        </div>
        <div className="balance">
          <FontAwesomeIcon icon={faHandHolding} className="icon" />
          <p>Monthy salary</p>
          <p>{account.netMonthlySalary}</p>
        </div>
      </div>
      <div className="transaction-list-content">
        <div className="list-header">
          <p>Id transaction</p>
          <p>label</p>
          <p>Amount</p>
          <p>Creation date</p>
          <p>type</p>
          <p></p>
        </div>
        <div className="list-content">
          {transactions.map((transaction) => (
            <List key={transaction.id} transaction={transaction} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
