import { Layout } from "components";
import React, { useMemo, useState } from "react";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

const HomePage = React.lazy(() => import("pages/HomePage"));
const MyRecordPage = React.lazy(() => import("pages/MyRecordPage"));
const ColumnPage = React.lazy(() => import("pages/ColumnPage"));
const NotFoundPage = React.lazy(() => import("pages/NotFoundPage"));
const ErrorPage = React.lazy(() => import("pages/ErrorPage"));

const AppRouter = () => {
    // assume this is authenState from redux store
    const [authenState] = useState(true);

    const router = useMemo(
        () =>
            createBrowserRouter([
                {
                    path: "/",
                    element: <Layout />,
                    errorElement: <ErrorPage />,
                    children: [
                        {
                            path: "",
                            element: authenState ? <HomePage /> : <Navigate to="/column-page" />,
                        },
                        {
                            path: "/my-record",
                            element: authenState ? <MyRecordPage /> : <Navigate to="/column-page" />,
                        },

                        {
                            path: "/column-page",
                            element: <ColumnPage />,
                        },
                    ],
                },
                {
                    path: "*",
                    element: <NotFoundPage />,
                },
            ]),
        [authenState]
    );
    return <RouterProvider router={router} />;
};

export default AppRouter;
