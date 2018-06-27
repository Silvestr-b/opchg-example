import { ITeasersStore } from "./ITeasersStore";
import { ITeaser } from "./ITeaser";
import { ITeasersLoader } from "../../../application/loaders/TeasersLoader";


class TeasersStore implements ITeasersStore {
   
   constructor(
      private teasersLoader: ITeasersLoader
   ) { }

   getAll(): ITeaser[] {
      throw new Error("Method not implemented.");
   }

}


export { TeasersStore }