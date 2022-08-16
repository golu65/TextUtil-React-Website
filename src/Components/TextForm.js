import React, {useState} from 'react'

export default function TextForm(props) {
    const handlUpClick = ()=>{
        //console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }

    const handlLoClick = ()=>{
        //console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }

    const handelCopy = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copy to Clipboard!", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces remove", "success");
    }

    const handlClClick = ()=>{
        //console.log("Uppercase was clicked" + text);
        let newText = '';
        setText(newText);
        props.showAlert("Text to clear!", "success");
    }

 

    const handelOnChange = (event)=>{
        //console.log("on change");
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <div>
                <h1>{props.heading}</h1>
                <div className="my-2">
              
                <textarea className="form-control" value={text}  onChange={handelOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handlUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handlLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handlClClick}>Clear List</button>
                <button className="btn btn-primary mx-1" onClick={handelCopy}>Copy Word</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Ex Spaces</button>
            </div>
        </div>

        <div className="container my-2" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something to preview it here"}</p>
        </div>
        </>
        
    )
}
