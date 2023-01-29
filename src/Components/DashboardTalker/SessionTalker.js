import { CalendarIcon, ChevronRightIcon, ChevronDownIcon, CheckCircleIcon } from "@chakra-ui/icons";
import { Avatar, Badge, Box, Button, Divider, IconButton, Text } from "@chakra-ui/react";
import React, { useState } from "react";



export default function SessionTalker({ activeChanger}) {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <Box
      w="50%"
      h="80%"
      style={{ minWidth: "500px", position: "relative" }}
      mt={-20}
    >
      <Text
        className="font-semibold"
        color= "gray.700"
        ml = {47}
        mt = {4}
      >
        {" "}
        My Sessions{" "}
      </Text>

      <Box
        w="75%"
        h="30%"
        style={{ border: "2px solid lightgrey", borderRadius: "25px" }}
        mt={25}
        ml={10}
        bg="lightgray"
      >
        <Button
          colorScheme="lightgrey"
          mt="12%"
          ml={197}
          style={{ border: "2px solid black", borderRadius: "7px" }}
          onClick={() => activeChanger("Request")}
        >
          <span style={{ color: "black" }}>Request a session</span>
        </Button>
      </Box>
      <br></br>
      <Text mt={5} ml={10} className="font-semibold">
        {" "}
        Upcoming session{" "}
      </Text>
  

      <Box
        open
        w="75%"
        h="140%"
        style={{ border: "2px solid lightgrey", borderRadius: "25px" }}
        mt={27}
        ml={10}
      >
        <Text ml={4} mt={4} color="grey" fontSize="small">
          I want to talk about...
        </Text>
        <Text ml={483} mt={-5} className="font-semibold">
          {" "}
          Details
        </Text>
        <IconButton
          variant="unstyled"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded = {isOpen}
          icon={
              !isOpen ? (
                <ChevronRightIcon
                ml={543} 
                mt={-19} 
                mb={50}
                />
              ) : (
                <ChevronDownIcon 
                ml={543} 
                mt={-19} 
                mb={50}
                />
              )
              }
        />

      
  
        <Text className="font-semibold" ml={4} mt={-9}>
          {" "}
          I can't get a job after graduation
        </Text>
        <CalendarIcon ml={4} mt={2} color="lightgray"></CalendarIcon>
        <Text color="gray" ml={10} mt={-4} fontSize="small">
          {" "}
          Fri, Oct 14 12:00pm
        </Text>
        <Avatar h={4} w={4} ml={185} mt={-4}></Avatar>
        <Text fontSize="small" ml={208} mt={-41}>
          {" "}
          with{" "}
          <span style={{ color: "red", lineHeight: "10px" }} className="font-semibold">
            Jane Doe{" "}
          </span>
        </Text>
        <Badge
          backgroundColor = "green.400"
          ml = {313}
          mt = {-12}
        >
          <CheckCircleIcon
            color="white"
            mt = {-0.4}
          >

          </CheckCircleIcon>
          {" "}
          <span style={{color: "white"}} fontSize = "small" > Confirmed{" "} </span>
        </Badge>
        
        <Divider
          color= "black"
          mt = {-3}
          ml = {4}
          width = "93%"
        />

        <Text style={{color: "grey"}} fontSize = "1xs" ml = {4} mt = {2}> Listener</Text>
        <Avatar h = {8} w = {10} mt = {3} ml = {3}></Avatar>
        <Text ml = {16} fontSize = "smaller" mt = {-8} className = "font-semibold"> Jane Doe </Text>
        <Text ml = {65} fontSize = "smaller" color= "gray.400"> 24 years old, Female</Text>
        
        <Badge
          backgroundColor = "green.400"
          mt = {-75}
          ml = {455}
        >
          <CheckCircleIcon
            color="white"
            mt = {-0.2}
          >

          </CheckCircleIcon>
          {" "}
          <span style={{color: "white"}} fontSize = "small" > Confirmed{" "} </span>
        </Badge>

        <Box h = "30%" w = "90%" ml = {6} mt = {-3} borderRadius = "15px" backgroundColor= "gray.200">
          <Text style={{lineHeight: "330%"}} ml = {4} fontSize = "small" color="gray.500"> More about me </Text>
          <Text ml = {4}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Text>
          
          <Text fontSize= "small" color = "gray.500" mt = {5} ml = {4}> I like to listen to  </Text>
          <Badge backgroundColor= "gray.500" ml = {4} mt = {2} height = "34px" width= "64px" borderRadius = "5px">
          <Text mt = {1} ml = {1} width = "40px" color= "white" fontSize= "medium"> Work</Text>
          </Badge>
          <Badge backgroundColor= "gray.500" ml = {2} mt = {2} height = "34px" width= "50px" borderRadius = "5px">
          <Text mt = {1} ml = {1} width = "40px" color= "white" fontSize= "medium"> Life </Text>
          </Badge>
          <Badge backgroundColor= "gray.500" ml = {2} mt = {2} height = "34px" width= "130px" borderRadius = "5px">
          <Text mt = {1} ml = {1} width = "40px" color= "white" fontSize= "medium"> Relationship </Text>
          </Badge>
        </Box>
        
        <Box h = "25%"  w = "90%" ml = {6} mt = {10} borderRadius = "15px"> 
          <Text mt = {5} ml = {2} fontSize = "small" color= "gray.500"> What I want to talk about</Text>
          <Text ml = {2} mt = {2}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
          <Badge backgroundColor= "gray.500" ml = {2} mt = {4} height = "34px" width= "64px" borderRadius = "5px">
          <Text mt = {1} ml = {1} width = "40px" color= "white" fontSize= "medium"> Work</Text>
          </Badge>
      
        </Box>
        
        <Text fontSize= "small" color = "gray.500" ml = {8}> Created: 12 Oct 2022 13:15</Text>

        <Button w="30%" colorScheme="red" mt={35} ml={8}>
          Join session now
        </Button>

        <Button w="25%" background = "white" border= "solid 2px gray" mt={35} ml={5}>
          <span style={{color: "black"}}> Edit session </span>
        </Button>
        
        <Button w="25%" background = "white" border= "solid 2px gray" mt={35} ml={5}>
          <span style={{color: "red"}}> Cancel session </span>
        </Button>

      </Box>
      
      <Text className="font-semibold" mt={8} ml={12}>
        {" "}
        Your requests
      </Text>
      <Text
        className="font-semibold"
        ml={550}
        mt={-5}
        color="brandRed.500"
        fontSize="small"
      >
        {" "}
        See all
      </Text>
  
      <Box
        w="75%"
        h="55%"
        style={{ border: "2px solid lightgrey", borderRadius: "25px" }}
        mt={25}
        ml={10}
      >
        <Text ml={4} mt={4} fontSize="small" color="grey">
          I want to talk about...
        </Text>
        <Text ml={483} mt={-5} className="font-semibold">
          {" "}
          Details
        </Text>
        <IconButton
          variant="unstyled"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded = {isOpen}
          icon={
              !isOpen ? (
                <ChevronRightIcon
                ml={543} 
                mt={-19} 
                mb={50}
                />
              ) : (
                <ChevronDownIcon 
                ml={543} 
                mt={-19} 
                mb={50}
                />
              )
              }
        />
        <Text className="font-semibold" ml={4} mt={-39}>
          {" "}
          What can I do to make myself happy
        </Text>
        
        <Divider
          bg = "gray.200"
          mt = {2}
          ml = {4}
          width = "93%"
        />
        
        <Text ml = {4} mt = {2} fontSize = "small" color= "gray.500"> Listener</Text>
        <Text ml = {4} mt = {3}> Matching with listener... </Text>
        <Text fontSize= "smaller" color = "gray.500" ml = {4} mt = {5}> What I want to talk about </Text>
        <Badge backgroundColor= "gray.500" ml = {4} mt = {2} height = "34px" width= "50px" borderRadius = "5px">
          <Text mt = {1} ml = {1} width = "40px" color= "white" fontSize= "medium"> Life </Text>
        </Badge>
        
        <Text fontSize= "small" color = "gray.500" mt = {6} ml = {4}> Created: 12 Oct 2022 13:15</Text>
        <Button w="25%" background = "white" border= "solid 2px gray" mt={4} ml={4}>
          <span style={{color: "black"}}> Edit session </span>
        </Button>
        <Button w="25%" background = "white" border= "solid 2px gray" mt={4} ml={3}>
          <span style={{color: "red"}}> Cancel session </span>
        </Button>
      </Box>

      <Text className="font-semibold" mt = {5} ml = {10}> Past Session </Text> 
    </Box>
  );
}
