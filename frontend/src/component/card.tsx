/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { API } from "../libs/Api";

export default function Card(data: any) {
    async function deletePost() {
        try {
        const response = await API.delete(`/delete/${data.id}`);
        console.log(response);
    }
    catch (error) {
        console.log("error deletenya cok :", error);
    }
}
  return (
    <>
      <Box
        bgColor={"yellow"}
        padding={"1em"}
        border={"1px solid gray"}
        borderRadius={"8px"}
        boxShadow={"2px 2px 5px 2px gray"}
      >
        <Heading textAlign={"center"}>DISPLAY - CARD</Heading>
        <Box
          bgColor={"white"}
          display={"flex"}
          flexDirection={"row"}
          gap="3em"
          border={"1px solid gray"}
          borderRadius={"7px"}
          boxShadow={"1px 1px 3px 1px gray"}
          p="1em"
        >
          <Box display={"flex"} flexDirection={"column"}>
            <Text>Name</Text>
            <Text>Email</Text>
            <Text>Phone Number</Text>
            <Text>Home-Address</Text>
          </Box>
          <Box display={"flex"} flexDirection={"column"}>
            <Text>: {data.Fullname}</Text>
            <Text>: {data.Email}</Text>
            <Text>: {data.PhoneNumber}</Text>
            <Text>: {data.Address}</Text>
          </Box>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-around"}
          mt="10px"
        >
          <Button border={"1px solid gray"} borderRadius={"8px"} _hover={{ boxShadow: "1px 1px 3px 1px gray"}}>
            Edit
          </Button>
          <Button onClick={deletePost} border={"1px solid gray"} borderRadius={"8px"} _hover={{ boxShadow: "1px 1px 3px 1px gray"}}>
            Delete
          </Button>
        </Box>
      </Box>
    </>
  );
}