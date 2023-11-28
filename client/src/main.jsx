import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home.jsx";
import EarlyAccess from "./pages/EarlyAccess.jsx";
import App from "./App.jsx";
import Error from "./pages/Error.jsx";
import VerifyEmail from "./pages/VerifyEmail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/earlyaccess",
        element: <EarlyAccess />,
      },
    ],
  },
  {
    path: "/verify-email/:token",
    element: <VerifyEmail />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
