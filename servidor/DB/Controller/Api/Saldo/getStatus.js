const {getStatus} = require ("../../Saldo")
const getStatusApi =  async (req , res) => {
    const  status = await getStatus()
    res.json(status)
}

module.exports = {getStatusApi}