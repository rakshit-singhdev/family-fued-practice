import { createBrowserRouter } from "react-router-dom";
import Host from "../pages/Host.jsx";
import App from "../App.jsx";
import Team from "../pages/Team.jsx";

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
        }
    ],
}])