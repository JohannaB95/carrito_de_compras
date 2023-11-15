//Se carga la librería colors para permitir el uso de estilos de colores en la terminal.
require('colors');

//Se incluye el módulo fs que permite gestionar el sistema de archivos.
const fs = require('fs');

/*Se cargan los datos del archivo datos.json en la variable datosArchivo. Esto es posible debido al uso de require,
 que puede cargar archivos JSON en Node.js.*/
let datosArchivo = require('./datos.json');

//Se carga el código que contiene el archivo 'menu.js' en la carpeta 'proy_modules'.
const { mostrarMenu, preguntarNuevoProducto, digitarCodigo, digitarNombre, digitarInventario, digitarPrecio,
    pausa, preguntarOtroProducto, preguntarNuevoPedido, ingresarCodigo, ingresarNombre, ingresarUnidades,
    ingresarPrecio, preguntarOtroPedido, datosCliente, CopiaRespaldo, eliminarProducto, recuperarDatos } = require('./proy_modules/menu.js');

//Se declara una función flecha llamada main y que es asíncrona
const main = async () => {

    // Limpia la consola antes de imprimir el menú principal
    console.clear();

    // Se solicita imprimir un encabezado en la consola y que sea de color rojo, se añade diseño.
    console.log(`\n★★★★★★★★★★★★★★★★★★★★★★`.red);
    console.log(`★   Menú Principal   ★`.red);
    console.log(`★★★★★★★★★★★★★★★★★★★★★★\n`.red);

    //Se define la clase Producto
    class Producto {

        // Se declaran los atributos de la clase y que serán privados y son el código, nombre, inventario y precio del producto
        #codigoProducto;
        #nombreProducto;
        #inventarioProducto;
        #precioProducto;

        // Se llama al constructor que inicializa los atributos de la clase, se ejecuta al crear una nueva instancia de Producto
        constructor() {

            // Se inicializa el código del producto como un string vacio
            this.#codigoProducto = ' ';
            // Se inicializa el nombre del producto como un string vacio
            this.#nombreProducto = ' ';
            // Se inicializa la cantidad del inventario del producto como 0
            this.#inventarioProducto = 0;
            //Se inicializa el precio del producto como 0
            this.#precioProducto = 0;
        }

        //Se crea un método setter para establecer el valor del atributo #codigoProducto
        set setCodigoProducto(value) {
            this.#codigoProducto = value;
        }

        //Se crea un método getter para obtener el valor del atributo #codigoProducto
        get getCodigoProducto() {
            return this.#codigoProducto;
        }

        //Se crea un método setter para establecer el valor del atributo #nombreProducto
        set setNombreProducto(value) {
            this.#nombreProducto = value;
        }

        //Se crea un método getter para obtener el valor del atributo #nombreProducto
        get getNombreProducto() {
            return this.#nombreProducto;
        }

        //Se crea un método setter para establecer el valor del atributo #inventarioProducto
        set setInventarioProducto(value) {
            this.#inventarioProducto = value;
        }

        //Se crea un método getter para obtener el valor del atributo #inventarioProducto
        get getInventarioProducto() {
            return this.#inventarioProducto;
        }

        //Se crea un método setter para establecer el valor del atributo #precioProducto
        set setPrecioProducto(value) {
            this.#precioProducto = value;
        }

        //Se crea un método getter para obtener el valor del atributo #precioProducto
        get getPrecioProducto() {
            return this.#precioProducto;
        }
    }

    //Se define la clase ProductosTienda
    class ProductosTienda {

        // Se declara un atributo privado llamado listaProductos
        #listaProductos;

        // Constructor que inicializa el atributo #listaProductos como un arreglo vacío
        constructor() {
            this.#listaProductos = [];
        }

        // Se crea un método getter para obtener la lista de productos de #listaProductos
        get getListaProductos() {
            return this.#listaProductos;
        }

        /*Leer los datos del archivo Json
               Serializar para trabajar los datos como un arreglo de objetos de clase Producto*/
        // Se crea un método llamado cargarArchivoProductos que es una función flecha sin parámetros
        cargarArchivoProductos = async () => {

            // Limpia la consola antes de imprimir la cantidad de 
            console.clear();

            //Se imprime en la consola un mensaje que indica que se visualizara en este caso la cantidad de productos
            console.log(`♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦`.cyan);
            console.log(`♦   `.cyan + `Cantidad de productos`.bgCyan + `   ♦`.cyan);
            console.log(`♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦\n`.cyan);

            productosTienda.mostrarProductos();
            //Se crea una variable llamada contador que se inicia en 0
            let contador = 0;

            //Se utiliza un if para verificar si existe algún dato en el archivo datosArchivo
            if (datosArchivo.length > 0) {
                // Se utiliza un forEach para iterar cada elemento que se encuentre en el archivo
                /*El parámetro objeto dentro de la función flecha en el forEach representa cada elemento individual 
                en el arreglo datosArchivo a medida que se itera.*/
                datosArchivo.forEach(objeto => {
                    //El contador aumentara cada vez +1
                    contador++;

                    // Se crea una nueva instancia de la clase Producto
                    let producto = new Producto;

                    // Se asignan los valores del objeto a cada uno de los atributos 

                    /*Se llama al método setCodigoProducto del objeto producto y se le asigna el valor de la propiedad 
                    codigoProducto del objeto objeto*/
                    producto.setCodigoProducto = objeto.codigoProducto;
                    /*Se llama al método setNombreProducto del objeto producto y se le asigna el valor de la propiedad
                    nombreProducto del objeto objeto*/
                    producto.setNombreProducto = objeto.nombreProducto;
                    /*Se llama al método setInventarioProducto del objeto producto y se le asigna el valor de la propiedad 
                    inventarioProducto del objeto objeto*/
                    producto.setInventarioProducto = objeto.inventarioProducto;
                    /*Se llama al método setPrecioProducto del objeto producto y se le asigna el valor de la propiedad 
                    precioProducto del objeto objeto*/
                    producto.setPrecioProducto = objeto.precioProducto;

                    // Agrega el producto a la lista de productos en la clase ProductosTienda
                    this.#listaProductos.push(producto);
                });

                //Se imprime en la consola el número de productos cargados y se añade diseño a la interfaz
                console.log(`♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦`.red);
                console.log(`♦ `.red + `Total de productos cargados ==> `.bgRed + ` ${contador}`.bgRed + ` ♦`.red);
                console.log(`♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦`.red);
            } else {
                //En caso de que el archivo este vacio se imprime en la consola el siguiente mensaje
                console.log(`♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦`.red);
                console.log(`♦ `.red + `Error, el archivo datos.json no contiene datos`.bgRed + ` ♦`.red);
                console.log(`♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦`.red);
            }
        }

        //Se crea un método llamado mostrarProductos que es una función flecha asincrónica sin parámetros
        mostrarProductos() {

            /*Itera sobre cada producto en la lista y se obtienen los valores de cada uno de los atributos, luego se imprime 
             la información en la consola siguiendo el orden en el que se están especificando*/
            this.getListaProductos.forEach(producto => {
                console.log(`­♦    `.yellow + producto.getCodigoProducto + `     ­♦   `.yellow
                    + producto.getNombreProducto + `      ­♦   `.yellow +
                    +  producto.getInventarioProducto + `      ­♦   `.yellow +
                    +  producto.getPrecioProducto + `     ­♦   `.yellow);
            })
        }

        //Se crea un método llamado grabarCopiaRespaldo que es una función flecha de tipo asincronica sin parámetros
        grabarCopiaRespaldo = async () => {

            // Limpia la consola antes de imprimir los siguientes mensajes y diseños de cada uno
            console.clear();

            //Se imprime en la consola un mensaje que indica que se realizara una copia de respaldo
            console.log(`\n★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★`.cyan);
            console.log(`★  `.cyan + `Grabar Copia de Respaldo`.bgCyan + `  ★`.cyan);
            console.log(`★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★`.cyan);

            /*Se declara una variable constante llamada nuevaCopia que almacenará el valor resuelto de la
            promesa contenida en CopiaRespaldo, que es la confirmación o negación para realizar una copia de
            respaldo*/
            const nuevaCopia = await CopiaRespaldo();

            /*Se verifica si el valor de nuevaCopia es true utilizando una declaración if. Esto indica que el siguiente
            bloque de código se ejecutará si nuevaCopia es evaluada como verdadero.*/
            if (nuevaCopia === true) {
                /*Se declara una variable de tipo constante llamada nombreArchivo que contendra los datos de un 
                archivo llamado datos.json*/
                const nombreArchivo = 'datos.json';
                /*Se lee el contenido del archivo datos.json que esta almacenado en la variable nombreArchivo y 
                que utiliza una codificación de caracteres utf-8, cuya llamada se ejecutara al completar la revisión de
                errores y que almacenara el contenido leido en data*/
                fs.readFile(nombreArchivo, 'utf-8', (err, data) => {
                    // Si hay un error al leer el archivo, se imprime un mensaje de error en la consola
                    if (err) {
                        console.log('Error al leer el archivo', err);
                        // Si la lectura del archivo fue exitosa, se procede a crear una copia de respaldo
                    } else {
                        /*Se declara una variable constante llamada fecha que estara guardando el valor de la fecha 
                        actual en formato ISO y extrayendo la parte de la fecha (sin la hora)*/
                        const fecha = new Date().toISOString().split('T')[0];
                        /*Se declara una variable constante llamada nuevoArchivo que estara almacenando el nombre del
                        archivo nuevo que será la copia del archivo original*/
                        const nuevoArchivo = `datos_copia_${fecha}.json`;
                        /* Se escribe el contenido del nuevo archivo `datos_copia_${fecha}.json`, almacenado 
                        en la variable nuevoArchivo. Se convierte el objeto JavaScript (obtenido al parsear el contenido original del archivo) 
                        a una cadena de texto JSON con formato legible (agregando sangría).*/
                        fs.writeFile(nuevoArchivo, JSON.stringify(JSON.parse(data), null, 2), err => {
                            // Si hay un error al leer el archivo, se imprime un mensaje de error en la consola
                            if (err) {
                                console.log(`\n♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦`.red);
                                console.log(`♦ `.red + `Error al leer el archivo`.bgRed + ` ♦`.red, err);
                                console.log(`♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦`.red);
                                // Si la lectura del archivo es exitosa, se imprime un mensaje indicando que la copia de seguridad se ha completado
                            } else {
                                console.log(`\n♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦`.red);
                                console.log(`♦  `.red + `Copia de seguridad de ${nombreArchivo} completada`.bgRed + ` ♦`.red);
                                console.log(`♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦`.red);
                            }
                        })
                    }
                })
            }
        }

        //Se crea un método llamado reparacionDatos que es una función flecha de tipo asincronica sin parámetros
        reparacionDatos = async () => {

            // Limpia la consola antes de imprimir los siguientes mensajes y diseños de cada uno
            console.clear();

            //Se imprime en la consola un mensaje que indica que es la sección de reparación de datos.
            console.log(`\n★★★★★★★★★★★★★★★★★★★★★★★★★`.cyan);
            console.log(`★  `.cyan + `Reparación de datos`.bgCyan + `  ★`.cyan);
            console.log(`★★★★★★★★★★★★★★★★★★★★★★★★★`.cyan);

            /*Se declara una variable constante llamada datos que almacenará el valor resuelto de la
            promesa contenida en recuperarDatos, que es la confirmación o negación para realizar la restauración
            de alguna de las copias de seguridad que se encuentren disponibles*/
            const datos = await recuperarDatos();

            // Si existen datos en la copia de seguridad seleccionada
            if (datos) {
                //Se muestran los datos recuperados en la consola
                console.log(`Los datos de la copia de seguridad seleccionada son:\n`.green);
                console.log(datos);
                //Se imprime un mensaje en la consola indicando que la copia de seuridad se ha recuperado bien
                console.log(`♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦`.red);
                console.log(`♦ `.red + `La copia de seguridad se ha recuperado exitosamente`.bgRed + ` ♦`.red);
                console.log(`♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦`.red);

                //se escriben y se guardan los datos recuperados en el archivo datos.json
                fs.writeFileSync('datos.json', JSON.stringify(datos, null, 2));
                //Se imprime un mensaje en la consola indicando que los datos se han guardado en datos.json.
                console.log(`♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦`.red);
                console.log(`♦ `.red + `Los datos se han guardado en el archivo datos.json.`.bgRed + ` ♦`.red);
                console.log(`♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦`.red);
            } else {
                // Si no se selecciona ninguna copia de seguridad, se imprime un mensaje indicando eso
                console.log(`\n♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦`.red);
                console.log(`♦ `.red + `No se seleccionó ninguna copia de seguridad.`.bgRed + ` ♦`.red);
                console.log(`♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦`.red);
            }
        }

        //Se crea un método llamado borrarProducto que es una función flecha de tipo asincronica sin parámetros
        borrarProducto = async () => {

            // Limpia la consola antes de imprimir los siguientes mensajes y diseños de cada uno
            console.clear();

            //Se imprime en la consola un mensaje que indica que es la sección de Eliminar un Producto.
            console.log(`\n★★★★★★★★★★★★★★★★★★★★★★★★★★`.cyan);
            console.log(`★  `.cyan + `Eliminar un Producto`.bgCyan + `  ★`.cyan);
            console.log(`★★★★★★★★★★★★★★★★★★★★★★★★★★`.cyan);

            //Se llama al método mostrarProductos del objeto productosTienda para que muestre la lista de productos
            productosTienda.mostrarProductos();

            /*Se declara una variable constante llamada codigoProducto que almacenará el valor resuelto de la
            promesa contenida en eliminarProducto, que es la confirmación o negación del ingreso del
            nuevo producto*/
            const codigoProducto = await eliminarProducto();

            // Si se proporciona un código de producto válido
            if (codigoProducto) {
                // Se declara una variable llamada listaProductos que almacena la lista de productos desde el archivo
                const listaProductos = datosArchivo;
                /* Se declara una variable constante llamada productosFiltrados, la cual utiliza el método filter
                para excluir todos los productos de la lista de productos que contengan un código específico, en este
                caso, el proporcionado por el usuario.*/
                const productosFiltrados = listaProductos.filter(
                    /*Se define una función flecha con un parámetro producto. La condición dice que para cada elemento
                     (producto) en el array sobre el cual se está iterando, se verifica si el código del producto 
                     (producto.codigoProducto) no es igual al código proporcionado por el usuario (codigoProducto). */
                    (producto) => producto.codigoProducto !== codigoProducto
                );
                /*Si la longitud de productosFiltrados es menor que la longitud de listaProductos, significa que al 
                menos un producto fue eliminado en la operación de filtrado. */
                if (productosFiltrados.length < listaProductos.length) {

                    //Se imprime un mensaje indicando que el producto fue eliminado
                    console.log(`\n♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦`.red);
                    console.log(`♦ `.red + `Producto eliminado con éxito.`.bgRed + ` ♦`.red);
                    console.log(`♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦`.red);

                    // Se utiliza fs.writeFile para escribir en el archivo 'datos.json'
                    // JSON.stringify convierte el array productosFiltrados a una cadena JSON con formato legible (null, 2)
                    // El tercer argumento de writeFile es una función de retorno de llamada que maneja cualquier error
                    fs.writeFile('datos.json', JSON.stringify(productosFiltrados, null, 2), (error) => {
                        // Si hay un error al escribir en el archivo, se imprime en la consola
                        if (error) {
                            console.error(error);
                        }
                        // Si no hay errores al escribir en el archivo, se actualiza la variable datosArchivo
                        datosArchivo = productosFiltrados;
                    });
                } else {
                    //Si se digita un código que no se encuentra en la lista, se imprime un mensaje indicando que el producto no existe
                    console.log(`\n♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦`.red);
                    console.log(`♦ `.red + `El producto no existe en la lista.`.bgRed + ` ♦`.red);
                    console.log(`♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦`.red);
                }
            } else {
                //Si se dice que no a la pregunta de eliminar un producto, se imprime un mensaje indicando que no se elimino nada
                console.log(`\n♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦`.red);
                console.log(`♦   `.red + `No se eliminó ningún producto.`.bgRed + `   ♦`.red);
                console.log(`♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦`.red);
            }
        };

        //Se crea un nuevo método llamado nuevoIngreso que es una función flecha de tipo asincronica sin parámetros
        nuevoIngreso = async () => {

            // Limpia la consola antes de imprimir los siguientes mensajes y diseños de cada uno
            console.clear();

            //Se imprime en la consola un mensaje que indica que se grabara un nuevo producto
            console.log(`\n★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★`.cyan);
            console.log(`★  `.cyan + `Guardar un Nuevo Producto`.bgCyan + `  ★`.cyan);
            console.log(`★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★`.cyan);

            //Se llama al método mostrarProductos del objeto productosTienda para que muestre la lista de productos
            productosTienda.mostrarProductos();

            /*Se declara una variable constante llamada ingresarNuevo que almacenará el valor resuelto de la
            promesa contenida en preguntarNuevoProducto, que es la confirmación o negación del ingreso del
            nuevo producto*/
            const ingresarNuevo = await preguntarNuevoProducto();

            /*Se verifica si el valor de ingresarNuevo es true utilizando una declaración if. Esto indica que el siguiente
            bloque de código se ejecutará si ingresarNuevo es evaluado como verdadero.*/
            if (ingresarNuevo === true) {

                //Se usa un bucle que se estará ejecutando indefinidamente mientras sea verdadero
                while (true) {

                    // Se declara una variable llamada codigo con un valor inicial de un string vacío
                    let codigo = ' ';
                    // Bucle que se ejecuta al menos una vez y se repite hasta que se ingresa un código válido
                    do {
                        // Espera a que el usuario ingrese un código y lo asigna a la variable 'codigo'
                        codigo = await digitarCodigo();
                        // Se repite mientras 'codigo' sea un string vacío
                    } while (!(codigo !== ''));

                    // Se declara una variable llamada nombre con un valor inicial de un string vacío
                    let nombre = ' ';
                    // Bucle que se ejecuta al menos una vez y se repite hasta que se ingresa un nombre válido
                    do {
                        // Espera a que el usuario ingrese un nombre y lo asigna a la variable 'nombre'
                        nombre = await digitarNombre();
                        // Se repite mientras 'nombre' sea un string vacío
                    } while (!(nombre !== ''));

                    // Se declara una variable llamada inventario con un valor inicial de un string vacío
                    let inventario = '';
                    // Bucle  que se ejecuta al menos una vez y se repite hasta que se ingresa un inventario válido
                    do {
                        // Espera a que el usuario ingrese un inventario y lo asigna a la variable 'inventario'
                        inventario = await digitarInventario();
                        // Se repite mientras 'inventario' sea un string vacío
                    } while (!(inventario !== ''));

                    // Se declara una variable llamada precio con un valor inicial de un string vacío
                    let precio = '';
                    // Bucle  que se ejecuta al menos una vez y se repite hasta que se ingresa un precio válido
                    do {
                        // Espera a que el usuario ingrese un precio y lo asigna a la variable 'precio'
                        precio = await digitarPrecio();
                        // Se repite mientras 'precio' sea un string vacío
                    } while (!(precio !== ''));

                    // Se crea un nuevo objeto Producto y se les asigna los valores ingresados por el usuario
                    const producto = new Producto();

                    //Se asigna el valor del código del producto con el valor de la variable codigo.
                    producto.setCodigoProducto = codigo;
                    //Se asigna el valor del nombre del producto con el valor de la variable nombre
                    producto.setNombreProducto = nombre;
                    //Se asigna el valor del inventario del producto con el valor de la variable inventario.
                    producto.setInventarioProducto = inventario;
                    //Se asigna el valor del precio del producto con el valor de la variable precio.
                    producto.setPrecioProducto = precio;

                    // Se llama al método guardarProducto para guardar el producto de la clase ProductosTienda
                    this.guardarProducto(producto);

                    /*Se declara una variable constante llamada continuar que almacenará el valor resuelto de la
                    promesa contenida en preguntarOtroProducto, que es la confirmación o negación del ingreso de
                    continuar guardando más productos */
                    const continuar = await preguntarOtroProducto();

                    /* La variable continuar se evalúa en la condición del if. Si continuar es false, el bucle se romperá 
                    con la palabra clave break. */
                    if (!continuar) {
                        break;
                    }
                }
            }
        }

        /*Escribir datos en un archivo almacenado en unidad
        Deserializar para convertir un arreglo de objetos de clase en cadena Json
        Se crea un método llamado guardarProducto que tiene como parámetro a producto*/
        guardarProducto(producto) {

            /*Se usa el método push() para agregar uno o más elementos al final del arreglo. En este caso, se agrega
            el objeto producto al final del arreglo this.#listaProductos */
            this.#listaProductos.push(producto);

            // Convierte objetos de clase a objetos de JavaScript
            //Se crea un nuevo arreglo
            /*Es una función de flecha que toma un argumento producto. La función devuelve un objeto que se 
            asigna a la variable instanciaClaseAObjetos. El objeto devuelto contiene una propiedad con el nombre 
            de la clave producto. */
            const instanciaClaseAObjetos = this.#listaProductos.map(producto => {
                // Mapea cada objeto de clase a un objeto de JavaScript con claves específicas
                //Devuelve un objeto con las propiedades del producto
                return {
                    /*Asigna el valor de la propiedad codigoProducto del objeto producto a la clave codigoProducto 
                   en el objeto devuelto*/
                    codigoProducto: producto.getCodigoProducto,
                    /*Asigna el valor de la propiedad nombreProducto del objeto producto a la clave nombreProducto
                    en el objeto devuelto*/
                    nombreProducto: producto.getNombreProducto,
                    /*Convierte el valor de la propiedad inventarioProducto del objeto producto en un número 
                    utilizando la función Number y lo asigna a la clave inventarioProducto en el objeto devuelto.*/
                    inventarioProducto: Number(producto.getInventarioProducto),
                    /*Convierte el valor de la propiedad precioProducto del objeto producto en un número utilizando
                    la función Number y lo asigna a la clave precioProducto en el objeto devuelto. */
                    precioProducto: Number(producto.getPrecioProducto)
                };
            });
            // Se utiliza JSON.stringify para convertir los objetos de JavaScript en una cadena de texto JSON
            const cadenaJson = JSON.stringify(instanciaClaseAObjetos, null, 2);
            //Se declara una variable que va a almacenar el archivo en el que se va a guardar la información
            const nombreArchivo = 'datos.json';

            /*Se utiliza para escribir datos en un archivo de manera sincrónica. El nombre del archivo en el que 
            se escribirán los datos. La cadena de texto JSON que se va a escribir en el archivo. La codificación 
            de caracteres que se utilizará al escribir el archivo.*/
            fs.writeFileSync(nombreArchivo, cadenaJson, 'UTF-8');

            // Se imprime un mensaje indicando que los datos se han guardado en un archivo llamado datos.json
            console.log(`\n♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦`.cyan);
            console.log(`♦   `.cyan + `Datos guardados en ${nombreArchivo}`.bgCyan + `   ♦`.cyan);
            console.log(`♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦\n`.cyan);
        }
    }

    //Se define la clase CarritoCompras
    class CarritoCompras {

        /*Se declaran los atributos de la clase y que serán privados y son el nombre del cliente, el número de 
        identificaión y el teléfono*/
        #nombreCliente;
        #numeroIdentificacion;
        #telefono;

        // Se llama al constructor que inicializa los atributos de la clase
        constructor() {
            this.nombreCliente = ' ';
            this.numeroIdentificacion = '';
            this.telefono = '';
            this.productos = [];
        }

        //Se crea un método setter para establecer el valor del atributo #nombreCliente
        set setNombreCliente(value) {
            this.#nombreCliente = value;
        }

        //Se crea un método getter para obtener el valor del atributo #nombreCliente
        get getNombreCliente() {
            return this.#nombreCliente;
        }

        //Se crea un método setter para establecer el valor del atributo #numeroIdentificacion
        set setNumeroIdentificacion(value) {
            this.#numeroIdentificacion = value;
        }

        //Se crea un método getter para obtener el valor del atributo #numeroIdentificacion
        get getNumeroIdentificacion() {
            return this.#numeroIdentificacion;
        }

        //Se crea un método setter para establecer el valor del atributo #telefono
        set setTelefono(value) {
            this.#telefono = value;
        }

        //Se crea un método getter para obtener el valor del atributo #telefono
        get getTelefono() {
            return this.#telefono;
        }

        //Se crea un nuevo método llamado nuevoPedido que es una función flecha de tipo asincronica sin parámetros
        nuevoPedido = async () => {

            // Limpia la consola antes de imprimir los siguientes mensajes y diseños de cada uno
            console.clear();

            //Se imprime en la consola un mensaje que indica que se realizara un nuevo pedido
            console.log(`\n★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★`.cyan);
            console.log(`★  `.cyan + `Realizar un Nuevo Pedido`.bgCyan + `  ★`.cyan);
            console.log(`★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★`.cyan);

            //Se llama al método mostrarProductos del objeto productosTienda para que muestre la lista de productos
            productosTienda.mostrarProductos();

            /*Se declara una variable constante llamada ingresarNuevo que almacenará el valor resuelto de la
            promesa contenida en preguntarNuevoPedido, que es la confirmación o negación del ingreso del
            nuevo pedido*/
            const ingresarNuevo = await preguntarNuevoPedido();

            /*Se verifica si el valor de ingresarNuevo es true utilizando una declaración if. Esto indica que el siguiente }
            bloque de código se ejecutará si ingresarNuevo es evaluado como verdadero.*/
            if (ingresarNuevo === true) {
                //Se usa un bucle que se estará ejecutando indefinidamente mientras sea verdadero
                while (true) {

                    // Se declara una variable llamada codigo con un valor inicial de un string vacío
                    let codigo = ' ';
                    // Bucle  que se ejecuta al menos una vez y se repite hasta que se ingresa un codigo válido
                    do {
                        // Espera a que el usuario ingrese el codigo y lo asigna a la variable 'codigo'
                        codigo = await ingresarCodigo();
                        // Se repite mientras 'codigo' sea un string vacío
                    } while (!(codigo !== ''));

                    // Se declara una variable llamada nombre con un valor inicial de un string vacío
                    let nombre = ' ';
                    // Bucle  que se ejecuta al menos una vez y se repite hasta que se ingresa un nombre válido
                    do {
                        // Espera a que el usuario ingrese el nombre y lo asigna a la variable 'nombre'
                        nombre = await ingresarNombre();
                        // Se repite mientras 'nombre' sea un string vacío
                    } while (!(nombre !== ''));

                    // Se declara una variable llamada unidades con un valor inicial de un string vacío
                    let unidades = '';
                    // Bucle  que se ejecuta al menos una vez y se repite hasta que se ingresan unidades válidas
                    do {
                        // Espera a que el usuario ingrese el unidades y lo asigna a la variable 'unidades'
                        unidades = await ingresarUnidades();
                        // Se repite mientras 'unidades' sea un string vacío
                    } while (!(unidades !== ''));

                    // Se declara una variable llamada precio con un valor inicial de un string vacío
                    let precio = '';
                    // Bucle  que se ejecuta al menos una vez y se repite hasta que se ingresa un precio válido
                    do {
                        // Espera a que el usuario ingrese el precio y lo asigna a la variable 'precio'
                        precio = await ingresarPrecio();
                        // Se repite mientras 'precio' sea un string vacío
                    } while (!(precio !== ''));

                    //Se agrega el producto al array de productos
                    this.productos.push({
                        //Se asigna el valor de la variable codigo a la propiedad codigo del nuevo objeto.
                        codigo: codigo,
                        //Se asigna el valor de la variable nombre a la propiedad nombre del nuevo objeto.
                        nombre: nombre,
                        //Se asigna el valor de la variable unidades a la propiedad unidades del nuevo objeto.
                        unidades: unidades,
                        //Se asigna el valor de la variable precio a la propiedad precio del nuevo objeto.
                        precio: precio,
                    });

                    /*Se declara una variable constante llamada continuar que almacenará el valor resuelto de la
                    promesa contenida en preguntarOtroPedido, que es la confirmación o negación del ingreso de
                    continuar realizando un pedido*/
                    const continuar = await preguntarOtroPedido();

                    /* La variable continuar se evalúa en la condición del if. Si continuar es false, el bucle se romperá 
                    con la palabra clave break. */
                    if (!continuar) {
                        break;
                    }
                }
            }
        }

        //Se crea un nuevo método llamado imprimirFactura que es una función flecha de tipo asincronica sin parámetros
        imprimirFactura = async () => {

            // Limpia la consola antes de imprimir los siguientes mensajes y diseños de cada uno
            console.clear();

            //Se imprime en la consola un mensaje que indica que se realizara la impresión de la factura
            console.log(`\n★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★`.cyan);
            console.log(`★      `.cyan + `Impresión factura`.bgCyan + `     ★`.cyan);
            console.log(`★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★`.cyan);

            /*Se declara un arreglo de tipo constante que contiene las propiedades nombreCliente, numeroIdentificacion
            y telefono. Estas propiedades se asignarán a sus respectivos valores cuando la promesa que contiene 
            await datosCliente(); sea resuelta */
            const { nombreCliente, numeroIdentificacion, telefono } = await datosCliente();

            /*Se imprime un encabezado con un titulo de factura, el nombre del cliente, el número de identificación
            y el teléfono, y los encabezados de los elementos que componen la factura y la interfaz que se le añadio*/
            console.log(`\n★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★`.magenta);
            console.log(`★                    `.cyan + `FACTURA DE COMPRA`.bgMagenta + `                       ★`.magenta)
            console.log(`★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★`.magenta);
            console.log(`★              `.magenta + `Nombre del cliente: ${nombreCliente}`.cyan + `                ★`.magenta);
            console.log(`★              `.magenta + `Identificación: ${numeroIdentificacion}`.cyan + `                ★`.magenta);
            console.log(`★              `.magenta + `Teléfono: ${telefono}`.cyan + `                ★`.magenta);
            console.log(`★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★`.magenta);
            console.log(`★   `.magenta + `Código |    Producto    | Cantidad |  Precio |  Total `.cyan + `   ★`.magenta);
            console.log(`★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★`.magenta);
            //Se declara una variable llamada total con un valor inicial de 0
            let total = 0;
            //Se itera sobre cada producto del arreglo productos 
            this.productos.forEach(producto => {
                //Se declara una variable que guardara el valor subtotal de cada uno de los productos que el usuario solicite
                const subtotal = producto.unidades * producto.precio;
                //Se imprimen cada uno de los datos que el usuario ingreso a la hora de realizar el pedido
                console.log(`★`.magenta + `    ${producto.codigo}    |    ${producto.nombre}    |    ${producto.unidades}    |  ${producto.precio}  |   ${subtotal} `.cyan + `★`.magenta);
                //Se suma el subtotal de todos los productos añadidos al pedido y los guarda en la variable total
                total += subtotal;
            });
            //Se imprime el valor total de la suma de todos los productos
            console.log(`★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★`.magenta);
            console.log(`★                     `.magenta + `TOTAL: ${total}`.cyan + `                           ★`.magenta);
            console.log(`★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★`.magenta);

            //Se imprime un mensaje en la consola agradeciendo la compra del cliente
            console.log(`★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★`.magenta);
            console.log(`★                 `.magenta + `¡Gracias por su compra!`.cyan + `                    ★`.magenta);
            console.log(`★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★`.magenta);
        }
    }

    // Se crea una nueva instancia de la clase ProductosTienda
    let productosTienda = new ProductosTienda();

    // Se crea una nueva instancia de la clase CarritoCompras
    let carritoCompras = new CarritoCompras();

    // Se declara una variable llamada option con un valor inicial de un string vacío
    let option = ' ';

    // Bucle externo que se ejecuta al menos una vez y se repite mientras la opción no sea '0'
    do {
        // Bucle interno que se ejecuta al menos una vez y se repite hasta que se ingresa una opción válida del menú
        do {
            // Se muestra el menú y se espera a que el usuario ingrese una opción válida
            option = await mostrarMenu();
            // Verifica si la opción está entre 0 y 7
        } while (!(option >= '0' && option <= '7'));

        /*Se evalúa la variable option para determinar qué caso debe ejecutarse, dependiendo la opción 
        seleccionada por el usuario en el menú. */
        switch (option) {
            /* Si option es igual a '0', se ejecuta este bloque de código. En este caso, imprime un mensaje indicando
             que la aplicación se está cerrando y agradece al usuario por usar el servicio. */
            case '0':
                console.log(`\n★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★`.cyan);
                console.log(`★    `.cyan + `Cerrando la aplicación...`.bgCyan + `    ★`.cyan);
                console.log(`★`.cyan + `Gracias por usar nuestro servicio`.bgCyan + `★`.cyan)
                console.log(`★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★`.cyan);
                break;
            /*Si option es igual a '1', se ejecuta este bloque. Muestra los productos y carga el archivo de productos desde la tienda*/
            case '1':
                await productosTienda.cargarArchivoProductos();
                break;
            //Si option es igual a '2', se ejecuta este bloque. Crea una copia de respaldo de los datos de la tienda.
            case '2':
                await productosTienda.grabarCopiaRespaldo();
                break;
            //Si option es igual a '3', se ejecuta este bloque. Realiza una operación de reparación de datos en la tienda
            case '3':
                await productosTienda.reparacionDatos();
                break;
            //Si option es igual a '4', se ejecuta este bloque. Permite al usuario ingresar nuevos productos en la tienda
            case '4':
                await productosTienda.nuevoIngreso();
                break;
            //Si option es igual a '5', se ejecuta este bloque. Permite al usuario borrar un producto de la tienda
            case '5':
                await productosTienda.borrarProducto();
                break;
            //Si option es igual a '6', se ejecuta este bloque. Permite al usuario realizar un nuevo pedido en el carrito de compras
            case '6':
                await carritoCompras.nuevoPedido();
                break;
            //Si option es igual a '7', se ejecuta este bloque. Imprime la factura desde el carrito de compras.
            case '7':
                await carritoCompras.imprimirFactura();
                break;
            /*Si option no coincide con ninguno de los casos anteriores, se ejecuta este bloque. Imprime un mensaje
             indicando que la opción no es válida y pide al usuario que lo intente de nuevo*/
            default:
                console.log(`Opción no válida. Intente de nuevo.`.red);
                break;
        }

        // Verifica si la opción no es '0'
        if (option !== '0') {
            // Se pausa la ejecución para esperar la entrada del usuario
            await pausa();
        }
        // Se repite mientras la opción no sea '0'
    } while (option !== '0');

};

main();