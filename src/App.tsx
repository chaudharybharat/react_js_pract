import { useState } from 'react'
import ListGroup from "./components/ListGroup";
import './App.css'
import Alert from './components/Alert';
import Button from './components/Button';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';

function App() {
  let items =[
    'New York',
    'San Francisco',
    'Tokyo',
    'London',
    'Paris',
    'India',
    'US'
 ];

 const handleSelectItem=(item:string) =>{
  console.log(item);
 }
 
  return (
    <>
    
   <Navbar title='TextUtile'/>
   <div className='container'>  <TextFrom heading='Enter the text to analyze' /></div>
   
    </>
    // <div>
    //   <ListGroup heading='Contry List' items={items} onSelectItem={handleSelectItem}/>
    //    <Alert> Hello<h1>sg</h1> <span>Worlgd</span></Alert>
    //    <Button color='primary' OnClick={()=>console.log("click here")}>Button</Button>
    // </div> 
  )
}

export default App
