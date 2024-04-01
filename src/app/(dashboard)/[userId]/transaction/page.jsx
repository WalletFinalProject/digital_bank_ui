"use client";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAdd,
  faCircleDollarToSlot,
  faCircleUser,
  faCalendarAlt,
  faFileAlt,
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
import { fetchAvatars } from "@/app/api/api";
function Transactions() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [transactions, setTransactions] = useState([]);
  const { userId } = useParams();
  const [avatars, setAvatars] = useState([]);
// fetch  all accounts

useEffect(() => {
  const fetchData = async () => {
    const data = await fetchAvatars();
    setAvatars(data);
  };
  fetchData();
}, []);
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
            {avatars.map((avatar) => (
                <option 
                  key={avatar.idAccount}
                  value={avatar.clientName}
                >
                  {avatar.clientName}
                  </option>
              ))}
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
            <Select placeholder="types transaction">
              <option value="option1">credit</option>
              <option value="option2">debit</option>
            </Select>
            <InputGroup>
             <InputLeftElement>
             <FontAwesomeIcon icon={faFileAlt}/>
             </InputLeftElement>
             <Input placeholder="transaction label"/>
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
