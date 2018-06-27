import * as React from 'react'
import './ContactsForm.scss'


function ContactsForm(props: any){
   return (
      <div block="contacts-form">
         <div elem="input-group">
            <label 
               elem="input-label" 
               htmlFor="contacts-form__name-input">Ф.И.О <span elem="required-label">*</span></label>
            <input 
               elem="input"
               mods={{ type: 'name' }} 
               id="contacts-form__name-input" 
               type="text"
               placeholder="Как к Вам обращаться?"
            />
         </div>

         <div elem="input-group">
            <label 
               elem="input-label" 
               htmlFor="contacts-form__email-input">Email <span elem="required-label">*</span></label>
            <input 
               elem="input" 
               mods={{ type: 'email' }}
               id="contacts-form__email-input" 
               type="text"
               placeholder="На какой email адрес ответить?"
            />
         </div>

         <div elem="input-group">
            <label 
               elem="input-label" 
               htmlFor="contacts-form__phone-input">Телефон </label>
            <input 
               elem="input" 
               mods={{ type: 'phone' }}
               id="contacts-form__phone-input" 
               type="text"
               placeholder="Ваш контактный телефон?"
            />
         </div>
         
         <div elem="input-group">
            <label 
               elem="input-label" 
               htmlFor="contacts-form__message-input">Обращение <span elem="required-label">*</span></label>
            <textarea 
               elem="input" 
               mods={{ type: 'message' }}
               name="message-input" 
               id="contacts-form__message-input">
            </textarea>
         </div>

         <button elem="submit-button">Отправить обращение</button>
      </div>
   )
}


export { ContactsForm }