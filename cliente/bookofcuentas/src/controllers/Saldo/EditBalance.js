import { PUT} from "../../api/api";
export const EditBalance = async (id , monto ) => {
    if (monto==null||monto==undefined) return
    if(Number.isNaN(parseFloat(monto)))return
    const result = await PUT("balance", {id,  monto})
    return result
}