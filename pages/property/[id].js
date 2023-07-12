import { Box, Text, Flex, Spacer, Avatar } from "@chakra-ui/react";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";
import ImageScrollBar from "@/components/imageScrollBar";
import { baseURL, fetchAPI } from "@/utils/fetchAPI";

const PropertyDetails = ({
  propertyDetails: {
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    description,
    type,
    purpose,
    furnishingStatus,
    amenities,
    photos,
  },
}) => (
  <Box maxWidth="1000px" mx="auto" p="4">
    {photos && <ImageScrollBar data={photos} />}
    <Box bg="white" p="6" boxShadow="lg" borderRadius="lg">
      <Flex alignItems="center" mb="4">
        {isVerified && (
          <Box as={GoVerified} color="green.400" mr="2" fontSize="xl" />
        )}
        <Text fontSize="2xl" fontWeight="bold" color="gray.700">
          {title}
        </Text>
        <Spacer />
        <Avatar size="sm" src={agency?.logo?.url} />
      </Flex>
      <Flex justifyContent="space-between" alignItems="center" mb="4">
        <Text fontSize="xl" fontWeight="bold">
          $ {millify(Math.ceil(price * 0.27))}{" "}
          {rentFrequency && `/${rentFrequency}`}
        </Text>
        <Flex alignItems="center" color="blue.400">
          <Text fontSize="lg" fontWeight="bold" mr="2">
            {rooms} <FaBed />
          </Text>
          <Text fontSize="lg" fontWeight="bold" mr="2">
            {baths} <FaBath />
          </Text>
          <Text fontSize="lg" fontWeight="bold">
            {millify(area)} sqft <BsGridFill />
          </Text>
        </Flex>
      </Flex>
      <Text
        color="gray.600"
        style={{ fontSize: "16px" }}
        mb="4"
        dangerouslySetInnerHTML={{ __html: description }}
      ></Text>
      <Flex flexWrap="wrap" justifyContent="space-between">
        <InfoBox label="Type" value={type} />
        <InfoBox label="Purpose" value={purpose} />
        {furnishingStatus && (
          <InfoBox label="Furnishing Status" value={furnishingStatus} />
        )}
      </Flex>
    </Box>
    <Box mt="8">
      <Text fontSize="2xl" fontWeight="bold" mb="4">
        Facilities:
      </Text>
      <Flex flexWrap="wrap">
        {amenities?.map((item) =>
          item?.amenities?.map((amenity) => (
            <Text
              key={amenity.text}
              fontWeight="bold"
              color="blue.400"
              fontSize="lg"
              p="2"
              bg="gray.200"
              m="1"
              borderRadius="5"
            >
              {amenity.text}
            </Text>
          ))
        )}
      </Flex>
    </Box>
  </Box>
);

const InfoBox = ({ label, value }) => (
  <Flex
    justifyContent="space-between"
    alignItems="center"
    width={["100%", "48%", "32%", "32%"]}
    bg="white"
    p="4"
    boxShadow="md"
    borderRadius="md"
    mb="4"
  >
    <Text color="gray.500" fontSize="lg" fontWeight="bold">
      {label}
    </Text>
    <Text fontSize="xl" fontWeight="bold">
      {value}
    </Text>
  </Flex>
);

export default PropertyDetails;

export async function getServerSideProps({ params: { id } }) {
  const data = await fetchAPI(`${baseURL}/properties/detail?externalID=${id}`);

  return {
    props: {
      propertyDetails: data,
    },
  };
}
