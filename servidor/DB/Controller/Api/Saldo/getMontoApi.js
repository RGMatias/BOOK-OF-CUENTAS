const {getMonto} = require ("../../Saldo")
const getMontoApi =  async (req , res) => {
    const monto = await getMonto()
    res.json(monto)
}

module.exports = {getMontoApi}