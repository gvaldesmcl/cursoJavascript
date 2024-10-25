let opcionMenu = 0;

do {
  opcionMenu = prompt(
    "Menú Principal \n Selecciona una opción:\n 0)Salir \n 1)Calcular Numero Pares \n 2)Calcular Numero Primos \n"
  );

  let nroFinal = null;

  switch (opcionMenu) {
    case "1":
      nroFinal = prompt(
        "Indica hasta que número Calcular (maximo hasta 50)"
      );

      if (parseInt(nroFinal) <= 50) {
        alert(
          "Los Nro. Pares de la serie son: \n" + calcularNumeroPares(nroFinal)
        );
      } else {
        alert("Debe seleccionar un número menor a 50...");
      }
      break;

      case "2":
        nroFinal = prompt(
          "Indica hasta que número Calcular (maximo hasta 50)"
        );
  
        if (parseInt(nroFinal) <= 50) {
          alert(
            "Los Nro. Primos de la serie son: \n" + calculaNumeroPrimo(nroFinal)
          );
        } else {
          alert("Debe seleccionar un número menor a 50...");
        }
        break;

        case "0":
            opcionMenu = "-1";
        break;

        default:
            alert("Selecciona una opción valida >:( ");
  }
} while (opcionMenu != '-1');

function calcularNumeroPares(indiceFinal) {
  let stringRetorno = "";

  for (let i = 0; i <= indiceFinal; i++) {
    if (i % 2 == 0) {
      stringRetorno += i + "/";
    }
  }

  return stringRetorno;
}

function calculaNumeroPrimo(indiceFinal) {

    let stringRetorno = "";

    for (let i = 2; i <= indiceFinal; i++) {

        let esPrimo = true;

        for (let f = 2; f < i; f++) {
            if (i % f == 0) esPrimo = false;
        }

        if (esPrimo) {            
            stringRetorno += i+"/";
        }
    }

    return stringRetorno;

}
