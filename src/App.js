import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.body.style.color = "white";
      document.getElementById("mode").innerHTML = "Disable Dark Mode";
      document.getElementById("myBox").style.backgroundColor = "#042743";
      document.getElementById("myBox").style.color = "white";
      let elems = document.querySelectorAll(".btn");
      let index = 0,
        length = elems.length;
      for (; index < length; index++) {
        elems[index].style.backgroundColor = "#0d6efd";
        elems[index].style.color = "white";
      }
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Dark mode has been Disabled", "success");
      document.body.style.color = "black";
      document.getElementById("mode").innerHTML = "Enable Dark Mode";
      document.getElementById("myBox").style.backgroundColor = "white";
      document.getElementById("myBox").style.color = "black";
      let elems = document.querySelectorAll(".btn");
      let index = 0,
        length = elems.length;
      for (; index < length; index++) {
        elems[index].style.backgroundColor = "#212529";
        elems[index].style.color = "white";
      }
    }
  };
  const toggleGreenMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "green";
      showAlert("Green mode has been enabled", "success");
      document.body.style.color = "white";
      document.getElementById("mode2").innerHTML = "Disable Green Mode";
      document.getElementById("myBox").style.backgroundColor = "green";
      document.getElementById("myBox").style.color = "white";
      let elems = document.querySelectorAll(".btn");
      let index = 0,
        length = elems.length;
      for (; index < length; index++) {
        elems[index].style.backgroundColor = "#198754";
        elems[index].style.color = "white";
      }
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Green mode has been disabled", "success");
      document.body.style.color = "black";
      document.getElementById("mode2").innerHTML = "Enable Green Mode";
      document.getElementById("myBox").style.backgroundColor = "white";
      document.getElementById("myBox").style.color = "black";
      let elems = document.querySelectorAll(".btn");
      let index = 0,
        length = elems.length;
      for (; index < length; index++) {
        elems[index].style.backgroundColor = "#212529";
        elems[index].style.color = "white";
      }
    }
  };
  return (
    <>
      <BrowserRouter>
        <Navbar
          title="TextUtils"
          mode={mode}
          toggleMode={toggleMode}
          toggleGreenMode={toggleGreenMode}
        />
        <Alert alert={alert} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <TextForm
                heading="Enter text to analyze"
                mode={mode}
                showAlert={showAlert}
              />
            }
          />
          <Route exact path="/about" element={<About mode={mode} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
