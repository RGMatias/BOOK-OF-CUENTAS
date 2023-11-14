const {addBalance} = require ("../../Saldo")
const addBalanceapi = async (req , res) => {
    const{fecha, informacion, status, monto} = req.body
    const saldo = await addBalance (fecha, informacion, status, monto)
    console.log(fecha, informacion, status, monto)
    res.json(saldo)
}

module.exports = {addBalanceapi}