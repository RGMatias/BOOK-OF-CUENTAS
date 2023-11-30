const express=require("express")
const router=express.Router()
const {addBalanceapi , deleteBlanceApi ,editBalanceApi ,getDataApi ,getFechaApi,getMontoApi,getStatusApi}=require("../DB/Controller/Api/Saldo/")
router.post("/", addBalanceapi)
// router.get("/data", getDataApi)
router.get("/fecha/:desde/:hasta",getFechaApi )
// router.get("/Monto",getMontoApi)
// router.get("/Status",getStatusApi)
// router.put("/",editBalanceApi)
// router.delete("/",deleteBlanceApi)


// const ejemplo=  (req, res)=>{
//     res.json({msg:"Probando ruta balance"})
// }
module.exports=router