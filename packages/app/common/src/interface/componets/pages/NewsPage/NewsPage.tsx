import * as React from 'react'
import { PageHeader } from '../../common/PageHeader';
import { NewsFeedControllerFactory } from '../../../containers/NewsFeedController/NewsFeedController';
import { articles } from '../../../data/articles';
import './NewsPage.scss'


const NewsFeedController = NewsFeedControllerFactory(articles);


function NewsPage() {
   return (
      <div>
         <PageHeader text={'Новости'} />
         <NewsFeedController />
      </div>
   )
}


export { NewsPage }