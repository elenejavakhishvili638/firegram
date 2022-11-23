import { useState } from "react";
import "./App.css";
import ImageGrid from "./components/ImageGrid";
import Title from "./components/Title.jsx";
import UploadForm from "./components/UploadForm";
import Modal from "./components/Modal";

function App() {
  const [selectedImg, setSelectedImg] = useState();
  const [modal, setModal] = useState(false);

  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} setModal={setModal} />
      <Modal selectedImg={selectedImg} modal={modal} setModal={setModal} />
    </div>
  );
}

export default App;
