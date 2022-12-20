
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
// import About from './components/About';
import Textform from './components/Textform';
// let na="naman"
import React,{useState} from 'react'
import Alert from './components/Alert';


function App() {

  const toggleMode=()=>{
    if(mode==='light')
    {
      setMode('dark')
      document.body.style.backgroundColor='#042743'
      showalert("dark mode is enabled","success")
    }
    else
    {
      setMode('light')
      document.body.style.backgroundColor= 'white'
      showalert("light mode is enabled","success")
    }
  }

  const [mode, setMode] = useState('light');
  const [alert, setalert] = useState(null)

  const showalert=(message,type)=>{
      setalert({
        msg:message,
        type:type

      })

      setTimeout(() => {
        setalert(null)
      }, 2000);
  }


  return (
    
    <>
    
      
      
<Navbar title="TextUtils" abouttext="About Us" mode={mode} toggleMode={toggleMode}/>
{/* <Navbar /> */}
<Alert alert={alert}/>
<div className="contanier my-8">
<Textform heading="Enter text to analyse" mode={mode} showalert={showalert}/>  
</div>

{/* <About/> */}
{/* <About></About> */}







</>
  );
}

export default App;
