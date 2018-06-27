import * as React from 'react'
import { PageHeader } from '../../common/PageHeader';
import { ContactsList } from './components/ContactsList'
import { ContactsForm } from './components/ContactsForm'
import './ContactsPage.scss'


function ContactsPage(){
   return (
      <div>
         <PageHeader text={'Контакты'}/>
         <div block="contacts-page">
            <section elem="section">

               <h2 elem="section-header">Свяжитесь с нами</h2>
               <ContactsList/>

            </section>

            <section elem="section">

               <h2 elem="section-header">Оставьте обращение</h2>
               <ContactsForm/>

            </section>
         </div>
      </div>
   )
}


export { ContactsPage }