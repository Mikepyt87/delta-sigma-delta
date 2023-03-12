import NavBar from "./components/NavBar";
import Header from "./components/Header";
import { useState } from "react";
import Carousel from "./components/Carousel";

const image1 = require("./assets/marinesMemorialHotel.png");
const image2 = require("./assets/deltSigParty1.png");
const image3 = require("./assets/deltSigParty2.png");
const image4 = require("./assets/deltSigParty3.png");
const image5 = require("./assets/deltSigPinOnShirt.png");

const slides = [
  {
    image: image1,
    title: "Marines Memorial Hotel",
    subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    interval: 1500,
  },
  {
    image: image2,
    title: "Delta Sigma Phi Party",
    subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    interval: 500,
  },
  {
    image: image3,
    title: "Delta Sigma Phi Party",
    subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    interval: 2500,
  },
  {
    image: image4,
    title: "Delta Sigma Phi Party",
    subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    interval: 2000,
  },
  {
    image: image5,
    title: "Delta Sigma Phi Pin",
    subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    interval: 3000,
  },
];

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
      <Carousel slides={slides} />
    </>
  );
}

export default App;
