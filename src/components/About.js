import React from "react";

export default function About(props) {
  let myStyle ={
    color: props.mode === 'dark'? 'white' : 'black',
    backgroundColor: props.mode === 'dark'? 'rgb(38 82 114)' : 'white',
    border: '2px solid',
    borderColor: props.mode === 'dark'? 'white' : 'black',
    borderRadius: '20px',
    fontSize: '20px'
  }

  return (
    <div className="container" style={{color: props.mode === 'dark'? 'white' : 'black'}}>
      <h1 className="mb-4 pt-2">About Us</h1>
      <div id="accordionExample" style={myStyle}>
        <div className=" p-2">
          <h2  id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
            Analyze Your Text
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
            <strong>Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or</strong>
            </div>
          </div>
        </div>
        <div className="p-2">
          <h2  id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              Free To Use
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
            <strong>TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.</strong>
            </div>
          </div>
        </div>
        <div className="p-2">
          <h2 id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              Browser Compatible
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
            <strong>This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
