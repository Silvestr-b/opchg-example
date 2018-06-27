import { ITeaser } from "./ITeaser";


interface ITeasersStore {
   getAll(): ITeaser[];
}


export { ITeasersStore }