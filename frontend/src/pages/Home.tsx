/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import Headbar from "../component/headbar";
import { API } from "../libs/Api";
import { useEffect, useState } from "react";
import Card from "../component/card";

interface integrationtest{
  id: number;
  Fullname: string;
  Email: string;
  PhoneNumber: string;
  Address: string;
}

export default function Home() {

  const [data, setData] = useState<integrationtest[]>([]);


  const [create, setCreate] = useState({
    Fullname: "",
    Email: "",
    PhoneNumber: "",
    Address: "",
  });


  function handleForm(e: string | any) {
    setCreate ({
      ...create,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit() {
    if(create.Fullname !== "" && create.Email !== "" && create.PhoneNumber !== "" && create.Address !== ""){
    const data = {
      Fullname: create.Fullname,
      Email: create.Email,
      PhoneNumber: create.PhoneNumber,
      Address: create.Address,
    }
    try {
      API.post("/create", data)
    } catch (error) {
      console.log(error)
    }
    }
  }

  async function fetchData() {
    const response = await API.get("/findall");
    setData(response.data);
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <Box>
        <Box>
          <Headbar />
        </Box>
        <Center justifyContent={"space-around"}>
          <Box
            display="flex"
            flexDirection={"column"}
            gap={"2em"}
            bgColor={"aqua"}
            p={"1.3em"}
            textAlign={"center"}
            mt="1em"
            border={"1px solid gray"}
            borderRadius={"8px"}
            boxShadow={"2px 2px 5px 2px gray"}
          >
            <Box>
              <Heading>Integration Test</Heading>
              <Text>React - Express</Text>
            </Box>
            <form style={{ display: "flex", flexDirection: "column" }} onSubmit={handleSubmit}>
              <FormControl isRequired mb={"1em"}>
                <FormLabel id="FullName">FullName</FormLabel>
                <Input placeholder="FullName" bgColor={"white"} onChange={handleForm} name="Fullname"/>
              </FormControl>
              <FormControl isRequired mb={"1em"}>
                <FormLabel id="Email">Email</FormLabel>
                <Input placeholder="Email" bgColor={"white"} onChange={handleForm} name="Email"/>
              </FormControl>
              <FormControl isRequired mb={"1em"}>
                <FormLabel id="Phone-Number">Phone Number</FormLabel>
                <Input placeholder="Phone-Number" bgColor={"white"} onChange={handleForm} name="PhoneNumber"/>
              </FormControl>
              <FormControl isRequired mb={"1em"}>
                <FormLabel id="Address">Address</FormLabel>
                <Input placeholder="Address" bgColor={"white"} onChange={handleForm} name="Address"/>
              </FormControl>
              <Button
              type="submit"
                _hover={{
                  bg: "green.500",
                  color: "white",
                  boxShadow: "1px 1px 3px 1px gray",
                }}
              >
                Submit
              </Button>
            </form>
          </Box>
          {data.map((data, index) => (
            <Card key={index} id={data.id} Fullname={data.Fullname} Email={data.Email} PhoneNumber={data.PhoneNumber} Address={data.Address}/>
          ))}
        </Center>
      </Box>
    </>
  );
}
