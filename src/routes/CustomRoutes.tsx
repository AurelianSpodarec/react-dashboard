import { useRoutes } from "react-router-dom";

import NotFound from "views/pages/NotFound";
import Home from "views/pages/Home";
import Users from "views/pages/Users/Users";

function CustomRoutes() {
    let routes = useRoutes([
        {
            path: "*",
            element: <NotFound />
        },
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/users",
            element: <Users />
        }
    ]);

    return routes;
}

export default CustomRoutes;