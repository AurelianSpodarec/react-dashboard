import { useRoutes } from "react-router-dom";

import NotFound from "views/pages/NotFound";
import Home from "views/pages/Home";
import UserIndex from "views/pages/User/UserIndex";
import UserView from "views/pages/User/UserView";

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
        },
        {
            path: "/user/:id",
            element: <UserView />
        }
    ]);

    return routes;
}

export default CustomRoutes;