import { Home, AddUser, DetailUser } from "../pages";
import { LMSLayout } from "../layouts";

export const routes = [
  {
    element: <LMSLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/:paramsId", element: <DetailUser /> },
      { path: "addUser", element: <AddUser /> },
    ],
  },
];
