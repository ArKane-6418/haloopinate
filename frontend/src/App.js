import React, { useEffect, useState } from "react";
import "./App.css";

const endpoint = 'http://localhost:5000/generate';

function App() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [output, setOutput] = useState(null);
  const [awaitingOutput, setAwaitingOutput] = useState(false);

  // Send to backend for processing.
  const handleSubmit = (event) => {
    event.preventDefault();
    // Frontend rejection if the image is still being processed.
    if (awaitingOutput) {
      return;
    }
    console.log("Image submitted:", image);
    setAwaitingOutput(true);
    fetchImage();
  };

  // Update the image preview.
  const handleFileChange = (event) => {
    if (event.target.files.length === 0) {
      return;
    }
    setImage(event.target.files[0]);
    // Create a preview of the uploaded image.
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  // Fetch the image from the backend.
  const fetchImage = async () => {
    // Backend rejection if the image is still being processed.
    if (awaitingOutput) {
      return;
    }
    if (!image) {
      setAwaitingOutput(false);
      return;
    }
    const formData = new FormData();
    formData.append("image", image);
    const res = await fetch(endpoint, {
      method: "POST",
      // mode: "no-cors",
      body: formData,
    });
    if (res.ok) {
      const imageBlob = await res.blob();
      const imageObjectURL = URL.createObjectURL(imageBlob);
      setOutput(imageObjectURL);
    }
    setAwaitingOutput(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <title>Haloopinate</title>
        <h1 className="text-shadow">Ha<span className="emphasis anim1">l</span><span className="emphasis anim2">o</span><span className="emphasis anim3">o</span><span className="emphasis anim4">p</span>inate</h1>
        <h2>A deep-dream looping GIF generator</h2>
      </header>
      <form onSubmit={handleSubmit} method="post" encType="multipart/form-data" action="http://localhost:5000/generate">
        <div className="image-io">
          <div className="image-input">
            <h3>Input</h3>
            <img className="input" src={preview ? preview : "https://via.placeholder.com/256"} alt="Input" />
          </div>
          <div style={{ "width": "2rem" }}></div>
          <div className="image-output">
            <h3>Output</h3>
            <img className="output" src={output ? output : "https://via.placeholder.com/256"} alt="Output" />
          </div>
        </div>
        <div>
          <h5 className="notification"></h5>
        </div>
        <input title="image" type="file" name="image" accept="image/png, image/jpg, image/jpeg" onChange={handleFileChange} required />
        <button type="submit">Generate!</button>
      </form>
      <footer className="App-footer">
        <div className="credits">
          © 2023 Joshua Ong, Alston Lo, Jamie Zhao
        </div>
        <div className="github-link">
          <a href="https://github.com/ArKane-6418/TreasureHacks3.5"><img className="github" src="logo-github.svg" alt="github"></img></a>
        </div>
      </footer>
    </div>
  );
}

export default App;