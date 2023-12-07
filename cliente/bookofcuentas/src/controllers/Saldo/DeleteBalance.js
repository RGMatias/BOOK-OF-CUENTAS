import { DELETE } from "../../api/api";
export const DeleteBalance = async ( id) => {
    const result = await DELETE(`balance`,id)
    return result
}