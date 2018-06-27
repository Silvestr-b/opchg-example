import * as React from 'react'
import './DocumentCard.scss'


function DocumentCard(props: any){
   return (
      <div block="document-card" mix={props.mix}>
         <p elem="name">{props.name}</p>
         <a href={props.path} target="_blank" elem="download-button">
            <div elem="download-button-icon"></div>
         </a>
      </div> 
   )
}


export { DocumentCard }