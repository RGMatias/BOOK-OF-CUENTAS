const {getFecha} = require ("../../Saldo")
const getFechaApi =  async (req , res) => {
    let {desde, hasta}= req.params
    const data = await getFecha(desde,hasta)
    res.json(data)
}

module.exports = {getFechaApi}