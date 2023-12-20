const Saldo = require("../../Model/saldo")

const saldos = async ()=>{
    let saldoTotal= await Saldo.find().exec()
    let entradas = 0
    let salidas = 0

    try {
        for (let index = 0; index < saldoTotal.length; index++) {
            const element = saldoTotal[index];
            if (element.status=="ENTRADA") {
                entradas += element.monto 
            }
            else{
                salidas += element.monto
            }

        }
        let data = entradas - salidas
        return{msg:"Se a encontrado el saldo  total correcta mente" , sucess:true , data} 
    } catch (error) {
        return{msg:"No se a encontrado el saldo total requerido requerida" , sucess:false}
    }
   
    




}
module.exports={saldos}