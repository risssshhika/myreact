import React from 'react'

function Test(props){
    return(
        <>
        <img src={props.url} width={200}/>
        <h2>{props.name}</h2>
        </>
    );
}
export default function PropsSample() {
  return (
   <>
   <Test url='https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg' name='jewellery'/>
   <Test url='https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg' name='electronics'/>
   <Test url='https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg' name='electronics'/>
   </>
  )
}
