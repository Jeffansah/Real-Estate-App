import Head from "next/head";
import { Box } from "@chakra-ui/react";
import Navbar from "./navbar";
import Footer from "./footer";

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Urban Hub</title>
    </Head>
    <Box maxWidth="2280px" m="auto">
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </Box>
  </>
);

export default Layout;
