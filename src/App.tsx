import "./App.css";
import ImageSlider from "./components/ImageSlider";
import Navbar from "./components/Navbar";
import image1 from "./assets/marinesMemorialHotel1.jpg";
import image2 from "./assets/deltSigParty1.jpg";
import image3 from "./assets/deltSigParty2.jpg";
import image4 from "./assets/deltSigPinOnShirt.jpg";

const images = [
  {
    src: image1,
    scale: 1,
    objectPositionX: 0,
    objectPositionY: 0,
  },
  {
    src: image2,
    scale: 1,
    objectPositionX: 0,
    objectPositionY: 0,
  },
  {
    src: image3,
    scale: 1,
    objectPositionX: 0,
    objectPositionY: 0,
  },
  {
    src: image4,
    scale: 1,
    objectPositionX: 0,
    objectPositionY: 0,
  },
];
function App() {
  return (
    <>
      <Navbar />
      <ImageSlider images={images} autoCycle={true} />
    </>
  );
}

export default App;
