import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import PokeDetails from "../pages/PokeDetails";
import ErrorPage from "../pages/ErrorPage";
import LayoutHeader from "../components/LayoutHeader";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to={'pokemons'} />
    },
    {
        path: 'pokemons',
        element: <LayoutHeader />,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: ':id',
                element: <PokeDetails />
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage />
    }
])