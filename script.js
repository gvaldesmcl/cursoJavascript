// Variables Globales
const arregloCursos = [
  {
    id_curso: 1,
    nombre_curso: "Introducción a la Ciberseguridad",
    categoria: "TI",
    horas: 150,
  },
  {
    id_curso: 2,
    nombre_curso: "Introducción a Phyton",
    categoria: "TI",
    horas: 120,
  },
  {
    id_curso: 3,
    nombre_curso: "Diseño de Interfaces con UX",
    categoria: "Diseño",
    horas: 80,
  },
  {
    id_curso: 4,
    nombre_curso: "Introducción a la Reposteria",
    categoria: "Cocina",
    horas: 55,
  },
  {
    id_curso: 5,
    nombre_curso: "Taller de Cocina Chilena - Niven 1",
    categoria: "Cocina",
    horas: 190,
  },
  {
    id_curso: 6,
    nombre_curso: "Adobe Illustrator para Principantes",
    categoria: "Cocina",
    horas: 100,
  },
  {
    id_curso: 7,
    nombre_curso: "Nutrición Deportiva - Nivel 1",
    categoria: "Deporte",
    horas: 140,
  },
];

let carritoCursos = [];

let opcionMenu = -1;

// FIN Variables Globales

// Menú Principal
while (opcionMenu != 0) {
  opcionMenu = parseInt(
    prompt(
      "Bienvenido al selector de cursos para alumnos.\n Seleccione una opción:\n 0) Salir \n 1) Ver Carrito de Cursos \n 2) Agregar Cursos \n 3) Procesar Carrito"
    )
  );

  console.log(carritoCursos);

  switch (opcionMenu) {
    // Salir del Programa
    case 0:
      opcionMenu = 0;
      break;

    // Ver Carrito de Cursos
    case 1:
      verCarrito();
      break;

    // Agregar Cursos
    case 2:
      let opcionMenuAgregar = parseInt(
        prompt(
          "Agregar cursos al carrito \n 1) Ver Todos los Cursos \n 2) Buscar por categoria \n 3) Volver"
        )
      );

      switch (opcionMenuAgregar) {
        // Muestra todos los cursos
        case 1:
          const listaCompletaCursos = arregloCursos.map((curso) => curso.id_curso + ") " + curso.nombre_curso + " (" + curso.categoria + ")" ).join("\n");

          let idCursoAgregar = parseInt(
            prompt(
              "Lista de todos los Cursos: \n 0) Cancelar \n" +
                listaCompletaCursos
            )
          );

          agregarCurso(idCursoAgregar);

          break;

          // Filtra por categoria del curso
        case 2:
          let stringBusquedaCateg = prompt(
            "Ingrese la categoria a mostrar. \n Opciones disponibles: \n Cocina / Deporte / Diseño / TI"
          );

          let arregloCursosFiltrados = arregloCursos.filter(curso => curso.categoria.toLowerCase().includes(stringBusquedaCateg.toLowerCase()));

          let listaCursosEncontrados = arregloCursosFiltrados.map((curso) => curso.id_curso + ") " + curso.nombre_curso + " (" + curso.categoria + ")" ).join("\n");

          if(arregloCursosFiltrados.length == 0){

            alert('No se encontrar cursos ...');

          }else{

            let idCursoSeleccionado = parseInt(prompt("Lista de cursos encontrados: \n 0) Cancelar \n" + listaCursosEncontrados  )  );

            if(idCursoSeleccionado != 0){

              agregarCurso(idCursoSeleccionado);

            }            

          }

          break;

      }

      break;

    // Procesar Carrito
    case 3:

      procesarCarrito();

      break;
  }
}

// FIN Menú Principal

alert("Saliendo del programa ... \n ¡Hasta la próxima!");

//Funciones del programa

function verCarrito() {
  if (carritoCursos.length === 0) {

    return alert("Su carrito de Cursos esta vacio ...");

  }

  const totalHoras = carritoCursos.reduce((sum, curso) => sum + curso.horas, 0);

  let stringCarrito = carritoCursos
    .map(
      (curso) =>
        curso.id_curso +
        ") " +
        curso.nombre_curso +
        " (" +
        curso.categoria +
        ") " +
        curso.horas +
        " hrs."
    )
    .join("\n");

  stringCarrito += "\n Total de Horas: " + totalHoras;

  alert(stringCarrito);
}

function agregarCurso(idCurso) {
  let existe = carritoCursos.some((curso) => curso.id_curso == idCurso);

  if (existe)
    return alert(
      "El curso seleccionado ya esta en el carrito. \n Seleccione otro curso"
    );

  let curso = arregloCursos.find((curso) => curso.id_curso == idCurso);

  carritoCursos.push(curso);

  return alert("Curso agregado a carrito");
}

function procesarCarrito() {

  if (carritoCursos.length == 0) {

    return alert("No puede procesar su pedido \n Agregue primero un curso al carrito");
  }

  carritoCursos = [];

  return alert("Su solicitud de cursos fue procesada.");
}

// FIN Funciones del programa
