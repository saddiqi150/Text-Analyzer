import React, {useState} from 'react'



export default function TextForm(props) {
    const [text,setText]=useState('');
    //text="enter text fdfa" // wrong way.
    //setText("Enter text for changes is")
    // function handleUpClick(){
    //     console.log("Up Click Is Pressd");
    // }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Text Converted to Upper Case","success");
    }
    const handleClearClick=()=>{
        let newText='';
        setText(newText);
        props.showAlert("Text Cleard","warning");
    }
    const handleLowClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Text Converted to Upper Case","danger");
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const handleCopy=()=>{
        //   let text= document.getElementById("textBox");
        //   text.select();
         // navigator.clipboard.writeText(text.value);
          navigator.clipboard.writeText(text);
          props.showAlert("Text Copied","primary");
    }
    const handleExtraSpaces=()=>{
        let nexText=text.split(/[ ]+/);
        setText(nexText.join(" "));
    }
  return (
    <>
        <div style={{color:props.mode==='dark'?'white':'black'}} className="continer">
            <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea value={text} className="form-control" id="textBox" style={{backgroundColor:props.mode==='dark'?'grey':'white',
        color:props.mode==='dark'?'white':'black'}} onChange={handleOnChange} rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert To Upper Case</button>
        <button  className="btn btn-danger mx-2  my-1" onClick={handleLowClick}>Convert To Lower Case</button>
        <button disabled={text.length===0}  className="btn btn-success mx-2  my-1" onClick={handleClearClick}>Clear Text</button>
        <button disabled={text.length===0}  className="btn btn-success mx-2  my-1" onClick={speak}>speak</button>
        <button disabled={text.length===0}  className="btn btn-primary mx-2  my-1" onClick={handleCopy}>Copy</button>
        <button  disabled={text.length===0} className="btn btn-warning mx-2  my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-4" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>Your Text Summary.</h1>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} character.</p>
            <p>{0.008 *text.split(" ").filter((element)=>{return element.length!==0}).length} Mints Read.</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
    </>
  )
}
