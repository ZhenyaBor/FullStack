import { useRoutes } from "react-router-dom";
import { routes } from "config";

export const Router = () => {
  const result = useRoutes(routes);

  return result;
};
