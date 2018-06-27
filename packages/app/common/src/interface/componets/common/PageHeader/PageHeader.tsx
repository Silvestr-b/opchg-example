import * as React from 'react'
import './PageHeader.scss'


function PageHeader(props: { text: string }){
   return <h1 block="pageheader">{props.text}</h1>
}


export { PageHeader }