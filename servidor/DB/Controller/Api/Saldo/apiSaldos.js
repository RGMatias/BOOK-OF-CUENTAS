const {saldos} = require ("../../Saldo")
const getSaldos =  async (req , res) => {
    const data = await saldos()
    res.json(data)
}

module.exports = {getSaldos}