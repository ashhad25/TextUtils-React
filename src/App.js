import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";
import Alert from "./components/Alert";

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

  const removeBodyClasses = () => {
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('text-dark');
    document.body.classList.remove('text-white');
    document.getElementById('myBox').classList.remove('bg-light');
    document.getElementById('myBox').classList.remove('bg-primary');
    document.getElementById('myBox').classList.remove('bg-success');
    document.getElementById('myBox').classList.remove('bg-dark');
    document.getElementById('myBox').classList.remove('bg-danger');
    document.getElementById('myBox').classList.remove('bg-warning');
    document.getElementById('myBox').classList.remove('text-dark');
    document.getElementById('myBox').classList.remove('text-white');
    let elems = document.querySelectorAll(".btn");
    let index = 0,
    length = elems.length;
      for (; index < length; index++) {
        elems[index].classList.remove('bg-light');
        elems[index].classList.remove('bg-dark');
        elems[index].classList.remove('bg-primary');
        elems[index].classList.remove('bg-success');
        elems[index].classList.remove('bg-danger');
        elems[index].classList.remove('bg-warning');
        elems[index].classList.remove('text-dark');
        elems[index].classList.remove('border-dark');
      }
  }
  const toggleMode = (cls) => {
    removeBodyClasses();
    if (cls === 'light') {
      document.getElementById('myBox').classList.add('text-dark');
    }
    else{
      if (cls === 'warning') {
        document.body.classList.add('bg-'+cls);
        document.body.classList.add('text-dark');
        document.getElementById('myBox').classList.add('bg-'+cls);
        document.getElementById('myBox').classList.add('text-dark');
      }
      else{
        document.getElementById('myBox').classList.add('bg-'+cls);
        document.body.classList.add('bg-'+cls);
        document.body.classList.add('text-white');
      document.getElementById('myBox').classList.add('text-white');
     }
    }
    if (mode === "light") {
      setMode("dark");
      showAlert(`${cls} mode is Enabled`,"success");
      let elems = document.querySelectorAll(".btn");
      let index = 0,
      length = elems.length;
      for (; index < length; index++) {
        if (cls === 'light') {
          elems[index].classList.add('bg-dark');
        }else{
          if (cls === 'warning') {
            elems[index].classList.add('bg-'+cls);
            elems[index].classList.add('text-dark');
            elems[index].classList.add('border-dark');
          }
          else{
            elems[index].classList.add('bg-'+cls);
          }
        }
      }
    } else {
      setMode("light");
      showAlert(`${cls} mode is Enabled`,"success");
      let elems = document.querySelectorAll(".btn");
      let index = 0,
      length = elems.length;
      for (; index < length; index++) {
        if (cls === 'light') {
          elems[index].classList.add('bg-dark');
        }else{
          if (cls === 'warning') {
            elems[index].classList.add('bg-'+cls);
            elems[index].classList.add('text-dark');
            elems[index].classList.add('border-dark');
          }
          else{
            elems[index].classList.add('bg-'+cls);
          }
        }
      }
    }
  };
  return (
    <>
        <Navbar
          title="TextUtils"
          mode={mode}
          toggleMode={toggleMode} 
        />
        <Alert alert={alert} />
          <TextForm
            heading="Try TextUtils- Word Counter, Character Counter, Remove Extra Spaces"
            mode={mode}
            showAlert={showAlert}
          />
    </>
  );
}

export default App;
