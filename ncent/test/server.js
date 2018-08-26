const http = require("http");
const app = require("./app");

//setup port
const port = parseInt(process.env.PORT, 10) || 8000;
app.set("port", port);

//create server
const server = http.createServer(app);

//start listening to server
server.listen(port);
