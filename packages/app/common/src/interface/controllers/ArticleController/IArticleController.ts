import { IArticlesStore } from "../../stores/ArticlesStore";


interface IArticleControllerProps {
   id: string;
}


type IArticleController = React.ComponentType<IArticleControllerProps>


type IArticleControllerFactory = (teasersStore: IArticlesStore) => IArticleController


export { IArticleControllerProps, IArticleController, IArticleControllerFactory }