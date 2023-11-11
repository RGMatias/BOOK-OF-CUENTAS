const mongooose = require("mongoose")
const DBConnection=()=>{
    try {
        mongooose.set('strictQuery', false);
        mongoose.connect(process.env.BD)
        console.log("Se ha conctado a la Base de datos correctamente")
    } catch (error) {
        console.log("Error al conectarce a la Base de datos")
    }
}
module.exports={
    DBConnection
}