const express=require("express")
const router=express.Router()
const {addBalanceapi}=require("../DB/Controller/Api/Saldo/addBalanceApi")
router.post("/", addBalanceapi)
// router.get("/", ejemplo)



// const ejemplo=  (req, res)=>{
//     res.json({msg:"Probando ruta balance"})
// }
module.exports=router