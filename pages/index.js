import Banner from "@/components/banner";
import { Box, Flex } from "@chakra-ui/react";
import { baseURL, fetchAPI } from "@/utils/fetchAPI";
import Property from "@/components/property";
import rentHome from "../assets/images/renthome.jpg";
import buyHome from "../assets/images/buyhome.jpg";

export default function Home({ propertiesForSale, propertiesForRent }) {
  return (
    <Box color="#333333">
      <Banner
        purpose="RENT A HOME"
        title1="Rental Homes for"
        title2="Everyone"
        desc1="Explore Apartments, Villas, Homes"
        desc2="and more"
        buttonText="Explore Renting"
        linkName="/search?purpose=for-rent"
        imageUrl={rentHome}
      />
      <Flex justifyContent="center" flexWrap="wrap">
        {propertiesForRent.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
      <Banner
        purpose="BUY A HOME"
        title1=" Find, Buy & Own Your"
        title2="Dream Home"
        desc1=" Explore Apartments, Villas, Homes"
        desc2=" and more"
        buttonText="Explore Buying"
        linkName="/search?purpose=for-sale"
        imageUrl={buyHome}
      />
      <Flex justifyContent="center" flexWrap="wrap">
        {propertiesForSale.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
    </Box>
  );
}

export async function getStaticProps() {
  const propertyForSale = await fetchAPI(
    `${baseURL}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=8`
  );
  const propertyForRent = await fetchAPI(
    `${baseURL}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=8`
  );

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    },
  };
}
