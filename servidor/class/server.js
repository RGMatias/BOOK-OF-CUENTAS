require ("dotenv").config()
const express=require("express")
const cors=require("cors")
const http=require("http")
const path=require("path")
const {DBConnection}=require("../DB/config.js")



class Server {
    constructor (port){
        this.app=express()
        this.port=port
        this.connectDB()
        this.middlewares()
        this.httpServer=http.createServer(this.app)
        this.routes()
    }
    async connectDB(){
        await DBConnection()
    }
    middlewares(){
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use(express.static(path.join(__dirname, "../public")))
        this.app.use(function(req, res, next){
            res.header('Access-Control-Allow-Origin', '*');
            //res.header('Access-Control-Allow-Origin', 'http://localhost:5008');
            res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS')
            res.header('Access-Control-Allow-Headers', '*');
            //res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
            // res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
            res.header('Access-Control-Allow-Credentials', 'true');
            next()
        })
        
    }
    routes(){
        this.app.use("/api", require("../routes/index.js"))
    }
    listen(){
        this.httpServer.listen(this.port, ()=>{
            console.log("Servidor corriendo en el puerto:", this.port)
        })
    }
    
}
module.exports=Server
