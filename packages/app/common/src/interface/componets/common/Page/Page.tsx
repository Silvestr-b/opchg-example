import * as React from 'react'
import { Navbar } from '../../common/Navbar'
import { Footer } from '../../common/Footer'
import { Main } from '../../common/Main'
import './Page.scss'


function Page(props: any){
   return (
      <div block="page" mix={props.mix}>
         <Navbar mix={{ block: 'page', elem: 'navbar' }}/>
         <Main mix={{ block: 'page', elem: 'main' }}>
            {props.children}
         </Main>
         <Footer mix={{ block: 'page', elem: 'footer' }} />
      </div> 
   )
}


export { Page }