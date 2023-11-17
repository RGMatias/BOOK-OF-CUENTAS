import { POST } from "../../api/api";
export const AddBalance = async (fecha ,informacion ,status , monto) => {
    console.log("aca llego")
    const result = await POST("balance", {fecha ,informacion , status , monto})
    return result
}