"use client";
import { useQuery } from "@chakra-ui/react";
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
  faCircleUser,
  faDollarSign,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import "./accounts.css";
import Image from "next/image";
import { fetchAvatars } from "../api/api";
function Accounts() {
  const [avatars, setAvatars] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAvatars();
      console.log(data);
      setAvatars(data);
    };
    fetchData();
  }, []);
  const [formData, setFormData] = useState({
    lastName: "",
    firstName: "",
    birthDate: "",
    amount: "",
    allowCredit: false,
  });
  const [allowCredit, setAllowCredit] = useState(false);
  const handleCreate = () => {
    console.log({ ...formData, allowCredit });
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
                <Avatar key={avatar.idAccount} name={avatar.clientName} />
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
                sx={{ width: "90%", marginLeft: "3vw" }}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
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
                sx={{ width: "90%", marginLeft: "3vw" }}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
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
                required
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
                placeholder="Amount"
                sx={{ width: "90%", marginLeft: "3vw" }}
                onChange={(e) =>
                  setFormData({ ...formData, amount: e.target.value })
                }
              />
            </InputGroup>
            <FormControl>
              <FormLabel>Is allow credit</FormLabel>
              <Switch
                size="md"
                className="switch"
                isChecked={allowCredit}
                onChange={(e) => setAllowCredit(e.target.checked)}
              />
            </FormControl>
            <Button colorScheme="linkedin" onClick={handleCreate}>
              Create
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Accounts;
