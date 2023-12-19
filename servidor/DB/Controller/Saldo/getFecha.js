const Saldo = require("../../Model/saldo")

const getFecha = async (desde , hasta)=>{
    let fechaExist= await Saldo.find({$and:[{fecha:{$gte:desde}},{fecha:{$lte:hasta}}]}).exec()

    console.log(desde, hasta)
    // return {desde,hasta}
    if (desde>hasta) {
        return{msg:"Desde tiene que ser meno a hasta" , sucess:false}
    }
    if (fechaExist) {
        return{data:fechaExist , msg:"Se encontro la informacion requerida" , sucess:true}
    } else {
        return{msg:"No se ha encontrado la informacion requerida" , sucess:false}
    }
    
}

module.exports={getFecha}