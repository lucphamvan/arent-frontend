import { Box, Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";

const Layout = () => {
    return (
        <Flex minH="100vh" flexDir="column">
            <Header />
            <Box flexGrow={1}>
                <Outlet />
            </Box>
            <Footer />
        </Flex>
    );
};
export default Layout;
