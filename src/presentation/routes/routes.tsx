import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "../pages/error-page/error-page.component";
import App from "../../App";

export const router = createBrowserRouter([
  {
    path: "",
    // element: <div>Hello world!</div>,
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "catalogue",
        element: <div>CATALOGUE</div>,
        errorElement: <ErrorPage />
      },
      {
        path: ":product",
        // element: <Defect />,
        element: <div>CATALOGUE OF DEFECTS BY PRODUCTS</div>
      },
      {
        path: "defect/:defectId",
        // element: <Defect />,
        element: <div>DEFECT ELEMENT</div>
      },
    ],
  },
]);
