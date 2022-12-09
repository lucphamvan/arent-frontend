import { Center, Heading, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <Center h="100vh" flexDir="column">
            <Heading color="#FFA832">404 | Not Found Page</Heading>
            <Link fontWeight="bold" color="#FFA832" as={NavLink} to="/">
                Back to HomePage
            </Link>
        </Center>
    );
};

export default NotFoundPage;
