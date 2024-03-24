"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAdd,
  faCircleDollarToSlot,
  faCircleUser,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./accounts.css";
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
} from "@chakra-ui/react";
import List from "@/component/list/List";
function Accounts() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <div className="accounts-header">
        <p>Accounts list</p>
        <button className="btn-add-account" onClick={onOpen}>
          <FontAwesomeIcon icon={faAdd} className="add-icon" />
          <p>Add</p>
        </button>
      </div>
      <div className="account-list-content">
        <div className="list-header">
          <p>Id account</p>
          <p>Name</p>
          <p>Amount</p>
          <p>Creation date</p>
          <p>Status</p>
          <p></p>
        </div>
        <div className="list-content">
          <List />
        </div>
      </div>
      <Pagination />
      <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create a nex Account</ModalHeader>
          <ModalCloseButton />
          <ModalBody
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: "1vh 2vw",
              gap: "3vh",
            }}
          >
            <InputGroup>
              <InputLeftElement>
                <FontAwesomeIcon icon={faCircleUser} />
              </InputLeftElement>
              <Input placeholder="Last name" />
            </InputGroup>
            <InputGroup>
              <InputLeftElement>
                <FontAwesomeIcon icon={faCircleUser} />
              </InputLeftElement>
              <Input placeholder="First name" />
            </InputGroup>
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
              <Input placeholder="Net Monthly salary" />
            </InputGroup>
            <Box sx={{ display: "flex", flexDirection: "row", gap: "1vw" }}>
              <Button colorScheme="linkedin" w="10vw">
                Create
              </Button>
              <Button colorScheme="red" w="10vw">
                Cancel
              </Button>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default Accounts;
