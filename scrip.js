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
