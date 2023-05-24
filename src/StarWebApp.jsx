import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";

export const StarWebApp = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}

