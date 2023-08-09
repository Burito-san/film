import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App/App";
import { store } from "../redux/store";

import { Index } from "./App/Index";
import { Authorization } from "./App/authorization/Authorization";
import { FilmAbout } from "./App/FilmAbout/FilmAbout";
import { Search } from "./App/search/Search";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Index/>
            },
            {
                path: "/athorization",
                element: <Authorization/>,
            },
            {
                path: "/about",
                element: <FilmAbout/>
            },
            {
                path: "/search",
                element: <Search/>
            }

        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);
