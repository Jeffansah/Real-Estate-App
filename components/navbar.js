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
      pl={{ base: "4", md: "15" }}
      pr={{ base: "4", md: "15" }}
    >
      <Box fontSize="3xl" color="blue.400" fontWeight="bold" marginLeft="4">
        <Link href="/">
          <Box cursor="pointer" _hover={{ color: "blue.600" }}>
            Urban Hub
          </Box>
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
        <Flex alignItems="center" mt={{ base: "2", md: "0" }}>
          <NavLink href="/" icon={<FcHome />} label="Home" />
          <NavLink href="/search" icon={<BsSearch />} label="Search" />
          <NavLink
            href="/search?purpose=for-sale"
            icon={<FcAbout />}
            label="Buy Property"
          />
          <NavLink
            href="/search?purpose=for-rent"
            icon={<FiKey />}
            label="Rent Property"
          />
        </Flex>
      )}
    </Flex>
  );
};

const NavLink = ({ href, icon, label }) => (
  <Link href={href} passHref>
    <Box
      cursor="pointer"
      display="flex"
      alignItems="center"
      px="4"
      color="gray.600"
      _hover={{ color: "blue.600" }}
    >
      {icon}
      <Box ml="2">{label}</Box>
    </Box>
  </Link>
);

export default Navbar;
