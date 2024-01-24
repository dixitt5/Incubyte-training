import { useState } from "react";
import Home from "./pages/Home";
import Details from "./components/Details";

const CustomRouter = () => {
  const [route, setRoute] = useState<string>("home");
  return (
    <div>{route === "home" ? <Home setRoute={setRoute} /> : <Details />}</div>
  );
};

export default CustomRouter;
