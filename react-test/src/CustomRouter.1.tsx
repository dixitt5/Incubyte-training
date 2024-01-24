import { useState } from "react";
import Home from "./pages/Home";

export const CustomRouter = () => {
  const [route, setRoute] = useState<string>("home");
  return <div>{route === "home" ? <Home /> : <Details />}</div>;
};
