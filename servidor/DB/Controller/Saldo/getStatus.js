const Saldo=require("../../Model/saldo")

const getStatus= async (status)=>{
    let statusExist= await fecha.find({status}).exec()
    if (statusExist) {
        return{data:statusExist , msg:"Se encontra la informacion requerida" , sucess:true}
    } else {
        return{msg:"No se a encontrado la informacion requerida" , sucess:false}
    }
}

module.exports={getStatus}