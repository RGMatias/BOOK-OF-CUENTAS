import { GET } from "../../api/api";
export const GetBalance = async (fechaInicio , fechaFin) => {
    if (fechaInicio==null||fechaInicio==undefined) return
    if (fechaFin==null||fechaFin==undefined) return
    if(Number.isNaN(parseInt(fechaInicio)))return
    if(Number.isNaN(parseInt(fechaFin)))return

    const result = await GET (`balance/fecha/${fechaInicio}/${fechaFin}`)
    return result
} 