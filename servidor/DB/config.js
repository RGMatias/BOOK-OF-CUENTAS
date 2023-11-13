const mongoose = require("mongoose")
const DBConnection=async ()=>{
    try {
        mongoose.set('strictQuery', false);
    await    mongoose.connect(process.env.BD)
        console.log("Se ha conectado a la Base de datos correctamente")
    } catch (error) {
        console.log("Error al conectarse a la Base de datos")
    }
}
module.exports={DBConnection}