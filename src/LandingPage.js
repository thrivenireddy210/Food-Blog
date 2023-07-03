import React from "react";
import {
  Box,
  Flex,
  Heading,
  Image,
  Button,
  Text,
 
  Card,
 
  Stack,
} from "@chakra-ui/react";
import "./App.css";
import { useRef } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const LandingPage = () => {
 
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
 

  return (
    <Box>
      <Flex width="1440px" height="804px" bg="#FFF">
        <Box flex={1} ml={120}>
          <Image
            src="/Screenshot_669 2.png"
            alt="Image"
            width="107px"
            height="83px"
            flexShrink={0}
            mt={60}
            bg={`url(/Screenshot_669 2.png) lightgray -14.029px 0px / 113.18% 100% no-repeat`}
          />
          <Text
            display="flex"
            width="345px"
            flexDirection="column"
            flexShrink={0}
            color="#0E2368"
            fontSize="62px"
            fontFamily="Source Sans Pro"
            fontStyle="normal"
            fontWeight={700}
            lineHeight="69px"
            whiteSpace="nowrap"
            mt={60}
          >
            Discover the{" "}
            <Text as="span" color="#E23744" display="inline">
              Best <span style={{ color: "#0E2368" }}>Food</span>
            </Text>{" "}
            and Drinks
          </Text>
          <Text
            display="flex"
            width="345px"
            flexDirection="column"
            flexShrink={0}
            color="var(--body, #444957)"
            fontSize="16.445px"
            fontFamily="Open Sans"
            fontStyle="normal"
            fontWeight={400}
            lineHeight="27.408px"
          >
            This sofa is perfect for modern tropical spaces, baroque inspired
            spaces.
          </Text>
          <Button
            display="flex"
            width="190px"
            height="63px"
            padding="14px 34px"
            alignItems="flex-start"
            gap="7px"
            flexShrink={0}
            borderRadius="34px"
            background="#E23744"
            color="#FFF"
            fontSize="18px"
            fontFamily="Open Sans"
            fontStyle="normal"
            fontWeight={700}
            lineHeight="36px"
            letterSpacing="0.18px"
          >
            Explore Now !
          </Button>
        
        </Box>
        <Box flex={1} position="relative">
          <Image
            src="/Rectangle 400.png"
            alt="First Image"
            width="735px"
            height="804px"
            flexShrink={0}
          />
          <Box
            position="absolute"
            top={0}
            right={0}
            display="flex"
            justifyContent="flex-end"
            p={4}
            zIndex={1}
          >
            <Button
              display="flex"
              width="122px"
              height="42px"
              padding="3px 26px"
              justifyContent="center"
              alignItems="center"
              gap="10px"
              flexShrink={0}
              borderRadius="21px"
              border="1px solid #FFF"
              background="rgba(255, 255, 255, 0.00)"
              color="#FFF"
              fontSize="16px"
              fontFamily="Source Sans Pro"
              fontStyle="normal"
              fontWeight={600}
              lineHeight="36px"
              letterSpacing="0.48px"
              mr={40}
              mt={25}
            >
              Get In Touch
            </Button>
          </Box>
          <Image
            src="/Vector 1.png"
            alt="Second Image"
            width="752px"
            height="835px"
            flexShrink={0}
            borderRadius="0 50px 50px 0"
            position="absolute"
            top={0}
            right={0}
          />
        </Box>
      </Flex>
      <Flex
        width="1440px" 
        height="467px"
        bg="linear-gradient(90deg, rgba(30, 42, 93, 0.04) 0%, rgba(48, 62, 130, 0.04) 55.51%, rgba(60, 80, 157, 0.04) 100%)"
      >
        <Box flex={1} className="image-container" ml={110} mr={110}>
          <Image
            src="/pharmasict-serving-customer-drug-store 1.png"
            alt="About Us"
            width="384px"
            height="468px"
            flexShrink={0}
          />
        </Box>
        <Box
          flex={1}
          justifyContent="center"
          alignItems="center"
          ml={110}
          mr={110}
        >
          <Text
            mt={90}
            display="flex"
            width="422px"
            height="26px"
            flexDirection="column"
            color="var(--primary, #0E2368)"
            fontSize="45px"
            fontFamily="Poppins"
            fontStyle="normal"
            fontWeight={600}
            lineHeight="27px"
          >
            About Us
          </Text>
          <Text
            mt={4}
            display="flex"
            width="447px"
            height="138px"
            flexDirection="column"
            color="var(--body, #444957)"
            fontSize="15px"
            fontFamily="Open Sans"
            fontStyle="normal"
            fontWeight={400}
            lineHeight="27px"
            justifyContent="center"
            alignItems="center"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            hendrerit sapien sit amet erat pharetra, a tristique nisi fermentum.
            Nulla consectetur viverra eros sed ultrices. a tristique nisi
            fermentum. Nulla consectetur viverra eros sed ultrices
          </Text>

          <Button
            variant="outline"
            mt={4}
            rounded="full"
            display="flex"
            width="132px"
            height="42px"
            padding="3px 26px"
            justifyContent="center"
            alignItems="center"
            gap={2} 
            flexShrink={0}
            borderRadius="21px"
            background="#E23744"
          >
            Read More
          </Button>
        </Box>
      </Flex>
    
     <div
  style={{
    backgroundColor: '#FFF',
    width: '1440px',
    height: '995px',
    flexShrink: 0,
    
    
  }}
>
            <Text
            display="flex"
            width="461px"
            height="84px"
            flexDirection="column"
            flexShrink={0}
            color="var(--primary, #0E2368)"
            fontSize="56px"
            fontFamily="Source Sans Pro"
            fontStyle="normal"
            fontWeight={600}
            lineHeight="42px"
            letterSpacing="2.24px"
            mx="120px"
            mt="100px"
          >
            Latest Articles
          </Text>
        
     
  <Slider {...settings} style={{ marginTop: '110px' }}>
          
            <Card
              maxW="381px"
              height="554px"
              borderRadius="20.937px"
              border="1.37px solid rgba(147, 162, 211, 0.38)"
              background="#FFF"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="space-between"
              ml='100px'
              // p={6}
            >
              <Image
                src="/grilled-tomatoes-1-846x846 1.png"
                alt="Green double couch with wooden legs"
                width="326px"
                height="257px"
                borderRadius="21px"
                objectFit="cover"
                my="20px"
                mx="auto"
              />

              <Stack spacing="3" mb="25px">
                <Heading
                  size="md"
                  color="var(--primary, #0E2368)"
                  fontSize="21px"
                  fontFamily="Poppins"
                  fontStyle="normal"
                  fontWeight={700}
                  lineHeight="27px"
                  mx="25px"
                >
                  Grilled Tomatoes at Home
                </Heading>
                <Text
                  color="var(--body, #444957)"
                  fontSize="15px"
                  fontFamily="Open Sans"
                  fontStyle="normal"
                  fontWeight={400}
                  lineHeight="27px"
                  letterSpacing="-0.3px"
                  mx="25px"
                >
                  This sofa is perfect for modern tropical spaces, baroque
                  inspired spaces, earthy toned spaces and for people who love a
                  chic design with a sprinkle of vintage design.
                </Text>
                <Button
                  variant="outline"
                  mt={4}
                  rounded="full"
                  display="flex"
                  width="131px"
                  height="42px"
                  padding="3px 26px"
                  justifyContent="center"
                  alignItems="center"
                  gap={10}
                  flexShrink={0}
                  borderRadius="21px"
                  mx="25px"
                  border="1px solid #424961"
                >
                  Read More
                </Button>
              </Stack>
            </Card>
            <Card
              maxW="381px"
              height="554px"
              borderRadius="20.937px"
              border="1.37px solid rgba(147, 162, 211, 0.38)"
              background="#FFF"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="space-between"
              ml='50px'
              // p={6}
            >
              <Image
                src="/meal-prep-ideas-846x846 11.png"
                alt="Green double couch with wooden legs"
                width="326px"
                height="257px"
                borderRadius="21px"
                objectFit="cover"
                my="20px"
                mx="auto"
              />

              <Stack spacing="3" mb="25px">
                <Heading
                  size="md"
                  color="var(--primary, #0E2368)"
                  fontSize="21px"
                  fontFamily="Poppins"
                  fontStyle="normal"
                  fontWeight={700}
                  lineHeight="27px"
                  mx="25px"
                >
                  Snacks for Travel
                </Heading>
                <Text
                  color="var(--body, #444957)"
                  fontSize="15px"
                  fontFamily="Open Sans"
                  fontStyle="normal"
                  fontWeight={400}
                  lineHeight="27px"
                  letterSpacing="-0.3px"
                  mx="25px"
                >
                  This sofa is perfect for modern tropical spaces, baroque
                  inspired spaces, earthy toned spaces and for people who love a
                  chic design with a sprinkle of vintage design.
                </Text>
                <Button
                  variant="outline"
                  mt={4}
                  rounded="full"
                  display="flex"
                  width="131px"
                  height="42px"
                  padding="3px 26px"
                  justifyContent="center"
                  alignItems="center"
                  gap={10}
                  flexShrink={0}
                  borderRadius="21px"
                  mx="25px"
                  border="1px solid #424961"
                >
                  Read More
                </Button>
              </Stack>
            </Card>
            <Card
              maxW="381px"
              height="554px"
              borderRadius="20.937px"
              border="1.37px solid rgba(147, 162, 211, 0.38)"
              background="#FFF"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="space-between"
              // p={6}
            >
              <Image
                src="/meal-prep-ideas-846x846 1.png"
                alt="Green double couch with wooden legs"
                width="326px"
                height="257px"
                borderRadius="21px"
                objectFit="cover"
                my="20px"
                mx="auto"
              />

              <Stack spacing="3" mb="25px">
                <Heading
                  size="md"
                  color="var(--primary, #0E2368)"
                  fontSize="21px"
                  fontFamily="Poppins"
                  fontStyle="normal"
                  fontWeight={700}
                  lineHeight="27px"
                  mx="25px"
                >
                  Post-workout Recipes
                </Heading>
                <Text
                  color="var(--body, #444957)"
                  fontSize="15px"
                  fontFamily="Open Sans"
                  fontStyle="normal"
                  fontWeight={400}
                  lineHeight="27px"
                  letterSpacing="-0.3px"
                  mx="25px"
                >
                  This sofa is perfect for modern tropical spaces, baroque
                  inspired spaces, earthy toned spaces and for people who love a
                  chic design with a sprinkle of vintage design.
                </Text>
                <Button
                  variant="outline"
                  mt={4}
                  rounded="full"
                  display="flex"
                  width="131px"
                  height="42px"
                  padding="3px 26px"
                  justifyContent="center"
                  alignItems="center"
                  gap={10}
                  flexShrink={0}
                  borderRadius="21px"
                  mx="25px"
                  border="1px solid #424961"
                >
                  Read More
                </Button>
              </Stack>
            </Card>
            <Card
              maxW="381px"
              height="554px"
              borderRadius="20.937px"
              border="1.37px solid rgba(147, 162, 211, 0.38)"
              background="#FFF"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="space-between"
              ml='100px'
              // p={6}
            >
              <Image
                src="/grilled-tomatoes-1-846x846 1 (1).png"
                alt="Green double couch with wooden legs"
                width="326px"
                height="257px"
                borderRadius="21px"
                objectFit="cover"
                my="20px"
                mx="auto"
              />

              <Stack spacing="3" mb="25px">
                <Heading
                  size="md"
                  color="var(--primary, #0E2368)"
                  fontSize="21px"
                  fontFamily="Poppins"
                  fontStyle="normal"
                  fontWeight={700}
                  lineHeight="27px"
                  mx="25px"
                >
                How To Grill Corn
                </Heading>
                <Text
                  color="var(--body, #444957)"
                  fontSize="15px"
                  fontFamily="Open Sans"
                  fontStyle="normal"
                  fontWeight={400}
                  lineHeight="27px"
                  letterSpacing="-0.3px"
                  mx="25px"
                >
                  This sofa is perfect for modern tropical spaces, baroque
                  inspired spaces, earthy toned spaces and for people who love a
                  chic design with a sprinkle of vintage design.
                </Text>
                <Button
                  variant="outline"
                  mt={4}
                  rounded="full"
                  display="flex"
                  width="131px"
                  height="42px"
                  padding="3px 26px"
                  justifyContent="center"
                  alignItems="center"
                  gap={10}
                  flexShrink={0}
                  borderRadius="21px"
                  mx="25px"
                  border="1px solid #424961"
                >
                  Read More
                </Button>
              </Stack>
            </Card>
            <Card
              maxW="381px"
              height="554px"
              borderRadius="20.937px"
              border="1.37px solid rgba(147, 162, 211, 0.38)"
              background="#FFF"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center" 
              ml='50px'
              // p={6}
            >
              <Image
                src="/meal-prep-ideas-846x846 1 (2).png"
                alt="Green double couch with wooden legs"
                width="326px"
                height="257px"
                borderRadius="21px"
                objectFit="cover"
                my="20px"
                mx="auto"
              />

              <Stack spacing="3" mb="25px">
                <Heading
                  size="md"
                  color="var(--primary, #0E2368)"
                  fontSize="21px"
                  fontFamily="Poppins"
                  fontStyle="normal"
                  fontWeight={700}
                  lineHeight="27px"
                  mx="25px"
                >
                 Crunchwrap Supreme
                </Heading>
                <Text
                  color="var(--body, #444957)"
                  fontSize="15px"
                  fontFamily="Open Sans"
                  fontStyle="normal"
                  fontWeight={400}
                  lineHeight="27px"
                  letterSpacing="-0.3px"
                  mx="25px"
                >
                  This sofa is perfect for modern tropical spaces, baroque
                  inspired spaces, earthy toned spaces and for people who love a
                  chic design with a sprinkle of vintage design.
                </Text>
                <Button
                  variant="outline"
                  mt={4}
                  rounded="full"
                  display="flex"
                  width="131px"
                  height="42px"
                  padding="3px 26px"
                  justifyContent="center"
                  alignItems="center"
                  gap={10}
                  flexShrink={0}
                  borderRadius="21px"
                  mx="25px"
                  border="1px solid #424961"
                >
                  Read More
                </Button>
              </Stack>
            </Card>
            <Card
              maxW="381px"
              height="554px"
              borderRadius="20.937px"
              border="1.37px solid rgba(147, 162, 211, 0.38)"
              background="#FFF"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="space-between"
              // p={6}
            >
              <Image
                src="/meal-prep-ideas-846x846 1 (3).png"
                alt="Green double couch with wooden legs"
                width="326px"
                height="257px"
                borderRadius="21px"
                objectFit="cover"
                my="20px"
                mx="auto"
              />

              <Stack spacing="3" mb="25px">
                <Heading
                  size="md"
                  color="var(--primary, #0E2368)"
                  fontSize="21px"
                  fontFamily="Poppins"
                  fontStyle="normal"
                  fontWeight={700}
                  lineHeight="27px"
                  mx="25px"
                >
Broccoli Cheese Soup
                </Heading>
                <Text
                  color="var(--body, #444957)"
                  fontSize="15px"
                  fontFamily="Open Sans"
                  fontStyle="normal"
                  fontWeight={400}
                  lineHeight="27px"
                  letterSpacing="-0.3px"
                  mx="25px"
                >
                  This sofa is perfect for modern tropical spaces, baroque
                  inspired spaces, earthy toned spaces and for people who love a
                  chic design with a sprinkle of vintage design.
                </Text>
                <Button
                  variant="outline"
                  mt={4}
                  rounded="full"
                  display="flex"
                  width="131px"
                  height="42px"
                  padding="3px 26px"
                  justifyContent="center"
                  alignItems="center"
                  gap={10}
                  flexShrink={0}
                  borderRadius="21px"
                  mx="25px"
                  border="1px solid #424961"
                >
                  Read More
                </Button>
              </Stack>
            </Card>
           
            </Slider>
            </div>
          
      <Flex direction={{ base: "column", md: "row" }}>
        <Box
          width="1440px"
          height="362px"
          bg="#F8F8F8"
          flexShrink={0}
          display="flex"
          // p={18.5}
          justifyContent="center"
          alignItems="center"
        >
          <Image
            src="/Screenshot_669 2.png"
            alt="Footer Image"
            width="161px"
            height="125px"
            flexShrink={0}
            bg={`url(/Screenshot_669 2.png) lightgray -21.11px 0px / 113.18% 100% no-repeat`}
            mr={250}
          />
          <Flex direction={{ base: "column", md: "row" }} mt={8}>
            <Flex
              flex={1}
              ml={{ base: 0, md: 8 }}
              direction={{ base: "column", md: "row" }}
              gap={120}
            >
              <Box mr={{ base: 0, md: 8 }}>
                <Heading
                  size="md"
                  color="var(--primary, #0E2368)"
                  fontSize="18.843px"
                  fontFamily="Source Sans Pro"
                  fontStyle="normal"
                  fontWeight={600}
                  lineHeight="27.218px"
                  letterSpacing="0.565px"
                >
                  Contact Us
                </Heading>
                <Text
                  mt={4}
                  display="flex"
                  flexDirection="column"
                  flexShrink={0}
                  width="217px"
                  height="69px"
                  color="#646874"
                  fontSize="14.656px"
                  fontFamily="Source Sans Pro"
                  fontStyle="normal"
                  fontWeight={400}
                  lineHeight="23.031px"
                >
                  This sofa is perfect for modern tropical spaces, baroque
                  inspired spaces.
                </Text>
                <Text
                  mt={2}
                  display="flex"
                  flexDirection="column"
                  flexShrink={0}
                  width="232px"
                  height="23px"
                  color="#646874"
                  fontSize="14.656px"
                  fontFamily="Source Sans Pro"
                  fontStyle="normal"
                  fontWeight={400}
                  lineHeight="23.031px"
                >
                  example2020@gmail.com
                </Text>
                <Text
                  mt={2}
                  display="flex"
                  flexDirection="column"
                  flexShrink={0}
                  width="92px"
                  height="23px"
                  color="#646874"
                  textAlign="center"
                  fontSize="14.656px"
                  fontFamily="Source Sans Pro"
                  fontStyle="normal"
                  fontWeight={400}
                  lineHeight="23.031px"
                >
                  (904) 443-0343
                </Text>
              </Box>

              <Box>
                <Text
                  display="flex"
                  width="43px"
                  height="27px"
                  flexDirection="column"
                  flexShrink={0}
                  color="var(--primary, #0E2368)"
                  fontSize="18.843px"
                  fontFamily="Source Sans Pro"
                  fontStyle="normal"
                  fontWeight={600}
                  lineHeight="27.218px"
                  letterSpacing="0.565px"
                >
                  More
                </Text>

                <Text
                  display="flex"
                  width="75px"
                  height="26px"
                  flexDirection="column"
                  flexShrink={0}
                  color="#646874"
                  fontSize="14.656px"
                  fontFamily="Source Sans Pro"
                  fontStyle="normal"
                  fontWeight={400}
                  lineHeight="27.218px"
                  mt={4}
                >
                  About Us
                </Text>
                <Text
                  display="flex"
                  width="153px"
                  height="26px"
                  flexDirection="column"
                  flexShrink={0}
                  color="#646874"
                  fontSize="15px"
                  fontFamily="Source Sans Pro"
                  fontStyle="normal"
                  fontWeight={400}
                  lineHeight="27px"
                  mt={2}
                >
                  Products
                </Text>

                <Text
                  display="flex"
                  width="86px"
                  height="26px"
                  flexDirection="column"
                  flexShrink={0}
                  color="#646874"
                  fontSize="15px"
                  fontFamily="Source Sans Pro"
                  fontStyle="normal"
                  fontWeight={400}
                  lineHeight="27px"
                  mt={2}
                >
                  Career
                </Text>
                <Text
                  display="flex"
                  width="94px"
                  height="26px"
                  flexDirection="column"
                  flexShrink={0}
                  color="#646874"
                  fontSize="15px"
                  fontFamily="Source Sans Pro"
                  fontStyle="normal"
                  fontWeight={400}
                  lineHeight="27px"
                  mt={2}
                >
                  Contact Us
                </Text>
              </Box>
              <Box>
                <Text
                  display="flex"
                  width="129px"
                  height="27px"
                  flexDirection="column"
                  flexShrink={0}
                  color="#0E2368"
                  fontSize="19px"
                  fontFamily="Source Sans Pro"
                  fontStyle="normal"
                  fontWeight={600}
                  lineHeight="27px"
                  letterSpacing="0.57px"
                >
                  Social Links
                </Text>
                <Image
                  src="/Component.png"
                  alt="Instagram"
                  width="21px"
                  height="21px"
                  flexShrink={0}
                  mr={15}
                />
                <Image
                  src="/Path 2.png"
                  alt="Twitter"
                  width="21px"
                  height="21px"
                  flexShrink={0}
                  mr={15}
                />
                <Image
                  src="/Component (1).png"
                  alt="Facebook"
                  width="21px"
                  height="21px"
                  flexShrink={0}
                />
                <Text
                  display="flex"
                  width="197px"
                  height="25px"
                  flexDirection="column"
                  flexShrink={0}
                  color="var(--828-b-9-c, #828B9C)"
                  // textAlign="center"
                  fontSize="14.656px"
                  fontFamily="Roboto"
                  fontStyle="normal"
                  fontWeight={400}
                  lineHeight="25.124px"
                  mr={30}
                >
                  © 2022 Food Truck Example
                </Text>
              </Box>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default LandingPage;
