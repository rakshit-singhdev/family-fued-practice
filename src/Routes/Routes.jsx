import { createBrowserRouter } from "react-router-dom";
import Host from "../pages/Host.jsx";
import App from "../App.jsx";
import Team from "../pages/Team.jsx";
import Modertor from "../pages/Modertor.jsx";

export const router = createBrowserRouter([{
    path: "/",
    element: <App />,
    children: [
        {
            index: true,
            element: <Host />,
        },
        {
            index: true,
            path: "team",
            element: <Team />,
        },
        {
            index: true,
            path: "admin",
            element: <Modertor />,
        }
    ],
}])