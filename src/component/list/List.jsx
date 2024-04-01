import React from "react";
import "./list.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@chakra-ui/react";
export default function List({ transaction }) {
  const date = new Date(transaction.transactionDate);
  const formattedDate = date.toLocaleDateString();
  const formattedTime = date.toLocaleTimeString();
  const buttonColorScheme =
    transaction.transactionType === "debit" ? "red" : "green";
  const shortId = transaction.idTransaction.substring(0, 13);
  return (
    <div className="list">
      <p>{shortId}</p>
      <p>{transaction.label}</p>
      <p> {transaction.amount} $</p>
      <p>
        {formattedDate} {formattedTime}
      </p>
      <p>
        <Button colorScheme={buttonColorScheme} cursor="text" size="sm">
          {transaction.transactionType}
        </Button>
      </p>
      <div className="button-action">
        <FontAwesomeIcon icon={faEdit} className="action-button" />
        <FontAwesomeIcon icon={faTrash} className="action-button" />
      </div>
    </div>
  );
}
