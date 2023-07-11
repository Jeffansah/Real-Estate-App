import Link from "next/link";
import Image from "next/image";
import { Box, Flex, Text, Avatar } from "@chakra-ui/react";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";
import DefaultImage from "../assets/images/house.jpg";
import { MdVerified } from "react-icons/md";

const Property = ({
  property: {
    coverPhoto,
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    externalID,
  },
}) => (
  <Link
    href={`/property/${externalID}`}
    passHref
    style={{ textDecoration: "none", color: "#353535" }}
  >
    <Flex
      flexWrap="wrap"
      w="420px"
      p="5"
      paddingTop="0"
      justifyContent="start"
      cursor="pointer"
    >
      <Box>
        <Image
          style={{
            minHeight: "260px",
            maxHeight: "260px",
            minWidth: "100%",
            maxWidth: "100%",
          }}
          src={coverPhoto ? coverPhoto.url : DefaultImage}
          width={400}
          height={260}
          alt="house"
          layout="responsive"
        />
      </Box>
      <Box w="full">
        <Flex paddingTop="2" alignItems="center" justifyContent="space-between">
          <Flex alignItems="center">
            <Box paddingRight="3" color="green.400">
              {isVerified && <MdVerified />}
            </Box>
            <Text fontWeight="bold" fontSize="lg">
              $ {millify(price * 0.27)}
              {rentFrequency && `/${rentFrequency}`}
            </Text>
          </Flex>
          <Box>
            <Avatar size="sm" src={agency?.logo?.url} />
          </Box>
        </Flex>
        <Flex
          alignItems="center"
          p={1}
          justifyContent="space-between"
          w="250px"
          color="blue.400"
        >
          {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft{" "}
          <BsGridFill />
        </Flex>
        <Text fontSize="lg">
          {title.length > 30 ? `${title.substring(0, 30)}...` : title}
        </Text>
      </Box>
    </Flex>
  </Link>
);

export default Property;
