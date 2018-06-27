import { Server } from "./Server";
import { ArticlesRepository } from "./ArticlesRepository";
import { articlesStore, teasersStore } from "./stores";


const articlesRepository = new ArticlesRepository(articlesStore, teasersStore);
const server = new Server(articlesRepository, 8081);

server.start();