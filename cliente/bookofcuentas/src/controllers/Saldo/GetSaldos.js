import { GET } from "../../api/api";
export const GetSaldos = async () => {
    const result = await GET (`balance/saldo`)
    return result
} 