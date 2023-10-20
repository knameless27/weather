import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Search from "./views/Search.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/search",
    element: <Search />,
  },
]);

export default router;
