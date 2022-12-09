import { Center, Heading } from "@chakra-ui/react";
import { Layout } from "components";
import React from "react";
import { createBrowserRouter } from "react-router-dom";

const HomePage = React.lazy(() => import("pages/HomePage"));
const MyRecordPage = React.lazy(() => import("pages/MyRecordPage"));
const ColumnPage = React.lazy(() => import("pages/ColumnPage"));

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: (
            <Center h="100vh">
                <Heading color="#FFA832">Error</Heading>
            </Center>
        ),
        children: [
            {
                path: "",
                element: <HomePage />,
            },
            {
                path: "/my-record",
                element: <MyRecordPage />,
            },

            {
                path: "/column-page",
                element: <ColumnPage />,
            },
        ],
    },
    {
        path: "*",
        element: (
            <Center h="100vh">
                <Heading color="#FFA832">404 | Not Found Page</Heading>
            </Center>
        ),
    },
]);

export default router;
