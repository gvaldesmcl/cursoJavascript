console.log('Script cargado OK ...');

const arregloCursos = [
    {
      id_curso: 1,
      nombre_curso: "Introducción a la Ciberseguridad",
      categoria: "TI",
      horas: 150,
      img:"curso_1.jpg",
      popularidad: 5,
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et mauris porta, euismod urna quis, tincidunt tellus. Vivamus id est ut augue aliquam pulvinar."
    },
    {
      id_curso: 2,
      nombre_curso: "Introducción a Phyton",
      categoria: "TI",
      horas: 120,
      img:"curso_2.jpg",
      popularidad: 4,
      descripcion: "Etiam pretium blandit enim in condimentum. Aliquam turpis ex, maximus et gravida sed, pharetra vitae elit. Fusce sed ante ac velit commodo placerat."
    },
    {
      id_curso: 3,
      nombre_curso: "Diseño de Interfaces con UX",
      categoria: "Diseño",
      horas: 80,
      img:"curso_3.jpg",
      popularidad: 3,
      descripcion: "Etiam ornare est eget tortor convallis, sed interdum risus dapibus. Vestibulum vel rhoncus arcu. Ut a nibh sit amet nisl ultricies lacinia vel ut nulla. "
    },
    {
      id_curso: 4,
      nombre_curso: "Introducción a la Reposteria",
      categoria: "Cocina",
      horas: 40,
      img:"curso_4.jpg",
      popularidad: 3,
      descripcion: "Vivamus quis ligula gravida augue lobortis pulvinar. Donec faucibus id ligula sit amet mattis. Sed pharetra pulvinar sem, non congue lacus gravida vel."
    },
    {
      id_curso: 5,
      nombre_curso: "Taller de Cocina Chilena - Niven 1",
      categoria: "Cocina",
      horas: 190,
      img:"curso_5.jpg",
      popularidad: 4,
      descripcion: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
    },
    {
      id_curso: 6,
      nombre_curso: "Adobe Illustrator para Principantes",
      categoria: "Diseño",
      horas: 100,
      img:"curso_6.jpg",
      popularidad: 4,
      descripcion: "Sed efficitur rhoncus mi, vitae commodo enim scelerisque ac. Praesent a efficitur purus, eget mollis quam. Fusce velit orci, mattis nec odio eu, cursus porttitor erat."
    },
    {
      id_curso: 7,
      nombre_curso: "Nutrición Deportiva - Nivel 1",
      categoria: "Deporte",
      horas: 140,
      img:"curso_7.jpg",
      popularidad: 2,
      descripcion: "Aenean malesuada, tortor quis tincidunt eleifend, erat massa mattis ipsum, id interdum quam sem sit amet purus. Curabitur non suscipit arcu."
    },
    {
        id_curso: 9,
        nombre_curso: "Calculo Tensorial I",
        categoria: "Matemáticas",
        horas: 190,
        img:"curso_8.jpg",
        popularidad: 3,
      descripcion: "Curabitur rutrum, massa in porta blandit, erat eros lacinia odio, sed consequat nibh metus sit amet ex. Maecenas a leo hendrerit, maximus lacus porttitor, malesuada magna."
      },
      {
        id_curso: 10,
        nombre_curso: "Matemáticas Discretas I",
        categoria: "Matemáticas",
        horas: 130,
        img:"curso_9.jpg",
      popularidad: 1,
      descripcion: "Quisque euismod sem sed gravida laoreet. Nulla eu odio vel nisl dapibus maximus."
      },
      {
        id_curso: 11,
        nombre_curso: "Geometría I",
        categoria: "Matemáticas",
        horas: 80,
        img:"curso_10.jpg",
        popularidad: 1,
      descripcion: "Proin dictum tellus ut turpis sollicitudin consequat. Proin aliquam posuere ex in aliquet. Nunc non massa ac ligula mattis sodales."
      }
  ];


  // Carga Funcionalidad en Paginas

  //Utilizado en producto.html
  iniciaFichaProducto();

  //utilizado en index.html
  muestraUltimosCursos();

  //utilizado en cursos.html
  iniciaCatalogo();

  // utilizado en carrito.html
  iniciaCarrito();  

