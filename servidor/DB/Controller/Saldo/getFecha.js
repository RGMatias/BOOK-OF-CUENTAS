const Saldo = require("../../Model/saldo")

const getFecha = async (fecha)=>{
    let fechaExist= await fecha.find({fecha}).exec()
    if (fechaExist) {
        return{data:fechaExist , msg:"Se encontra la informacion requerida" , sucess:true}
    } else {
        return{msg:"No se a encontrado la informacion requerida" , sucess:false}
    }
}

module.exports={getFecha}