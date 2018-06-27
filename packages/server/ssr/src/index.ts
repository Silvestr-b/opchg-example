import { Server } from "./Server";
import { HtmlBuilder } from "./HtmlBuilder";

const server = new Server(new HtmlBuilder(), 8080);

server.start();