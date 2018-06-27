import { ITeasersStore } from "../../stores/TeasersStore";


interface INewsFeedControllerProps { }


type INewsFeedController = React.ComponentType<INewsFeedControllerProps>


type INewsFeedControllerFactory = (teasersStore: ITeasersStore) => INewsFeedController


export { INewsFeedControllerProps, INewsFeedController, INewsFeedControllerFactory }