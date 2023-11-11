const Server=require("./class/server.js")
const server=new Server(process.env.PORT||3000)
server.listen()