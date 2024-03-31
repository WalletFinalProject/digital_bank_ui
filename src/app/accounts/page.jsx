"use client";
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Switch,
} from "@chakra-ui/react";
import {
  faCakeCandles,
  faCircleCheck,
  faCircleUser,
  faDollarSign,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import "./accounts.css";
import Image from "next/image";
import { fetchAvatars } from "../api/api";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";
function Accounts() {
  const router = useRouter();
  const [avatars, setAvatars] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAvatars();
      setAvatars(data);
    };
    fetchData();
  }, []);
  const [formData, setFormData] = useState({
    authorizeCredits: false,
    clientName: "",
    clientFirstname: "",
    birthDate: "",
    netMonthlySalary: "",
    balance: 0,
    creditAmount: 0,
  });
  const [isAccountCreated, setIsAccountCreated] = useState(false);
  const doCreate = async () => {
    const idAccount = uuidv4();
    try {
      const response = await fetch("http://localhost:4000/account", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          idAccount,
          creationDate: new Date().toISOString().split("T")[0],
          updateDate: new Date().toISOString().split("T")[0],
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setIsAccountCreated(true);
        setTimeout(() => {
          setIsAccountCreated(false);
          router.push(idAccount + "/dashboard");
        }, 5000);
      }
    } catch (error) {
      console.error(error);
      alert("Error try again");
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        background: "#292A5F",
        color: "white",
        borderRight: "1px solid grey",
      }}
    >
      <Box sx={{ width: "50%", display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            gap: "1vh",
            paddingBlock: "2vh",
          }}
        >
          <h1 className="h1">Welcome to U-bank</h1>
          <p className="slogan">
            Empowering Your Finances, One Click at a Time!
          </p>
          <Image
            src="/ressources/image.png"
            width={500}
            height={500}
            alt="bank img"
            sx={{ width: "30vw", height: "30vw", objectFit: "cover" }}
          />
          <Box
            sx={{
              width: "fit-content",
              height: "10vh",
              background: "#434e86",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: "1vh 1vw",
              borderRadius: "3rem",
            }}
          >
            <AvatarGroup max={6}>
              {avatars.map((avatar) => (
                <Avatar
                  key={avatar.idAccount}
                  name={avatar.clientName}
                  onClick={() => router.push(avatar.idAccount + "/dashboard")}
                />
              ))}
            </AvatarGroup>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: "50%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            boxShadow: "1px 1px 5px grey",
            width: "30vw",
            padding: "2vh 1vw",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2vh",
            borderRadius: "0.5rem",
            background: "#434e86",
            color: "#000",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "800",
            }}
          >
            <FontAwesomeIcon icon={faCircleUser} className="icon" />
            <h3>Create new Accounts</h3>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "2vh",
            }}
          >
            <InputGroup
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <InputLeftElement>
                <FontAwesomeIcon icon={faUserTie} />
              </InputLeftElement>
              <Input
                type="text"
                placeholder="Last name"
                required
                sx={{ width: "90%", marginLeft: "3vw" }}
                onChange={(e) =>
                  setFormData({ ...formData, clientName: e.target.value })
                }
              />
            </InputGroup>
            <InputGroup>
              <InputLeftElement>
                <FontAwesomeIcon icon={faUserTie} />
              </InputLeftElement>
              <Input
                type="text"
                placeholder="First name"
                required
                sx={{ width: "90%", marginLeft: "3vw" }}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    clientFirstname: e.target.value,
                  }))
                }
              />
            </InputGroup>
            <InputGroup>
              <InputLeftElement>
                <FontAwesomeIcon icon={faCakeCandles} />
              </InputLeftElement>
              <Input
                type="date"
                sx={{ width: "90%", marginLeft: "3vw" }}
                onChange={(e) =>
                  setFormData({ ...formData, birthDate: e.target.value })
                }
              />
            </InputGroup>
            <InputGroup>
              <InputLeftElement>
                <FontAwesomeIcon icon={faDollarSign} />
              </InputLeftElement>
              <Input
                placeholder="netMonthlySalary"
                required
                sx={{ width: "90%", marginLeft: "3vw" }}
                onChange={(e) =>
                  setFormData({ ...formData, netMonthlySalary: e.target.value })
                }
              />
            </InputGroup>
            <FormControl>
              <FormLabel>Is allow credit</FormLabel>
              <Switch
                size="md"
                className="switch"
                isChecked={formData.authorizeCredits}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    authorizeCredits: e.target.checked,
                  }))
                }
              />
            </FormControl>
            <Button colorScheme="linkedin" onClick={doCreate}>
              Create
            </Button>
          </Box>
        </Box>
      </Box>
      {isAccountCreated && (
        <Box
          sx={{
            position: "fixed",
            bottom: "2vh",
            right: "2vw",
            height: "5vh",
            width: "10vw",
            color: "green",
            display: "flex",
            alignItems: "center",
            border: "2px solid green",
            gap: "10px",
            justifyContent: "center",
            padding: "1vh 1vw",
            background: "whitesmoke",
          }}
        >
          <FontAwesomeIcon icon={faCircleCheck} />
          <p>Success</p>
        </Box>
      )}
    </Box>
  );
}

export default Accounts;
