import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "../pages/error-page/error-page.component";
import { CataloguePage } from "../pages/catalogue/catalogue.page";
import App from "../../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "catalogue",
        element: <CataloguePage />,
        errorElement: <ErrorPage />,
      },

    ]
  },
]);
