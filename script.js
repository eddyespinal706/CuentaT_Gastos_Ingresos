//Balance:
const balance = document.getElementById('valor-balance')

//Ingresos:
const formIngresos = document.getElementById('form-ingresos')

const descIngresos = document.getElementById('descripcion-ingresos')
const valIngresos = document.getElementById('valor-ingresos')

let listaIngresos = []

//Gastos:
const formGastos = document.getElementById('form-gastos')

const descGastos = document.getElementById('descripcion-gastos')
const valGastos = document.getElementById('valor-gastos')

let listaGastos =[]

formIngresos.addEventListener('submit', (e) =>{
    e.preventDefault()
    if (descIngresos.value == "" || valIngresos.value == "") {
        alert("No puede dejar ningun campo vacio")
    }else{
        const ingresos = {
            descripcion: descIngresos.value,
            valor: valIngresos.value,
        }
        for(let key in ingresos) {
            listaIngresos.push(ingresos[key])
        }
    }
    for(let i=0;i< listaIngresos.length;i++){
        console.log(listaIngresos[i])
    }
    descIngresos.value = ""
    valIngresos.value = ""
})

formGastos.addEventListener('submit', (e) =>{
    e.preventDefault()
    if (descGastos.value == "" || valGastos.value == "") {
        alert("No puede dejar ningun campo vacio")
    }else{
        const gastos = {
            descripcion: descGastos.value,
            valor: valGastos.value,
        }
        for(let key in gastos) {
            listaGastos.push(gastos[key]);
        }
    }
    for(let i=0;i< listaGastos.length;i++){
        console.log(listaGastos[i]);
    }
    descGastos.value = ""
    valGastos.value = ""
})
