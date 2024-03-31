"use client";
import React, { useEffect, useState } from "react";
import "./Appbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons";
import { Avatar } from "@chakra-ui/react";
import { useParams, useRouter } from "next/navigation";
import { getAccountbyId } from "@/app/api/getByIdAccount";
function Appbar() {
  const router = useRouter();
  const { userId } = useParams();
  const [account, setAccount] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getAccountbyId(userId);
      setAccount(data[0]);
    };
    fetchData();
  }, [userId]);

  return (
    <div className="app_bar">
      <div className="component_name">
        <FontAwesomeIcon icon={faBars} className="bars" />
        <span>Dashboard</span>
      </div>
      <div className="search-content">
        <input
          type="search"
          name="search"
          id="search"
          className="search"
          placeholder="search something here ..."
        />
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
      <div className="user-info">
        <div className="avatar">
          <Avatar name={account.clientFirstname} />
        </div>
        <div className="info">
          <h4>{account.clientName}</h4>
          <p>{account.clientFirstname}</p>
        </div>
      </div>
    </div>
  );
}

export default Appbar;
