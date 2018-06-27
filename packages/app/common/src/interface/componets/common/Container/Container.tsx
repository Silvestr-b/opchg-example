import * as React from 'react'
import './Container.scss'


function Container(props: any){
   return (
      <div block="container" mix={props.mix}>
         {props.children}
      </div> 
   )
}


export { Container }