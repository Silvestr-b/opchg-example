import * as React from 'react'
import { Container } from '../Container'
import { Copywrite } from '../Copywrite'
import './Footer.scss'


function Footer(props: any){
   return (
      <div block="footer" mix={props.mix}>
         <Container mix={{ block: 'footer', elem: 'container' }}>
            <Copywrite />
         </Container>
      </div> 
   )
}


export { Footer }