const {getData} = require ("../../Saldo")
const getDataApi =  async (req , res) => {
    const data = await getData()
    res.json(data)
}

module.exports = {getDataApi}