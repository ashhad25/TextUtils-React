import React, { useState } from "react";

export default function TextForm(props) {
  const sort = () => {
    let rep = text.split(" ");
    let text1 = rep.sort();
    let text2 = text1.join(' ');
    setText(text2.trimStart());
    props.showAlert("Words Sorted!","success");
  };
  const removeExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed!","success");
  }
  const copyText = () =>{
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard!","success");
  }
  const clearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!","success");
  };
  const uppercase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!","success");
  };
  const lowercase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!","success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
            <button className="btn btn-dark" onClick={uppercase}>
              Convert to Uppercase
            </button>
            <button className="btn btn-dark mx-2" onClick={lowercase}>
              Convert to Lowercase
            </button>
            <button className="btn btn-dark" onClick={sort}>
              Sort Words
            </button>
            <button className="btn btn-dark mx-2" onClick={clearText}>
              Clear Output
            </button>
            <button className="btn btn-dark" onClick={copyText}>
              Copy Text
            </button>
            <button className="btn btn-dark mx-2" onClick={removeExtraSpaces}>
              Remove Extra Spaces
            </button>
      </div>
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>
          No of words: <b>{text.length>0?text.trimEnd().split(" ").length:'0'} words</b>
          <br />
          No of characters: <b>{text.length} characters</b>
          <br />
          Reading time: <b>{0.008 * text.split(" ").length} minutes</b>
        </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter some text in the textbox above to analyze"}</p>
      </div>
    </>
  );
}
