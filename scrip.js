function obtenerConsumoMensual(){
    let consumo = parseFloat(prompt("Ingrese su consumo mensual en kWh:"));
    return consumo;
}
let consumoUsuario = obtenerConsumoMensual();

function obtenerTarifaBase(){
    let tarifa = Number(prompt("Ingrese la tarifa base por kWh:"));
    return tarifa;
}
let tarifa = obtenerTarifaBase();

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
    let SubTotal = (consumoUsuario * tarifa)
    return SubTotal;
}
let SubTotal = calsubtotal();

const ivaaplicado = () => {
    let ivaa = (SubTotal * (Iva / 100));
    return ivaa;
}
let ivaAplicado = ivaaplicado();

const totalapagar = () => {
    let total = SubTotal + ivaAplicado + cargo;
    return total
}
let totalPagar = totalapagar();
function mostrar() {
    console.log("Su consumo de este mes fue de: " + consumoUsuario + " kWh");
    console.log("La tarifa esta en : " + tarifa + " por kWh");
    console.log("Su tarifa base mensual es: " + "$" + cargo);
    console.log("El iva es del:" + Iva + "%");
    console.log("El subtotal es:" + "$" + SubTotal);
    console.log("El iva a pagar es: " + "$" + ivaAplicado);
    console.log("El total a pagar es: " + "$" + totalPagar);
}
mostrar();