import * as http from "http";
import * as path from "path";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as compression from "compression";
import { ArticlesRepository } from "./ArticlesRepository";


class Server {
   private express = express();
   private server?: http.Server;

   constructor(
      private articlesRepository: ArticlesRepository,
      private port: number
   ) { this.configure(); }

   configure() {
      this.express.use('/images', express.static(path.join(__dirname, '../images')));
      this.express.use(bodyParser.json());
      this.express.use(compression());

      this.express.get('/articles/:id', (req, res) => {
         const articleId: string = req.params['id'];
         const article = this.articlesRepository.getArticle(articleId);
         res.send(article);
         res.end();
      });

      this.express.get('/teasers', (req, res) => {
         const teasers = this.articlesRepository.getTeasers();
         res.send(teasers);
         res.end();
      });

      this.express.get('*', (req, res) => {
         res.status(404);
         res.send({ error: 404 });
         res.end();
      });
   }

   start() {
      this.server = this.express.listen(this.port, () => {
         console.log(`listening on *:${this.port}`);
      });
   }

   stop() {
      this.server && this.server.close();
   }
}


export { Server }