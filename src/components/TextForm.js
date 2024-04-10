import React, { useState } from 'react'

export default function TextForm(props) {

    const upper=()=>{
        let n=text.toUpperCase();
        setText(n);
        props.showalert("character converted to uppercase","success")
    }

    const lower=()=>{
      let n=text.toLowerCase();
      setText(n);
      props.showalert("character converted to lowercase","success")
  }

  const clear=()=> {
    let n='';
    setText(n);
    props.showalert("Text area got clear ","success")
  }

    const handle=(event)=>{
          setText(event.target.value);
    }

    const[text,setText] =useState("");
  return (
    <>
    <div className="container my-3"  style={{color : props.mode=== 'dark' ? 'white':'black' }}>
            <h1>{props.heading}</h1>
            <div className="mb-3 mx-4">
            <textarea className="form-control" value={text} onChange={handle} style={{backgroundColor: props.mode=== 'dark' ? 'grey':'white',
            color: props.mode=== 'dark' ? 'white':'black' }} id="myBox" rows="7"></textarea>
            </div>
            <button className="btn btn-primary mx-3 my-2"  onClick={upper}>Convert to Upercase</button>
            <button className="btn btn-primary mx-3 my-2"  onClick={lower}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-3 my-2"  onClick={clear}>Clear Text</button>
    </div>
    <div className='container my-3' style={{color : props.mode=== 'dark' ? 'white':'black' }}>
      <h2 >Text Summary</h2>
      <p>{text.split(' ').filter( (element)=>{ return element.length!==0}).length} words and {text.length} character</p>
      <p>{0.008*text.split('').filter( (element)=>{ return element.length!==0}).length}minutes</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
