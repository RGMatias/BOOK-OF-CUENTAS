const Saldo = require("../../Model/saldo")

const getFecha = async (desde , hasta)=>{
    let fechaExist= await Saldo.find({fecha:{$gte:desde},fecha:{$lte:hasta}}).exec()
    // return {desde,hasta}
    if (desde>hasta) {
        return{msg:"Desde tiene que ser meno a hasta" , sucess:false}
    }
    if (fechaExist) {
        return{data:fechaExist , msg:"Se encontra la informacion requerida" , sucess:true}
    } else {
        return{msg:"No se a encontrado la informacion requerida" , sucess:false}
    }
}

module.exports={getFecha}