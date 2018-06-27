import * as React from 'react'
import './ContactsList.scss'


function ContactsList(props: any){
   return (
      <div block="contacts-list">
         <div elem="item">
            <div elem="item-icon" mods={{ type: 'address' }}></div>
            <div elem="item-text">142432, Московская область, г.Черноголовка, Институтский проспект, д.8, ком.314</div>
         </div>

         <div elem="item">
            <div elem="item-icon" mods={{ type: 'phone' }}></div>
            <div elem="item-text">8(49652)2-31-68</div>
         </div>

         <div elem="item">
            <div elem="item-icon" mods={{ type: 'email' }}></div>
            <div elem="item-text">info@opchg.ru</div>
         </div>

         <div elem="item">
            <div elem="item-icon" mods={{ type: 'facebook' }}></div>
            <div elem="item-text">facebook.com/groups/opchg</div>
         </div>
      </div>
   )
}


export { ContactsList }