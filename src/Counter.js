import React ,{useState}from 'react'


export default function Counter() {
    const[num,setNum]=useState(0);
    function Inc(){
        setNum(num+1)     
    }
    function Dec(){
        setNum(num-1)
       }
  return (
    <>
   
    <button onClick={Inc}> + </button>
    <div>{num}</div>
    <button onClick={Dec}> - </button>
    </>
  );
}
