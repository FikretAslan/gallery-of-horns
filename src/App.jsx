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
  const [horns, setHorns] = useState("");

  function handleShowModal(beast) {
    setShowModal(!showModal);
    setShownBeast(beast);
  }
  function handleFilter(event) {
    setHorns(event.target.value);
  }
  return (
    <div className="App">
      <Header />
      <select onChange={handleFilter}>
        <option value="">All</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <Gallery
        BeastData={BeastData}
        handleShowModal={handleShowModal}
        horns={horns}
      />
      {showModal && <SelectedBeast shownBeast={shownBeast} />}
      <Footer />
    </div>
  );
}

export default App;
