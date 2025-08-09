function obtenerConsumoMensual(){
    let consumo = parseFloat(prompt("Ingrese su consumo mensual en kWh:"));
    return consumo;
}
let consumoUsuario = obtenerConsumoMensual();
console.log("Consumo ingresado:", consumoUsuario);

function obtenerTarifaBase(){
    let tarifa = Number(prompt("Ingrese la tarifa base por kWh:"));
    return tarifa;
}
let tarifa = obtenerTarifaBase();
console.log("tarifa base:", tarifa);

const cargoFijo = function(){
    let cargoFijo = Number(prompt("Ingrese el valor cargo fijo por servicio: "))
    return cargoFijo
}
let cargo = cargoFijo()

const valorIva = function(){
    let cargoIva = Number(prompt("Ingrese el valor del IVA: "))
    return cargoIva
}
let Iva = valorIva()

const calsubtotal = () => {
    let subtotal = (consumousruario * tarifa)
    return subtotal; 
}
let SubTotal = calsubtotal();

const ivaaplicado = () => {
    let ivaa = (SubTotal * (Iva / 100));
    return ivaa;
}
let ivaAplicado = ivaaplicado();
