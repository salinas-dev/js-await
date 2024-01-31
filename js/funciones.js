function obtenerDatos() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      var datos = { mensaje: "Datos obtenidos correctamente" };
      resolve(datos);
    }, 2000);
  });
}

async function proceso() {
  console.log("Iniciando proceso");
  try {
    var datos = await obtenerDatos();
    console.log(datos.mensaje);
  } catch (error) {
    console.log("Error: " + error);
  }
}

proceso();


