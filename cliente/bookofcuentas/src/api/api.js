const Url ="http://127.0.0.1:3000/api"
export const RequestApi = async (opciones) =>{
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    if (opciones.metodo=="PUT" || opciones.metodo=="POST") {
        console.log(Url+"/"+opciones.url)
        let result = await fetch(Url+"/"+opciones.url,{
            headers:myHeaders,
            method:opciones.metodo,
            body:JSON.stringify(opciones.body),
            redirect:"follow"
        })
        return result
    }
    if (opciones.metodo=="GET" || opciones.metodo=="DELETE") {
        let result = await fetch(Url+"/"+opciones.url,{
            headers:myHeaders,
            method:opciones.metodo,
        })
        return result
    }
}
export const GET = async (URL) =>{
    const respons = await RequestApi({
        metodo: "GET",
        url:URL,
    })
    const data = await respons.json()
    return data
}
export const DELETE = async (URL,ID) =>{
    const respons = await RequestApi({
        metodo: "DELETE",
        url:URL+"/"+ID,

    })
    const data = await respons.json()
    return data
}
export const POST = async (URL,Body) => {
    const respons = await RequestApi({
        metodo: "POST",
        url:URL,
        body:Body
    })
    const data = await respons.json()
    return data
}
export const PUT = async (URL,Body) => {
    const respons = await RequestApi({
        metodo: "PUT",
        url:URL,
        body:Body
    })
    const data = await respons.json()
    return data
}