import * as React from 'react'
import { Container } from '../Container'
import './Main.scss'


function Main(props: any) {
   const Tag = props.tag || 'main';

   return (
      <Tag block="main" mix={props.mix}>
         <Container mix={{ block: 'main', elem: 'container' }}>
            {props.children}
         </Container>
      </Tag> 
   )
}


export { Main }