import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
   BrowserRouter as Router,
   Routes,
   Route
} from 'react-router-dom';

function App() {

  const [mode, setMode]=useState('light');
  const [alert, setAlert]=useState(null);
     
  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
    ;
  }

  function clearBodyBgColor() {
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('dark');
    document.body.classList.remove('light');
  }
  const toggleMode=(cls)=>{
    console.log(cls);
    clearBodyBgColor();
    document.body.classList.add('bg-'+cls);
       if(mode==='light'){
        setMode('dark');
         document.body.style.backgroundColor='grey';
         showAlert("Dark Mode Has Been Enabled", "success");
         document.title='TextAnalyzer - Dark Mode';
         setInterval(() => {
          document.title='TextAnalyzer is amazing Mode.';
         }, 2000);
         setInterval(() => {
          document.title='Install Text Utils Now';
         }, 1500);

       }else{
        setMode('light');
        document.body.style.backgroundColor='white';
        showAlert("Light Mode Has Been Enabled", "success");
        document.title='TextAnalyzer - Light Mode';
       }
  }
  return (
    <>
    <Router>
      <Navbar title="Text-Analyzer" aboutText="About Us"  mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className='container my-3'>
      
        <Routes>
           <Route path="/about" element={<About/>} />
          <Route path='/' element={<TextForm  showAlert={showAlert} heading="Enter The Text To Analyze below" mode={mode} />} />
        </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
