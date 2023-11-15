const {getFecha} = require ("../../Saldo")
const getFechaApi =  async (req , res) => {
    const Fecha = await getFecha()
    res.json(Fecha)
}

module.exports = {getFechaApi}