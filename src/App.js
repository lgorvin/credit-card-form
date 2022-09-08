import React from "react";
import { useMediaQuery } from "react-responsive";
import Card from "./components/Card";
import CardMobile from "./components/CardMobile";

function App() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1100px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1100px)" });
  return (
    <div>
      {isDesktopOrLaptop && <Card />}
      {isTabletOrMobile && <CardMobile />}
    </div>
  );
}

export default App;
