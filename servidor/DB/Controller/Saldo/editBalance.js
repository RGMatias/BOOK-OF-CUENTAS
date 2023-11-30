const Saldo = require("../../Model/saldo.js")
const editBalance = async (Nmonto ,nID) => {
    // console.log("llego")
    let blanceexist = await addBalance.findById({_id:nID}).exec()
    try {
        if (balanceexist) {
         blanceexist.monto=Nmonto
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

module.exports = {editBalance}