"use client";
import {
  faAdd,
  faDollarSign,
  faFileAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Category.css";
import {
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Select,
  useDisclosure,
} from "@chakra-ui/react";
function Currency() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <div className="category-header">
        <p>Category lists</p>
        <button className="btn-add-category" onClick={onOpen}>
          <FontAwesomeIcon icon={faAdd} className="add-icon" />
          <p>Add</p>
        </button>
      </div>
      <div className="category-list-content"></div>

      <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create a new category</ModalHeader>
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
                <FontAwesomeIcon icon={faDollarSign} />
              </InputLeftElement>
              <Input type="text" placeholder="Category name" />
            </InputGroup>
            <InputGroup>
              <InputLeftElement>
                <FontAwesomeIcon icon={faFileAlt} />
              </InputLeftElement>
              <Input type="text" placeholder="Category description" />
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

export default Currency;
