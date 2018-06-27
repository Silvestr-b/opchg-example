import * as React from 'react'
import { Article } from '../../common/Article';


function AboutPage(){
   return (
      <Article
         image={require('./images/lead.jpg')}
         title={' '}
         text={require('./content')}
      />
   )
}


export { AboutPage }