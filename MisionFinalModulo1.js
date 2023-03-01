const selectOpciones = document.getElementById("opciones")

let contenido = ""
let bandera1 = 0
let bandera2 = 0

const ranking = [{ nombre: "Leidy", puntos: 80 }, { nombre: "Andrea", puntos: 63 }, { nombre: "Valentina", puntos: 55 }, { nombre: "Sergio", puntos: 42 }, { nombre: "Ronald", puntos: 38 }, { nombre: "Luis", puntos: 30 }]
const ranking_Actualizado = [] //Es una copia del ranking actual pero con los nuevos datos
const ranking_Puntajes = [] //Array con los putajes mayor o iguales a 50

aceptar.addEventListener("click", () => {

    if (selectOpciones.value == "opcion1") {
        contenido = `<table><th>NOMBRES</th><th>PUNTAJE</th>`
        ranking.forEach(elementos => {
            contenido += `<tr><td> ${elementos.nombre} </td><td> ${elementos.puntos} </td>`

        })
        contenido += `</table>`
        document.getElementById("pantalla").innerHTML = contenido

        bandera1 = 1

    } else if (selectOpciones.value == "opcion2") {

        if (bandera1 == 1) {

            if (ranking_Actualizado.length <= 7) {

                for (i = 0; i < ranking.length; i++) {

                    if (ranking[i]["nombre"] == "Sergio") {
                        ranking_Actualizado.push({
                            nombre: ranking[i]["nombre"],
                            puntos: 69
                        })
                    } else {
                        ranking_Actualizado.push({
                            nombre: ranking[i]["nombre"],
                            puntos: ranking[i]["puntos"]
                        })
                    }
                }

                ranking_Actualizado.pop() //Se elimina a luis de la lista

                ranking_Actualizado.splice(1, 0, {
                    nombre: "Gustavo",
                    puntos: 77
                }, {
                    nombre: "Jaime",
                    puntos: 77
                })

                ranking_Actualizado.splice(ranking_Actualizado.length, 0, {
                    nombre: "Yanires",
                    puntos: 93
                })
            }

                ranking_Actualizado.sort((a, b) => b.puntos - a.puntos)

                contenido = `<table><th>NOMBRES</th><th>PUNTAJE</th>`
                ranking_Actualizado.forEach(element => {
                    contenido += `<tr><td> ${element.nombre} </td><td> ${element.puntos} </td>`

                })
            

                contenido += `</table>`
                document.getElementById("pantalla").innerHTML = contenido

                bandera2 = 1            
            
        } else {
            alert("Primero debes visualizar el ranking")
        }

    } else if (selectOpciones.value == "opcion3") {

        if (bandera1 == 0 || bandera2 == 0) {
            alert("Primero debes visualizar el ranking y actualizarlo")
        } else {
            ranking_Actualizado.sort((a, b) => a.puntos - b.puntos)

            contenido = `<table><th>NOMBRES</th><th>PUNTAJE</th>`
            ranking_Actualizado.forEach(element => {
                contenido += `<tr><td> ${element.nombre} </td><td> ${element.puntos} </td>`

            })
            contenido += `</table>`
            document.getElementById("pantalla").innerHTML = contenido
        }

    } else if (selectOpciones.value == "opcion4") {

        if (bandera1 == 0 || bandera2 == 0) {
            alert("Primero debes visualizar el ranking y actualizarlo")
        } else {

            let promedio = 0
            let sumatoria = 0
            for (i = 0; i < ranking_Actualizado.length; i++) {
                sumatoria += ranking_Actualizado[i]["puntos"]
            }
            promedio = sumatoria / ranking_Actualizado.length

            document.getElementById("pantalla").innerHTML = `<table style="background-color:#90c3f7"><th>  El promedio de puntos de todos los participantes es de ${promedio.toFixed(2)}  </th></table>`
        }

    } else if (selectOpciones.value == "opcion5") {

        if (ranking_Puntajes <= 6) {

            if (bandera1 == 0 || bandera2 == 0) {
                alert("Primero debes visualizar el ranking y actualizarlo")
            } else {

                document.getElementById("pantalla").innerHTML = ""

                for (i = 0; i < ranking_Actualizado.length; i++) {
                    if (ranking_Actualizado[i]["puntos"] >= 50) {
                        ranking_Puntajes.push({
                            nombre: ranking_Actualizado[i]["nombre"],
                            puntos: ranking_Actualizado[i]["puntos"]
                        })
                    }
                }
            }
        }
                ranking_Puntajes.sort((a, b) => b.puntos - a.puntos)

                contenido = `<table><th>NOMBRES</th><th>PUNTAJE</th>`
                ranking_Puntajes.forEach(item => {
                    contenido += `<tr><td> ${item.nombre} </td><td> ${item.puntos} </td>`
                })
                contenido += `</table>`
                document.getElementById("pantalla").innerHTML = contenido

    } else if (selectOpciones.value == "opcion6") {

        if (bandera1 == 0 || bandera2 == 0) {
            alert("Primero debes visualizar el ranking y actualizarlo")
        } else {

            const rankingConLuis = []

            for (i = 0; i < ranking_Actualizado.length; i++) {
                rankingConLuis.push({
                    nombre: ranking_Actualizado[i]["nombre"],
                    puntos: ranking_Actualizado[i]["puntos"]
                })
            }

            rankingConLuis.push({
                nombre: "Luis",
                puntos: 39
            })

            console.log(rankingConLuis)

            rankingConLuis.sort((a, b) => b.puntos - a.puntos)

            contenido = `<table><th>NOMBRES</th><th>PUNTAJE</th>`
            rankingConLuis.forEach(items => {
                contenido += `<tr><td> ${items.nombre} </td><td> ${items.puntos} </td>`
            })

            contenido += `</table>`
            document.getElementById("pantalla").innerHTML = contenido
        }

    } else if (selectOpciones.value == "opcion7") {

        document.getElementById("pantalla").innerHTML = `Autores: <br><br> Johan Sebastian y Julian Carrillo`

    }
})
