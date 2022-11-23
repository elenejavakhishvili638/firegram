import React, { useState } from "react";
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
      <form>
        <input type="file" onChange={handleChange} />
        <div className="result">
          {error && <div className="error">{error}</div>}
        </div>
        <div>{file && file.name}</div>
      </form>
    </div>
  );
}

export default UploadForm;
