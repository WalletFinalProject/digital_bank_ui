import React from "react";
import "./list.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@chakra-ui/react";
export default function List() {
  return (
    <div className="list">
      <p>#00123521</p>
      <p>Livia Bator</p>
      <p>6000 $</p>
      <p>April 29, 2020</p>
      <p>
        <Button colorScheme="green" cursor="text" size="sm">
          Completed
        </Button>
      </p>
      <div className="button-action">
        <FontAwesomeIcon icon={faEdit} className="action-button" />
        <FontAwesomeIcon icon={faTrash} className="action-button" />
      </div>
    </div>
  );
}
