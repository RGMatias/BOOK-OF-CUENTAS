const Saldo = require("../../Model/saldo")

const getData= async (informacion)=>{
    let dataExist= await fecha.find({informacion}).exec()
    if (dataExist) {
        return{data:dataExist , msg:"Se encontra la informacion requerida" , sucess:true}
    } else {
        return{msg:"No se a encontrado la informacion requerida" , sucess:false}
    }
}

module.exports={getData}