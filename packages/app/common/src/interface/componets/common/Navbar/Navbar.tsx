import * as React from 'react'
import { Container } from '../Container'
import { Logo } from '../Logo'
import { NavigationMenu } from '../NavigationMenu'
import './Navbar.scss'


class Navbar extends React.Component<any, any> {
   public state = {
      isMenuHidden: true
   }

   expandMenuHandler = () => {
      this.setState({
         isMenuHidden: !this.state.isMenuHidden
      })
   }

   render(){
      const Tag = this.props.tag || 'header';
      
      return (
         <Tag block="navbar" mix={this.props.mix}>
            <Container mix={{ block: 'navbar', elem: 'container' }} >
               <Logo mix={{ block: 'navbar', elem: 'logo' }} />
               <button onClick={this.expandMenuHandler} elem="expand-menu-button">
                  <div elem="expand-menu-button-icon"></div>
               </button>
               <NavigationMenu mix={{ block: 'navbar', elem: 'menu', mods: { 'hidden-on-small': this.state.isMenuHidden } }} />
            </Container>
         </Tag>
      )
   }
}


export { Navbar }