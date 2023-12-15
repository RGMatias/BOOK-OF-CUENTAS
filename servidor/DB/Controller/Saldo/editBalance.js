const Saldo = require("../../Model/saldo.js")
const editBalance = async (Nmonto, id) => {
    
    let balanceexist = await Saldo.findById({_id:id}).exec()
    try {
        if (balanceexist) {
         balanceexist.monto=Nmonto
         let response = await balanceexist.save()
      
         return { data:response , msg:"El saldo a sido actualizado correctament" , sucess:true}   
        }
        else{
            console.log("llego")
            return { msg:"El saldo no ha podido ser actualizado" , sucess:false}
        }
    } catch (error) {
        return { msg:"El saldo no ha podido ser actualizado" , sucess:false , error} 
    }
}

module.exports = {editBalance}