const mongoose = require ("mongoose")
const saldoSchema = new mongoose.Schema({
    fecha: Number,
    informacion: String,
    status:{
        type:String,
        enum:['ENTRADA', 'SALIDA']
    },
    monto: Number,
})
module.exports=mongoose.model("Saldo",saldoSchema,"saldoCollection")