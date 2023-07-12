import Link from "next/link";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Flex,
  Box,
  Spacer,
  useMediaQuery,
} from "@chakra-ui/react";
import { FcMenu, FcHome, FcAbout } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiKey } from "react-icons/fi";

const Navbar = () => {
  const [isMobile] = useMediaQuery("(max-width: 1024px)");

  return (
    <Flex
      p="2"
      borderBottom="1px"
      borderColor="gray.100"
      paddingLeft="15"
      paddingRight="15"
    >
      <Box fontSize="3xl" color="blue.400" fontWeight="bold">
        <Link href="/">
          <Box paddingLeft="15">Urban Hub</Box>
        </Link>
      </Box>
      <Spacer />
      {isMobile ? (
        <Box>
          <Menu>
            <MenuButton
              as={IconButton}
              icon={<FcMenu />}
              variant="outline"
              color="red.400"
            />
            <MenuList>
              <Link href="/" passHref>
                <MenuItem icon={<FcHome />}>Home</MenuItem>
              </Link>
              <Link href="/search" passHref>
                <MenuItem icon={<BsSearch />}>Search</MenuItem>
              </Link>
              <Link href="/search?purpose=for-sale" passHref>
                <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
              </Link>
              <Link href="/search?purpose=for-rent" passHref>
                <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </Box>
      ) : (
        <Flex marginTop="2.5" marginRight="25">
          <Link href="/" passHref>
            <Box
              display="flex"
              alignItems="center"
              px="4"
              color="gray.600"
              _hover={{ color: "blue.600" }}
            >
              <FcHome />
              <Box ml="2">Home</Box>
            </Box>
          </Link>
          <Link href="/search" passHref>
            <Box
              display="flex"
              alignItems="center"
              px="4"
              color="gray.600"
              _hover={{ color: "blue.600" }}
            >
              <BsSearch />
              <Box ml="2">Search</Box>
            </Box>
          </Link>
          <Link href="/search?purpose=for-sale" passHref>
            <Box
              display="flex"
              alignItems="center"
              px="4"
              color="gray.600"
              _hover={{ color: "blue.600" }}
            >
              <FcAbout />
              <Box ml="2">Buy Property</Box>
            </Box>
          </Link>
          <Link href="/search?purpose=for-rent" passHref>
            <Box
              display="flex"
              alignItems="center"
              px="4"
              color="gray.600"
              _hover={{ color: "blue.600" }}
            >
              <FiKey />
              <Box ml="2">Rent Property</Box>
            </Box>
          </Link>
        </Flex>
      )}
    </Flex>
  );
};

export default Navbar;
