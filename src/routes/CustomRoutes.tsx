import { useRoutes } from "react-router-dom";

import NotFound from "views/pages/NotFound";
import Home from "views/pages/Home";
import UserIndex from "views/pages/User/UserIndex";

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
            element: <UserIndex />
        }
    ]);

    return routes;
}

export default CustomRoutes;