import { createBrowserRouter } from "react-router-dom";

import { MainLayout } from "../layouts/main";
import { ErrorPage } from "../pages/error-page";

import { HomePage } from "../pages/home-page";
import { FlightsPage, flightPageLoader } from "../pages/flights-page";
import { AboutPage } from "../pages/about-page";


export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <HomePage />
          },
          {
            path: "/about",
            element: <AboutPage />,
          },
          {
            path: "/flights/:from/:to",
            element: <FlightsPage />,
            loader: flightPageLoader,
          }

          // Fallback to 404
        //   {
        //     path: "*",
        //     element: <NotFoundPage />,
        //   },
        ],
      },
    ],
  },
]);
