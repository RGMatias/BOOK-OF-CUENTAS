const saldo = require("../../../Model/saldo")
const {deleteBalance} = require ("../../Saldo")
const deleteBlanceApi = async (req , res) => {
    const {id} = req.params
    const Balance = await deleteBalance(id)
    res.json(Balance)
}

module.exports = {deleteBlanceApi}