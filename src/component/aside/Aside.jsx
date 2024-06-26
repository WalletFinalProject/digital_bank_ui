"use client";
import React from "react";
import "./Aside.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faWallet,
  faMoneyCheck,
  faMoneyBillTransfer,
  faHandHoldingDollar,
  faGear,
  faRightFromBracket,
  faBuildingColumns,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useParams } from "next/navigation";
function Aside() {
  const { userId } = useParams();
  return (
    <section className="aside">
      <div className="aside-header">
        <FontAwesomeIcon icon={faBuildingColumns} className="icon" />
        <h1>U-bank</h1>
      </div>
      <div className="link">
        <div className="items">
          <Link href={"/" + userId + "/dashboard"} className="link-items">
            <FontAwesomeIcon icon={faHouse} className="icon" />
            Dashboard
          </Link>
          <Link href={"/" + userId + "/currency"} className="link-items">
            <FontAwesomeIcon icon={faMoneyCheck} className="icon" />
            Category
          </Link>
          <Link href={"/" + userId + "/transaction"} className="link-items">
            <FontAwesomeIcon icon={faMoneyBillTransfer} className="icon" />
            Transaction
          </Link>
          <Link href={"/" + userId + "/balance"} className="link-items">
            <FontAwesomeIcon icon={faHandHoldingDollar} className="icon" />
            Balance
          </Link>
        </div>
        <div className="items">
          <Link href="/setting" className="link-items">
            <FontAwesomeIcon icon={faGear} className="icon" />
            Settings
          </Link>
          <Link href="/accounts" className="link-items">
            <FontAwesomeIcon icon={faRightFromBracket} className="icon" />
            Log out
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Aside;
