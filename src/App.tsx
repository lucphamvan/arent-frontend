import { ChakraProvider, theme } from "@chakra-ui/react";
import { Loading } from "components";
import React, { useEffect } from "react";
import AppRouter from "router";

export const App = () => {
    /**
     * simuate we have a redux store to store authen state
     */
    useEffect(() => {
        //    dispatch(checkAuthenAction());
    }, []);

    return (
        <ChakraProvider theme={theme}>
            <React.Suspense fallback={<Loading />}>
                <AppRouter />
            </React.Suspense>
        </ChakraProvider>
    );
};
