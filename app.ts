import 'es6-shim'
import "reflect-metadata"; // this shim is required
import {createKoaServer} from "routing-controllers";
import "./controllers/TestController.ts"  // we need to "load" our controller before call createServer. this is required
let app = createKoaServer() // creates express app, registers all controller routes and returns you express app instance
app.listen(3000) // run express application