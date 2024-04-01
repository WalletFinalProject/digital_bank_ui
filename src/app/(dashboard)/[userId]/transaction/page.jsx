"use client";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAdd,
  faCircleDollarToSlot,
  faCircleUser,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./transaction.css";
import Pagination from "@/component/pagination/Pagination";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  InputGroup,
  InputLeftElement,
  Input,
  Button,
  Box,
  Select,
} from "@chakra-ui/react";
import List from "@/component/list/List";
import { useParams } from "next/navigation";
function Transactions() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [transactions, setTransactions] = useState([]);
  const { userId } = useParams();
  useEffect(() => {
    fetch("http://localhost:4000/transaction/account/" + userId)
      .then((response) => response.json())
      .then((data) => setTransactions(data));
  }, [userId]);
  return (
    <div>
      <div className="transactions-header">
        <p>Transactions lists</p>
        <button className="btn-add-transaction" onClick={onOpen}>
          <FontAwesomeIcon icon={faAdd} className="add-icon" />
          <p>Add</p>
        </button>
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
      <Pagination />
      <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create a nex Transaction</ModalHeader>
          <ModalCloseButton />
          <ModalBody
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: "1vh 2vw",
              gap: "3vh",
            }}
          >
            <Select placeholder="Select accounts">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>

            <InputGroup>
              <InputLeftElement>
                <FontAwesomeIcon icon={faCalendarAlt} />
              </InputLeftElement>
              <Input type="datetime-local" />
            </InputGroup>
            <InputGroup>
              <InputLeftElement>
                <FontAwesomeIcon icon={faCircleDollarToSlot} />
              </InputLeftElement>
              <Input placeholder="Amount" />
            </InputGroup>
            <Box sx={{ display: "flex", flexDirection: "row", gap: "1vw" }}>
              <Button colorScheme="linkedin" w="10vw">
                Create
              </Button>
              <Button colorScheme="red" w="10vw" onClick={onClose}>
                Cancel
              </Button>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default Transactions;
