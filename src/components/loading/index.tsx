import { Center, Spinner } from "@chakra-ui/react";

export const Loading = () => {
    return (
        <Center h="100vh">
            <Spinner w="30vh" h="30vh" color="#FF963C" />
        </Center>
    );
};
