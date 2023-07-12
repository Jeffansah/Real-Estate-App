import { Box, Flex, Text, Icon, VStack, HStack } from "@chakra-ui/react";
import { RiFacebookFill, RiTwitterFill, RiInstagramFill } from "react-icons/ri";
import Link from "next/link";

const currentYear = new Date().getFullYear();

const Footer = () => (
  <Box borderTop="1px" py="10" w="100%" borderColor="gray.100">
    <Flex direction="column" alignItems="center" justifyContent="center">
      <VStack spacing="6">
        <Box>
          <Text fontSize="lg" fontWeight="bold">
            Urban Hub
          </Text>
        </Box>
        <HStack spacing="6">
          <Link href="/about">
            <Box fontSize="sm" color="gray.600" _hover={{ color: "blue.600" }}>
              About Us
            </Box>
          </Link>
          <Link href="/properties">
            <Box fontSize="sm" color="gray.600" _hover={{ color: "blue.600" }}>
              Properties
            </Box>
          </Link>
          <Link href="/contact">
            <Box fontSize="sm" color="gray.600" _hover={{ color: "blue.600" }}>
              Contact Us
            </Box>
          </Link>
          <Link href="/privacy">
            <Box fontSize="sm" color="gray.600" _hover={{ color: "blue.600 " }}>
              Privacy Policy
            </Box>
          </Link>
        </HStack>
        <HStack spacing="4">
          <Link href="https://www.facebook.com" passHref>
            <Box _hover={{ color: "blue.600" }}>
              <Icon as={RiFacebookFill} boxSize={6} color="gray.600" />
            </Box>
          </Link>
          <Link href="https://www.twitter.com" passHref>
            <Box _hover={{ color: "blue.600" }}>
              <Icon as={RiTwitterFill} boxSize={6} color="gray.600" />
            </Box>
          </Link>
          <Link href="https://www.instagram.com" passHref>
            <Box _hover={{ color: "blue.600" }}>
              <Icon as={RiInstagramFill} boxSize={6} color="gray.600" />
            </Box>
          </Link>
        </HStack>
      </VStack>
      <Text mt="8" fontSize="sm" color="gray.500">
        &copy; {currentYear} Urban Hub. All rights reserved.
      </Text>
    </Flex>
  </Box>
);

export default Footer;
