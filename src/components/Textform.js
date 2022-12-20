import React ,{useState} from 'react'


export default function Textform(props) {
  const handleClick=()=>{
    console.log("upper clickes"+text)
    let newtext=text.toLocaleUpperCase( )
    settext(newtext)
    props.showalert("converted to upper","success")
  }

  const handleClick2=()=>{
    console.log("upper clickes"+text)
    let newtext2=text.toLocaleLowerCase( )
    settext(newtext2)
  }

  const handleOnChange=(event)=>{
    console.log("on change")
    settext(event.target.value);
  }

  const copyh=()=>{
    console.log("I am copy");
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);

    
  }


  const extra=()=>{
    console.log("extra");
    var newtext=text.split(/[ ]+/)
    settext(newtext.join( " "))

    
  }


  const tonum=()=>{
    let trim=(text)
    let a = text.trim();
    // Number(num)
    console.log(a)
    console.log(trim)

    // console.log(typeof Number(quantity));
  }

  const [text, settext] = useState('');
  // settext('new text here');
  return (
    <>
    <div className='container' style={{color:  props.mode==='light'?'black':'white'}}>
        <h1>{props.heading} </h1>
        
  {/* <label for="myBox" class="form-label">Example textarea</label> */}
  <div className='mb-10'>
  <textarea className="form-control" value={text} style={{backgroundColor:  props.mode==='light'?'white':'#042743', color:  props.mode==='light'?'black':'white'  }} onChange={handleOnChange} id="myBox" rows="9"></textarea>
  </div>
  <button className="btn btn-primary mx-2" onClick={handleClick}>convert to Uppercase</button>
  
  <button className="btn btn-primary" onClick={handleClick2}>convert to lowercase</button>

  <button className="btn btn-primary" onClick={tonum}>convert to integer</button>


  <button className="btn btn-primary" onClick={copyh}>copy text</button>

  <button className="btn btn-primary" onClick={extra}>remove spaces</button>

</div>

<div className="container my-2" style={{color:  props.mode==='light'?'black':'white'}}>
  <h1>your text summary </h1>

  <p>
    {text.split(" ").length} wored are here  {text.length}
  </p>
  <p>
    {0.08 *text.split(" ").length }minutes to read
  </p>
  <h2>
    preview
  </h2>
      <p>
        {text.length>0?text:"enter your text here"}
      </p>





    
</div>
</>



    
  )
}
