const {editBalance} = require ("../../Saldo")
const editBalanceApi =  async (req , res) => {
    const  {monto, id} = req.body
    const saldo = await editBalance (monto, id)
    console.log(monto)
    res.json(saldo)
}

module.exports = {editBalanceApi}