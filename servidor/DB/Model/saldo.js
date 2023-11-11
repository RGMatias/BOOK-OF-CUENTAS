const mongooose = require ("mongoose")
const saldoSchema = new mongooose.Schema({
    fecha: Number,
    informacion: String,
    status:{
        type:String,
        enum:['ENTRADA', 'SALIDA']
    },
    monto: Number,
})
module.exports=mongooose.model("saldo",saldoSchema,"saldo")