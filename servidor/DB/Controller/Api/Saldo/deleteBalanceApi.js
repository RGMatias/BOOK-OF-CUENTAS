const saldo = require("../../../Model/saldo")
const {deleteBalance} = require ("../../Saldo")
const deleteBlanceApi = async (req , res) => {
    const {_id} = req.params
    const Balance = await deleteBalance(_id)
    res.json(Balance)
}

module.exports = {deleteBlanceApi}