"use client"
import  { useState } from "react";


export default function Home() {

  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(result));
      } catch (error) {
        setResult('Error');
      }
    } 
    else if (value === 'C') {
      setResult('');
    } else {
      setResult(result + value);
    }
  };

 return(

  <section className="flex justify-center align-middle h-auto mt-10">
    <div className="calculator">

    <h1 className="font-bold">Calculator App</h1>

    <div className="input-text w-80 my-2">
        <input type="text" className="block w-full rounded-md border-2 border-black py-3 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
         value={result} readOnly />
      </div>
      <div className=" w-80 p-2 flex justify-between align-middle border-t-2 border-x-2 border-black">
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button className="bg-pink-500" onClick={() => handleClick('+')}>+</button>
      </div>
      <div className=" w-80 p-2 flex justify-between align-middle  border-x-2 border-black">
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button className="bg-yellow-500" onClick={() => handleClick('-')}>-</button>
      </div>
      <div className=" w-80 p-2 flex justify-between align-middle  border-x-2 border-black">
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button className="bg-blue-500" onClick={() => handleClick('*')}>*</button>
      </div>
      <div className=" w-80 p-2 flex justify-between align-middle  border-x-2 border-black">
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button className="bg-red-500" onClick={() => handleClick('=')}>=</button>
        <button className="bg-gray-500" onClick={() => handleClick('/')}>/</button>
      </div>
      <div className=" w-80 p-2  border-b-2 border-x-2 border-black">
        <button className="bg-green-500" onClick={() => handleClick('C')}>C</button>
      </div>
    </div>
  </section>
 ) 
}
