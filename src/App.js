
import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
//import About from './Components/About'; 

{/*import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";*/}


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (massage, type) => {
    setAlert({
      msg: massage,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggelMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been enabled", "success");
      document.title = `TextUtils - Dark Mode`;

      //setInterval(() => {
      //  document.title = "this is fake news"
      //}, 2000);
      //setInterval(() => {
      //  document.title="Hyy Not Fake news plzz look"
      //}, 1500);
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success");
      document.title = `TextUtils - Light Mode`;
    }
  }
  return (
    <>
      {/*<Navbar title="TextUtils" aboutText="About uS" />*/}
      {/*<Navbar/>*/}
      {/*<Router>*/}
        {<Navbar title="TextUtils" mode={mode} toggelMode={toggelMode} />}

        <Alert alert={alert} />

        <div className="container mb-3">

          {/*<Switch>
            {/*<Route exact path="/about">
              <About />
            </Route>*/}
            {/*<Route exact path="/">*/}
              {<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />}
            {/*</Route>
          </Switch>
          
          {/*</Router>*/}
      </div>
    </>
  );
}

export default App;
