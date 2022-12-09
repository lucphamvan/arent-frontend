import { Center, Heading, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
    return (
        <Center h="100vh" flexDir="column">
            <Heading color="#FFA832">500 | Error</Heading>
            <Link fontWeight="bold" color="#FFA832" as={NavLink} to="/">
                Back to HomePage
            </Link>
        </Center>
    );
};

export default ErrorPage;
