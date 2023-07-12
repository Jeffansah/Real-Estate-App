import { Box, Flex, Icon } from "@chakra-ui/react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const LeftArrow = ({ prev }) => (
  <Flex justifyContent="center" alignItems="center" marginRight="1">
    <Icon
      as={FaArrowAltCircleLeft}
      onClick={prev}
      fontSize="2xl"
      cursor="pointer"
      color="gray.400"
    />
  </Flex>
);

const RightArrow = ({ next }) => (
  <Flex justifyContent="center" alignItems="center" marginLeft="1">
    <Icon
      as={FaArrowAltCircleRight}
      onClick={next}
      fontSize="2xl"
      cursor="pointer"
      color="gray.400"
    />
  </Flex>
);

export default function ImageSrollbar({ data }) {
  return (
    <Box p="4">
      <AliceCarousel
        buttonsDisabled
        dotsDisabled
        responsive={{
          0: { items: 1 },
          768: { items: 3 },
          1024: { items: 5 },
        }}
        renderPrevButton={({ isDisabled, prev }) => (
          <LeftArrow prev={prev} disabled={isDisabled} />
        )}
        renderNextButton={({ isDisabled, next }) => (
          <RightArrow next={next} disabled={isDisabled} />
        )}
      >
        {data.map((item) => (
          <Box
            key={item.id}
            minWidth="300px"
            p="1"
            display="flex"
            justifyContent="center"
          >
            <Box
              width="100%"
              height="100%"
              borderRadius="lg"
              overflow="hidden"
              boxShadow="md"
              border="1px solid"
              borderColor="gray.300"
            >
              <img
                src={item.url}
                alt="Image"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
          </Box>
        ))}
      </AliceCarousel>
    </Box>
  );
}
