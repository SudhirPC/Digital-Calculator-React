import React from 'react'
import { useState } from 'react';
export const Calculator = () => {
    const [result,setResult]= useState("")

  const handleclick=(e) => {

    setResult(result.concat(e.target.name));
   
  }
  const handledelete=()=>{
    setResult(result.splice(0, result.length-1))
  }
  const clear=()=>{
    setResult("")
  }
  const calculate=()=>{
    try{
      setResult(eval(result).toString())

    }catch(e){
      setResult("Syntax Error")
    }
  }
  return (
    <div className="container">
      <form>
        <input type="text" className="current-operand output"  value={result} />
      </form>
     <div className="buttons">
  <button className="ac span-two" onClick={clear}>AC</button>
  <button  onClick={handledelete}>Del</button>  
  <button name="/" onClick={handleclick}>&divide;</button> 
  <button name="7" onClick={handleclick}>7</button> 
  <button name="8" onClick={handleclick}>8</button>
  <button name="9" onClick={handleclick}>9</button>
  <button name="*" onClick={handleclick}>&times;</button>  
  <button name="6" onClick={handleclick}>6</button> 
  <button name="5" onClick={handleclick}>5</button> 
  <button name="4" onClick={handleclick}>4</button>
  <button name="-"onClick={handleclick}>-</button>
  <button name="3" onClick={handleclick}>3</button>  
  <button name="2" onClick={handleclick}>2</button> 
  <button name="1" onClick={handleclick}>1</button> 
  <button name="+" onClick={handleclick}>+</button> 
  <button name="0"onClick={handleclick}>0</button>
  <button name="."onClick={handleclick}>.</button>
  <button name="=" className="span-two"onClick={calculate}>=</button> 
     </div>
    </div>
  );
  
}

