import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import BeastData from "./assets/BeastData.json";
import SelectedBeast from "./components/SelectedBeast";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [shownBeast, setShownBeast] = useState({});

  function handleShowModal(beast) {
    setShowModal(!showModal);
    setShownBeast(beast);
  }
  return (
    <div className="App">
      <Header />
      <Footer />
      <Gallery BeastData={BeastData} handleShowModal={handleShowModal} />
      {showModal && <SelectedBeast shownBeast={shownBeast} />}
    </div>
  );
}

export default App;
