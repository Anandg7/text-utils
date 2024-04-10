
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link
  } from "react-router-dom";


function App() {
  const[mode,setmode]= useState('light');

  const[btn,setbtn]=useState('Enable dark mode');

  const[alert,setalert]=useState(null);
  
  const showalert = (message,type)=> {
      setalert({
        msg:message,
        type:type
      })
      setTimeout( ()=>{
      setalert(null);
      },2000);
  }
const toggleMode = ()=> {
  if(mode==='light'){ 
  setmode('dark')
  setbtn('Enable light Mode')
  document.body.style.backgroundColor='grey'
  showalert("Dark mode Enabled","success")
  document.title= 'Textutils-dark mode' 
  }
  else{
   setmode('light')
   setbtn('Enable dark mode')
   document.body.style.backgroundColor='white'
   showalert("light mode Enabled","success")
   document.title= 'Textutils-light mode' 
  }
}


  return (
    <>
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} btn={btn}/>
    <Alert alert={alert}/>
    <Switch>
        <Route exact path="/about">
        <About mode={mode}/>
        </Route>
        <Route exact path="/">
        <TextForm showalert={showalert} heading="enter the text here"  mode={mode} />
        </Route>
    </Switch>
    </Router>
    </>
  );
}

export default App;
