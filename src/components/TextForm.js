import React, { useState } from "react";

export default function TextForm(props) {
  const removeExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed!", "success");
  };
  const copyText = () => {
    navigator.clipboard.writeText(text);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to Clipboard!", "success");
  };
  const clearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  };
  const uppercase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };
  const lowercase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h1 className="mb-4">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
         <button
                disabled ={text.length === 0}
                className="btn btn-dark my-1 mx-1"
                onClick={uppercase}
              >
               Convert to Uppercase
              </button>
              <button
                disabled ={text.length === 0}
                className="btn btn-dark my-1 mx-1"
                onClick={lowercase}
              >
                Convert to Lowercase
              </button>
              <button
                disabled ={text.length === 0}
                className="btn btn-dark my-1 mx-1"
                onClick={clearText}
              >
                Clear Text
              </button>
              <button
                disabled ={text.length === 0}
                className="btn btn-dark my-1 mx-1"
                onClick={copyText}
              >
                Copy Text
              </button>
              <button
                disabled ={text.length === 0}
                className="btn btn-dark my-1 mx-1"
                onClick={removeExtraSpaces}
              >
                Remove Extra Spaces
              </button>
          </div>
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>
          No of words:{" "}
          <b>
            {text.length > 0 ? text.trimEnd().split(" ").length : "0"} words
          </b>
          <br />
          No of characters: <b>{text.length} characters</b>
          <br />
          Reading time:{" "}
          <b>
            {text.length > 0 ? 0.008 * text.split(" ").length : "0"} minutes
          </b>
        </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Nothing to preview!"}
        </p>
      </div>
    </>
  );
}
