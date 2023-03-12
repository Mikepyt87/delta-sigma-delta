import "./App.css";
// import image1 from "./assets/marinesMemorialHotel1.jpg";
// import image2 from "./assets/deltSigParty1.jpg";
// import image3 from "./assets/deltSigParty2.jpg";
// import image4 from "./assets/deltSigParty3.jpg";
// import image5 from "./assets/deltSigPinOnShirt.jpg";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import { useState } from "react";
import Carousel from "./components/Carousel";

function App(): JSX.Element {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    console.log(`Search query: ${query}`);
  };
  return (
    <>
      <Header onSearch={handleSearch} />
      <NavBar />
      <Carousel />
    </>
  );
}

export default App;
