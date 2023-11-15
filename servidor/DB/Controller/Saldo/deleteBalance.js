const Saldo=require("../../Model/saldo")
const deleteBalance=async (_id)=>{
    let deleteBalance=await Saldo.deleteOne({_id})
    try {
        if (deleteBalance.deletedCount>0) {
         return{msg:"El saldo se a borrado de forma exitosa", sucess:true}
         
     }else{
         return{msg:"No se ha encontrado el saldo", sucess:false, controller:"deleteBalance"}
         
        }
        
    } catch (error) {
        return{msg:"No se ha encontrado el saldo", sucess:false, controller:"deleteBalance", error}
        
    }
}
module.exports={deleteBalance}