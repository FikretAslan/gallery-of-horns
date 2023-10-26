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
      <DropDown />
      <Footer />
      <Gallery BeastData={BeastData} handleShowModal={handleShowModal} />
      {showModal && <SelectedBeast shownBeast={shownBeast} />}
    </div>
  );
  function DropDown() {
    const [hornChoice, setHornChoice] = useState(false);
    return (
      <div>
        <button onClick={() => setHornChoice(!hornChoice)}>
          Toggle Dropdown
        </button>
        {hornChoice && (
          <form>
            <label>
              Filter by # of horns:
              <select>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </label>
          </form>
        )}
      </div>
    );
  }
}

export default App;
