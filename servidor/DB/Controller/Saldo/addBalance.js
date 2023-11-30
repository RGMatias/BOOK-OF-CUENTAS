const Saldo = require("../../Model/saldo")

const addBalance= async (fecha , informacion , status , monto )=> {

    try {
        const saldo= new Saldo({fecha:new Date().getTime(),informacion,status,monto})
        await saldo.save()
        return {sucess: true , msg:"El saldo se ha añadido correctamente" , data:saldo}
    
    } catch (error) {
        console.log(error)
        return {sucess:false , msg:"A ocurrido un error"}
    }
}
module.exports={addBalance}