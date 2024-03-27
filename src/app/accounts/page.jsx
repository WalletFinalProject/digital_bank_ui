import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Switch,
} from "@chakra-ui/react";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./accounts.css";
function Accounts() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        background:"#001948"
      }}
    >
      <Box sx={{ width: "50%",display:"flex", flexDirection:" "}}>
        
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
            boxShadow:"1px 1px 5px grey",
            width:"30vw",
            padding:"2vh 1vw",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2vh",
            borderRadius:"0.5rem"
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "800"
            }}
          >
            <FontAwesomeIcon icon={faCircleUser} className="icon" />
            <h3>Create new Accounts</h3>
          </Box>
          <Box sx={{width:"100%",display:"flex",flexDirection:"column",alignItems:"flex-start", justifyContent:"center",gap:"2vh"}}>
            <FormControl>
              <FormLabel>Last name</FormLabel>
              <Input type="text" placeholder="Last name"/>
            </FormControl>
            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input type="text" placeholder="First name" />
            </FormControl>
            <FormControl>
              <FormLabel>Birthday</FormLabel>
              <Input type="date" required />
            </FormControl>
            <FormControl>
              <FormLabel>Monthly salary</FormLabel>
              <Input placeholder="Amount" />
            </FormControl>
            <FormControl>
              <FormLabel>Is authoried</FormLabel>
              <Switch size="md" />
            </FormControl>
            <Button  colorScheme="linkedin">Create</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Accounts;
