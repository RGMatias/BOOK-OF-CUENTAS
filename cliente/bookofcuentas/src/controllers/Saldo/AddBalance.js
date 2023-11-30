import { POST } from "../../api/api";
export const AddBalance = async (fecha ,informacion ,status , monto) => {

    if (fecha==null||fecha==undefined) return
    if (informacion==null||informacion==undefined) return
    if (status==null||status==undefined) return
    if (monto==null||monto==undefined) return
    
    const result = await POST("balance", {fecha ,informacion , status, monto})
    return result
}