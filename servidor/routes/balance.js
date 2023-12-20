const express=require("express")
const router=express.Router()
const {addBalanceapi, deleteBlanceApi ,editBalanceApi ,getFechaApi ,getSaldos}=require("../DB/Controller/Api/Saldo/")
router.post("/", addBalanceapi)
router.get("/fecha/:desde/:hasta",getFechaApi )
router.get("/saldo",getSaldos )
router.put("/",editBalanceApi)
router.delete("/:id",deleteBlanceApi)


// const ejemplo=  (req, res)=>{
//     res.json({msg:"Probando ruta balance"})
// }
module.exports=router