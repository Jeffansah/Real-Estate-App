import Link from "next/link";
import Image from "next/image";
import { Flex, Box, Text, Button } from "@chakra-ui/react";

const Banner = ({
  purpose,
  imageUrl,
  title1,
  title2,
  desc1,
  desc2,
  linkName,
  buttonText,
}) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image
      src={imageUrl}
      width={1000}
      height={800}
      alt="banner"
      style={{ borderRadius: "18px", marginBottom: "5rem", marginTop: "3rem" }}
    />
    <Box p={5}>
      <Text color="gray.500" fontSize="sm" fontWeight="medium">
        {purpose}
      </Text>
      <Text fontSize="3xl" fontWeight="bold">
        {title1}
        <br />
        {title2}
      </Text>
      <Text fontSize="lg" paddingTop={3} paddingBottom={3} color="gray.700">
        {desc1}
        <br />
        {desc2}
      </Text>
      <Button fontSize="xl">
        <Link
          href={linkName}
          style={{ textDecoration: "none", color: "#414141" }}
        >
          {buttonText}
        </Link>
      </Button>
    </Box>
  </Flex>
);

export default Banner;
