import { useState } from 'react'
import ListGroup from "./components/ListGroup";
import './App.css'
import Alert from './components/Alert';
import Button from './components/Button';

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
    <div>
      <ListGroup heading='Contry List' items={items} onSelectItem={handleSelectItem}/>
       <Alert> Hello<h1>sg</h1> <span>Worlgd</span></Alert>
       <Button color='primary' OnClick={()=>console.log("click here")}>Button</Button>
    </div> 
  )
}

export default App
