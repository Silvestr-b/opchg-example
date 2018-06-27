import * as React from 'react'
import { DocumentCard } from '../DocumentCard'
import './DocumentFeed.scss'


function DocumentFeed(props: any){
   return (
      <div block="document-feed" mix={props.mix}>
         {props.documents.map((document: any) => (
            <DocumentCard key={document.name} name={document.name} path={document.path}/>
         ))}
      </div> 
   )
}


export { DocumentFeed }