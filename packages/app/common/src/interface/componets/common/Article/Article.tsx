import * as React from 'react'
import { PageHeader } from '../PageHeader'
import './Article.scss'


export interface IArticleProps {
   image: string;
   title: string;
   text: string;
}


function Article(props: IArticleProps) {
   return (
      <div>
         <PageHeader text={props.title}/>
         <article block="article">
            <img elem="lead-image" src={props.image} alt="" />
            <div dangerouslySetInnerHTML={{ __html: props.text }}></div>
         </article>
      </div>
   )
}


export { Article }