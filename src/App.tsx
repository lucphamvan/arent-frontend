import { ChakraProvider, theme, Progress } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import router from "router";

export const App = () => {
    return (
        <ChakraProvider theme={theme}>
            <RouterProvider router={router} fallbackElement={<Progress />} />
        </ChakraProvider>
    );
};
