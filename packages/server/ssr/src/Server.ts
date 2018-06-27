import * as http from "http";
import * as path from "path";
import * as express from "express";
import * as compression from "compression";
import { HtmlBuilder } from "./HtmlBuilder";


class Server {
   private express = express();
   private server?: http.Server;

   constructor(
      private htmlBuilder: HtmlBuilder,
      private port: number
   ) { this.configure(); }

   configure() {
      this.express.use('/bundle/', express.static(path.join(__dirname, '../dist')));
      this.express.use(compression());

      this.express.get('*', (req, res) => {
         const html = this.htmlBuilder.build(req.url);
         res.send(html);
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