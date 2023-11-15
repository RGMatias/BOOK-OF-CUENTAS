const Saldo = require("../../Model/saldo")

const getMonto= async (monto)=>{
    let montoExist= await fecha.find({monto}).exec()
    if (montoExist) {
        return{data:montoExist , msg:"Se encontra la informacion requerida" , sucess:true}
    } else {
        return{msg:"No se a encontrado la informacion requerida" , sucess:false}
    }
}

module.exports={getMonto}