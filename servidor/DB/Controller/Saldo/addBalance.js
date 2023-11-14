const saldo = require("../../Model/saldo")

const addBalance= async (fecha , informacion , status , monto )=> {

    try {
        const saldo= new saldo({fecha,informacion,status,monto})
        await saldo.save()
        return {sucess: true , msg:"El saldo a ha añadido correctamente" , data:saldo}
    
    } catch (error) {
        console.log(error)
        return {sucess:false , msg:"A ocurrido un error"}
    }
}
module.exports={addBalance}