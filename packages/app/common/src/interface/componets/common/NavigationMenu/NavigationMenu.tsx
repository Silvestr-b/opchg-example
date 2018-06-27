import * as React from 'react'
import './NavigationMenu.scss'


function NavigationMenu(props: any){
   return (
      <nav block="navigation-menu" mix={props.mix}>
         <NavLink className="navigation-menu__item" to="/about">О палате</NavLink>
         <NavLink className="navigation-menu__item" to="/news">Новости</NavLink>
         <NavLink className="navigation-menu__item" to="/documents">Документы</NavLink>
         <NavLink className="navigation-menu__item" to="/contacts">Контакты</NavLink>
      </nav>
   )
}


export { NavigationMenu }