// END Carga Funcionalidad en Paginas




  function muestraUltimosCursos(){

    actualizaIconoCarrito();

    try{

        let divUltimosCursos = document.getElementById("divUltimosCursos");

        divUltimosCursos.innerHTML = "";
    
        for (let i = 0; i < 6; i++) {
    
            let nuevaTarjeta = generaTarjetaCurso(arregloCursos[i]);
    
            divUltimosCursos.appendChild(nuevaTarjeta);

        }

    }catch(exception){

      console.log('Problemas en muestraUltimosCursos ...');

    }


  }

  function iniciaCarrito(){
    
    try{

      generaCarrito();

      document.getElementById('btnProcesarCarrito').addEventListener('click', x => procesarCarrito());      

    }catch(exception){

        console.log('Problemas en iniciaCarrito ...');

    }
  }

  function iniciaCatalogo(){

    actualizaIconoCarrito();

    try{

    muestraCatalogo(arregloCursos);

    cargaFiltrosCategorias();    

    let btnFiltrar = document.getElementById('btnFiltrar');

    btnFiltrar.addEventListener('click',filtrarCatalogo);

    }catch(exception){

      console.log('Problemas en iniciaCatalogo...');

    }

  }

  function iniciaFichaProducto(){

    try{

      actualizaIconoCarrito();

      let productoActivo;

      let idProducto = obtenerParametosGet(document.location.search);      

      if(idProducto.id == undefined){
        return null;
      }

      productoActivo = muestraCurso(idProducto.id);
      
      productoActivo = muestraCurso(idProducto.id);

      let imagenCurso = document.getElementById('imgImagen');      
      
      imagenCurso.src = 'assets/images/shop/'+ productoActivo.img;

      document.getElementById('txtNombre').innerText = productoActivo.nombre_curso;

      document.getElementById('txtEstrellas').innerHTML =  'Popularidad: '+asignaPopularidad(productoActivo.popularidad);

      document.getElementById('txtDescripcionCorta').innerText = productoActivo.descripcion;

      document.getElementById('txtHoras').innerText = productoActivo.horas + ' Hrs.';

      document.getElementById('txtCategoria').innerText = productoActivo.categoria;

      document.getElementById('txtDescripcionLarga').innerText = productoActivo.descripcion; 
      
      document.getElementById('btnAgregarCarrito').addEventListener('click',curso => {

      let resultado =  agregarCursoCarrito(productoActivo);

      if(resultado != 'ok'){
        alert('Este curso ya se encuentra en su carrito');
      }      

      });

    }catch(exception){

      console.log('Problemas en iniciaCatalogo...');

    }

  }

  function muestraCatalogo(arrayCatalogo){

    let divCatalogoCursos = document.getElementById("divCatalogoCursos");

    divCatalogoCursos.innerHTML = "";

    arrayCatalogo.forEach(curso =>{

        let nuevaTarjeta = generaTarjetaCursoCatalogo(curso);

        divCatalogoCursos.appendChild(nuevaTarjeta);

    });    

  }

  function filtrarCatalogo(){

    let dropCategoria = document.getElementById('dropCategorias');

    let dropOrden = document.getElementById('dropOrden');

    let arrayCursosFiltrados = [];

    if(parseInt(dropCategoria.value) != -1){

        arrayCursosFiltrados = arregloCursos.filter(curso => String(curso.categoria).toLowerCase() == String(dropCategoria.value).toLowerCase());

    }        

    if(parseInt(dropOrden.value) != -1){

        if(arrayCursosFiltrados.length == 0){
          arrayCursosFiltrados = arregloCursos
        }

        if(arrayCursosFiltrados.length > 0){
            arrayFiltradoOrden = arrayCursosFiltrados;
        }

        switch(dropOrden.value){

          case 'pop':
            arrayCursosFiltrados.sort(({popularidad:a}, {popularidad:b}) => b - a);
            break;

            case 'asc':
              arrayCursosFiltrados.sort(({nombre_curso:a}, {nombre_curso:b}) => b.localeCompare(a));
              break;

              case 'desc':
                arrayCursosFiltrados.sort(({nombre_curso:a}, {nombre_curso:b}) => a.localeCompare(b));
                break;

                case 'max':
                  arrayCursosFiltrados.sort(({horas:a}, {horas:b}) => b - a);
                  break;

                  case 'min':
                    arrayCursosFiltrados.sort(({horas:a}, {horas:b}) => a - b);                    
                    break;


        }


    }

    arrayFiltradoOrden = arrayCursosFiltrados;

    muestraCatalogo(arrayFiltradoOrden);

  }

  function cargaFiltrosCategorias(){

    let arrayCategorias = [];

    arregloCursos.forEach(curso => {

        if(!arrayCategorias.includes(curso.categoria)){
            arrayCategorias.push(curso.categoria);
        }

    });
    
    let dropCategorias = document.getElementById('dropCategorias');

    dropCategorias.innerHTML = '';

    var opt = document.createElement('option');

    opt.value = '-1';

    opt.innerHTML = 'Categoria';

    opt.disabled = true;

    opt.selected = true;

    dropCategorias.appendChild(opt);
    
    arrayCategorias.forEach(categoria =>{

        var opt = document.createElement('option');

        opt.value = String(categoria).toLowerCase();
    
        opt.innerHTML = categoria;        
    
        dropCategorias.appendChild(opt);

    });


  }

  
  function muestraCurso(id){

    try{

      let cursoEncontrado = 'Curso no encontrado';

      arregloCursos.forEach(curso=>{         

        if (curso.id_curso == parseInt(id)) {
          
          cursoEncontrado =  curso 

        }
      });

      return cursoEncontrado;

      }catch(exception){

        return null;

      }

  }


  function agregarCursoCarrito(curso){

    let carrito = [...obtenerCarrito()];

    let existeEnCarrito = false;

    let resultado = carrito.findIndex(cursoBuscado => {

      if(cursoBuscado.id_curso == curso.id_curso){
        existeEnCarrito = true;
      }

    });

    if(!existeEnCarrito){

      carrito.push(curso);

    actualizaCarrito(carrito);    

    return 'ok';

    }else{

      return 'existe'

    }

  }

  function obtenerCarrito(){

    let carrito = localStorage.getItem('carrito');

    if(carrito == null){

      localStorage.setItem('carrito',JSON.stringify([]));  

    }

    return JSON.parse(localStorage.getItem('carrito'));

  }

  function actualizaIconoCarrito(){

    let carrito = [...obtenerCarrito()];

    document.getElementById('lblTamanoCarrito').innerText = "("+carrito.length+")";

  }
  
  function actualizaCarrito(carrito){

    localStorage.setItem('carrito',JSON.stringify(carrito));  

    actualizaIconoCarrito();

  }

  function eliminaCursoCarrito(cursoEliminar){

    let carrito = [...obtenerCarrito()];

    let indiceCurso = carrito.findIndex(curso => curso.id_curso == cursoEliminar.id_curso);    

    if(indiceCurso != -1){

      let nuevoCarrito = carrito.splice(indiceCurso,1);

      actualizaCarrito(carrito);

      generaCarrito();

      actualizaIconoCarrito();

    }

  }
  

  function generaTarjetaCurso(dataTarjeta){  
    
    var div = document.createElement("div");

    div.innerHTML = `<div class="col-sm-6 col-md-3 col-lg-3">
                        <div class="shop-item">
                            <div class="shop-item-image"><img src="assets/images/shop/${dataTarjeta.img}" alt="Curso ${dataTarjeta.nombre_curso}"/>
                                <div class="shop-item-detail"><a class="btn btn-round btn-b" href="producto.html?id=${dataTarjeta.id_curso}"><span class="icon-search">Ver Curso</span></a></div>
                                </div>
                            <h4 class="shop-item-title font-alt"><a href="producto.html?id=${dataTarjeta.id_curso}">${dataTarjeta.nombre_curso}</a></h4>${dataTarjeta.horas} Hrs.
                            </div>
                    </div>`;

    return div;

  }

  function generaTarjetaCursoCatalogo(dataTarjeta){    

    var div = document.createElement("div");

    div.innerHTML = `<div class="col-sm-6 col-md-4 col-lg-4">
                        <div class="shop-item">
                            <div class="shop-item-image"><img src="assets/images/shop/${dataTarjeta.img}" alt="Curso ${dataTarjeta.nombre_curso}"/>
                            <div class="shop-item-detail"><a class="btn btn-round btn-b" href="producto.html?id=${dataTarjeta.id_curso}"><span class="icon-search">Ver Curso</span></a></div>
                            </div>
                                <h4 class="shop-item-title font-alt"><a href="producto.html?id=${dataTarjeta.id_curso}">${dataTarjeta.nombre_curso}</a></h4>Categoria: ${dataTarjeta.categoria} (${dataTarjeta.horas} Hrs)
                                <h3 class="shop-item-title font-alt">${asignaPopularidad(parseInt(dataTarjeta.popularidad))}</h3>
                            </div>
                    </div>`;

    return div;

  }

  function generaCarrito(){

    let tablaCarrito = document.getElementById('tablaCarrito');

    let totalHoras = 0;
    
    tablaCarrito.innerHTML = '';

    let carrito = [...obtenerCarrito()];    

    if(carrito.length == 0){

      let fila = generaFilaCarrito(null);

      tablaCarrito.appendChild(fila);

    }else{

      carrito.forEach(curso =>{

        let fila = generaFilaCarrito(curso);
  
        tablaCarrito.appendChild(fila); 
  
        document.getElementById('btnEliminaCurso_'+curso.id_curso).addEventListener('click', x => eliminaCursoCarrito(curso));
  
        totalHoras +=  curso.horas;
  
      });

    }

    document.getElementById('labelTotalHrsCarrito').innerText = totalHoras.toString() + ' Hrs.'       

  }

  function procesarCarrito(){

    if(obtenerCarrito().length == 0){

      return alert('Su carrito esta vacio ...');

    }

    let carrito = [];

    actualizaCarrito(carrito);

    alert('Su pedido de cursos se ha procesado con éxito');

    window.location.href = "index.html";

  }

  function generaFilaCarrito(filaCarrito){

    if(filaCarrito == null){

      let tr = document.createElement("tr");

      tr.innerHTML = `<td class="hidden-xs" colspan="4">Su carrito esta vacio ...</td>`;        
  
      return tr;

    }

    let tr = document.createElement("tr");

    tr.innerHTML = `<td class="hidden-xs"><a href="#"><img src="assets/images/shop/${filaCarrito.img}" alt=" Imagen curso ${filaCarrito.nombre_curso}"/></a></td>
                      <td>
                        <h5 class="product-title font-alt">${filaCarrito.nombre_curso}</h5>
                      </td>
                      <td class="hidden-xs">
                        <h5 class="product-title font-alt">${filaCarrito.horas} Hrs.</h5>
                      </td><td class="pr-remove"><button id="btnEliminaCurso_${filaCarrito.id_curso}"><i class="fa fa-times"></i></button></td>`;        

    return tr;

  }

  function asignaPopularidad(popularidad){

    switch(popularidad){

        case 1:
            return '<i class="fa fa-star"></i>';
        break;

        case 2:
            return '<i class="fa fa-star"></i><i class="fa fa-star"></i>';
        break;

        case 3:
            return '<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>';
        break;
        
        case 4:
            return '<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>';
        break;
        
        case 5:
            return '<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>';
        break;
        
        default:
            return '';
        

    }

  } 


  function obtenerParametosGet(url) {

    url = url.split('+').join(' ');

    var params = {},
        tokens,
        re = /[?&]?([^=]+)=([^&]*)/g;

    while (tokens = re.exec(url)) {

        params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);

    }

    return params;

}