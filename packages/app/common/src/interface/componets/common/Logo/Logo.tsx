import * as React from 'react'
import './Logo.scss'


function Logo(props: any){
   return (
      <div block="logo" mix={props.mix}>
         <img elem="image" src={require('./logo.png')} alt="Герб города"/>
         <p elem="text">Общественная палата<br/> г.o. Черноголовка</p>
      </div> 
   )
}


export { Logo }