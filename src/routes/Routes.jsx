import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import GadgetCards from "../components/GadgetCards";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import GadgetDetails from "../pages/GadgetDetails";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: async () => {
                    const categoriesResponse = await fetch('/public/categories.json');
                    const categories = await categoriesResponse.json();
                    
                    const gadgetsResponse = await fetch('/public/gadgets.json');
                    const gadgets = await gadgetsResponse.json();
                    
                    return { categories, gadgets };
                },
                children: [
                    {
                        path: "/",
                        element: <GadgetCards />,
                    },
                    {
                        path: "/category/All",
                        element: <GadgetCards />,
                    },
                    {
                        path: '/category/:category',
                        element: <GadgetCards></GadgetCards>
                    }
                ]
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/gadget/:id',
                element: <GadgetDetails></GadgetDetails>,
                loader: ()=> fetch('/public/gadgets.json'),
            },
        ]
    },
]);

export default routes;
