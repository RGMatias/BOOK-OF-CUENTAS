export const FiltroFecha = () => {
    let fechaActual = new Date()
    let fechaAnterior = new Date()
    fechaAnterior.setDate(fechaAnterior.getDate()-14)
    // console.log(fechaActual.getTime())
    // console.log(fechaAnterior.getTime())
    return {
        fechaInicio:fechaAnterior.getTime(),
        fechaFin:fechaActual.getTime(),
    }
}

// let desde = 0
// let hasta = 0

// function fechaP(e,momento="desde") {
//   let fecha = new Date(e.value)
//   switch (momento) {
//     case "desde":
//       desde = fecha.getTime()
//       break;
//       case "hasta":
//         hasta = fecha.getTime()
//         break;
//     default:
//       break;
//   }
//   // console.log(fecha.getTime())

// }
// function mostrar() {
//   if (desde > hasta) {
//     alert("desde tiene que ser menor que hasta")
    
//   }
//   // TODO: logica para solicitar los datos a la base de datos
//   console.log({desde,hasta})
// }