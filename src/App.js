import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, {useState} from 'react';
import Balert from './components/Balert';

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




function App() {

  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (messege,type)=>{
    setAlert({
      msg : messege,
      type:type
    });

    setTimeout(()=>{
      setAlert(null);
    },1000)
  };

  const toggleMode =()=>{
      if(mode==='light'){
        setMode('dark');
        document.body.style.backgroundColor='#522dcd';
        showAlert('Dark Mode Enabled','success');
        document.title='- dark mode';
        // setInterval(()=>{
        //   document.title='- install text util';
        // },2000);
        // setInterval(()=>{
        //   document.title='- Test util here'
        // },1500);
        
      }else{
        setMode('light');
        document.body.style.backgroundColor='white';
        showAlert('Light Mode Enabled','success');
        document.title='- Light mode';
      }
  }
  return (
    // <Router>
    //   <Navbar title="Demo Site" mode={mode} toggleMode={toggleMode} homeLi="Home Page" aboutText="About Us"/>
    //   <Balert alert={alert}/> 
      
    //   <div className="container">
    //     <Routes>  
    //       {/* Routing paths and components */}
    //       <Route exact path='/about' element={<About />} />
    //       <Route exact path='/' element={<TextForm heading="Enter your text to analyse" showAlert={showAlert} mode={mode} />} />
    //     </Routes>
    //   </div> 
    // </Router>

    // <Router>
    // <Navbar title="Demo Site" mode={mode} toggleMode={toggleMode} homeLi="Home Page" aboutText="About Us"/>
    <>
    <Navbar title="Demo Site" mode={mode} toggleMode={toggleMode} homeLi="Home Page" aboutText="About Us"/>
    <Balert alert={alert}/> 
    
    <div className="container">
    <TextForm heading="Enter your text to analyse" showAlert={showAlert} mode={mode} />
      {/* <Routes>   */}
        {/* Routing paths and components */}
        {/* <Route exact path='/about' element={<About />} /> */}
        {/* <Route exact path='/' element={} /> */}
      {/* </Routes> */}
    </div> 
    </>
  // </Router>
  );
}

export default App;

// video 17 