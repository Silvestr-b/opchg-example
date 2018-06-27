import * as React from "react";
import { NewsFeed } from "../../componets/common/NewsFeed";
import { INewsFeedControllerProps, INewsFeedControllerFactory } from "./INewsFeedController";


const NewsFeedControllerFactory: INewsFeedControllerFactory = (teasersStore) => {
   
   class NewsFeedController extends React.Component<INewsFeedControllerProps, {}> {
      render() {
         return (
            <NewsFeed teasers={teasersStore.getAll()} />
         )
      }
   }

   return NewsFeedController
}


export { NewsFeedControllerFactory }