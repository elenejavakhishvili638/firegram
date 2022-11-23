import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import "./uploadForm.css";

function UploadForm() {
  const [file, setFile] = useState();
  const [error, setError] = useState();
  const fileTypes = ["image/png", "image/jpeg"];

  const handleChange = (event) => {
    const picture = event.target.files[0];
    // const type = event.target.files[0].type;

    if (picture && fileTypes.includes(picture.type)) {
      setFile(picture);
      setError("");
    } else {
      setFile();
      setError("Please select an image file (png or jpeg)");
    }
  };

  return (
    <div>
      <form className="form">
        <input className="file" type="file" onChange={handleChange} />
        <span className="addPicture">+</span>
        <div className="result">
          {error && <div className="error">{error}</div>}
        </div>
        <div>{file && file.name}</div>
        {file && <ProgressBar file={file} setFile={setFile} />}
      </form>
    </div>
  );
}

export default UploadForm;
