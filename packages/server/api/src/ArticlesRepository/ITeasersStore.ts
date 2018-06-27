import { ITeaser } from "./ITeaser";


interface ITeasersStore {
   [teaserId: string]: ITeaser;
}


export { ITeasersStore }