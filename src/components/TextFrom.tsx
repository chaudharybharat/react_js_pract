import React,{useState} from 'react'



interface Props{
   heading:string
}

function TextFrom(props:Props) {
  const[text,setText] =useState('');
const handleUpclick=()=>{
  let newText=text.toUpperCase();
  setText(newText);
  console.log("Upload lcik");
}
const handleOnChange=(event)=>{
  console.log("Upload lcik");
  setText(event.target.value);
}
 
  return (
    <div>
    
<div className="mb-3">
  <h2>{props.heading}</h2>
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
  <textarea className="form-control" placeholder="Type here..." value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" aria-rowcount="3"></textarea>
</div>
<button className="btn btn-primary" onClick={handleUpclick}>Convert to Uppercase</button>
<button className="btn btn-secondary" onClick={()=>setText("")}>Clear</button>
    </div>
    
  )
}

export default TextFrom
