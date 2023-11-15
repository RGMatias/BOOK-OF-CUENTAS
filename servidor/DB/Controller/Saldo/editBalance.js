const Saldo = require("../../Model/saldo.js")
const editbalance = async (monto) => {
    let blanceexist = await addBalance.findById({_id}).exec()
    try {
        if (balanceexist) {
         blanceexist.monto
         let response = await balanceexist.save()
         return { data:response , msg:"El saldo a sido actualizado correctament" , sucess:true}   
        }
        else{
            return { msg:"El saldo no ha podido ser actualizado" , sucess:false}
        }
    } catch (error) {
        return { msg:"El saldo no ha podido ser actualizado" , sucess:false , error} 
    }
}

module.exports = {editbalance}