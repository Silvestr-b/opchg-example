import * as React from 'react'
import { NewsCard } from '../NewsCard'
import './NewsFeed.scss'


function NewsFeed(props: any){
   return (
      <div block="news-feed">
         {props.teasers.map((teaser: any) => (
            <NewsCard 
               key={teaser.title}
               date={teaser.date} 
               title={teaser.title} 
               image={teaser.image} 
               link={teaser.link}
            />
         ))}
      </div>
   )
}


export { NewsFeed }