import { BrowserRouter } from "react-router-dom";
import { Router } from "./common/components";

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}
