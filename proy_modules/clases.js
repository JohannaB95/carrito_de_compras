//Se carga la librería colors para permitir el uso de estilos de colores en la terminal.
require('colors');

//Se incluye el módulo fs que permite gestionar el sistema de archivos.
const fs = require('fs');

/*Se cargan los datos del archivo datos.json en la variable datosArchivo. Esto es posible debido al uso de require,
 que puede cargar archivos JSON en Node.js.*/
const datosArchivo = require('../datos.json');

//Se carga el código que contiene el archivo 'menu.js' en la carpeta 'proy_modules'.
const { datosCliente, CopiaRespaldo, eliminarProducto, recuperarDatos } = require('./menu');

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

    // Se define una función asíncrona llamada preguntarNuevoProducto
    preguntarNuevoProducto = async () => {
        // Se crea una interfaz de línea de lectura para gestionar la entrada/salida
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        // Se inicializa la variable que determina si se debe seguir ingresando productos
        let seguirIngresando = true;

        // Bucle para continuar preguntando hasta que el usuario decida dejar de ingresar productos
        while (seguirIngresando) {
            // Se espera la respuesta del usuario a la pregunta "¿Desea ingresar un nuevo producto?"
            const respuesta = await new Promise(resolve => {
                readline.question(`\n¿Desea ingresar un nuevo producto? (SI/NO) `.red, resolve);
            });

            // Si la respuesta es 'SI', se procede a solicitar los datos del nuevo producto
            if (respuesta.trim().toUpperCase() === 'SI') {
                // Se define una función asíncrona llamada obtenerDato que toma un mensaje y una función de validación como parámetros
                const obtenerDato = async (mensaje, validacion) => {
                    // Se inicializa la variable 'dato' que almacenará la entrada del usuario
                    let dato;

                    // Bucle infinito para seguir preguntando hasta obtener un dato válido
                    while (true) {
                        // Se espera la respuesta del usuario a través de la interfaz de línea de lectura
                        dato = await new Promise(resolve => {
                            readline.question(`\n${mensaje} ►  `.green, resolve);
                        });

                        // Se verifica si la respuesta cumple con la validación proporcionada
                        if (validacion(dato)) {
                            // Si la respuesta es válida, se rompe el bucle y se devuelve el dato
                            break;
                        }
                    }

                    // Se devuelve el dato una vez que se ha obtenido una respuesta válida
                    return dato;
                };

                // Se obtienen los datos del nuevo producto
                const codigo = await obtenerDato('Digite el código del producto', val => val.trim() !== '');
                const nombre = await obtenerDato('Digite el nombre del producto', val => val.trim() !== '');
                const inventario = await obtenerDato('Digite el inventario del producto', val => parseInt(val) > 0);
                const precio = await obtenerDato('Digite el precio del producto', val => parseFloat(val) > 0);

                // Se crea una instancia de la clase Producto y se configuran sus propiedades
                const producto = new Producto();
                producto.setCodigoProducto = codigo;
                producto.setNombreProducto = nombre;
                producto.setInventarioProducto = inventario;
                producto.setPrecioProducto = precio;

                // Se agrega el nuevo producto a la lista de productos
                this.#listaProductos.push(producto);

                // Se imprime un mensaje indicando que los datos se han guardado en datos.json
                console.log(`\n♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦`.cyan);
                console.log(`♦   `.cyan + `Datos guardados en datos.json`.bgCyan + `   ♦`.cyan);
                console.log(`♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦\n`.cyan);

            } else if (respuesta.trim().toUpperCase() === 'NO') {
                // Si la respuesta es 'NO', se establece que no se deben ingresar más productos
                seguirIngresando = false;
            } else {
                // Si la respuesta no es ni 'SI' ni 'NO', se muestra un mensaje de error
                console.log(`\nRespuesta no válida. Por favor, ingrese 'SI' o 'NO'.`.yellow);
            }
        }

        // Se cierra la interfaz de línea de lectura
        readline.close();

        // Se llama a la función guardarProducto para almacenar los productos ingresados
        this.guardarProducto();
    };

    /*Escribir datos en un archivo almacenado en unidad
        Deserializar para convertir un arreglo de objetos de clase en cadena Json
        Se crea un método llamado guardarProducto*/
    guardarProducto() {

        /*Se usa el método push() para agregar uno o más elementos al final del arreglo. En este caso, se agrega
        al final del arreglo this.#listaProductos */
        this.#listaProductos.push();

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
    }
}

//Se define la clase CarritoCompras
class CarritoCompras {

    /*Se declaran los atributos de la clase y que serán privados y son el nombre del cliente, el número de 
    identificaión y el teléfono*/
    #nombreCliente;
    #numeroIdentificacion;
    #telefono;
    #productos;

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

    //Se crea un método getter para obtener el valor del atributo #productos
    get getProductos() {
        return this.#productos;
    }

    // Se define una función asíncrona llamada preguntarNuevoPedido
    preguntarNuevoPedido = async () => {
        // Se crea una interfaz de línea de lectura para gestionar la entrada/salida
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        // Se lee el archivo 'datos.json' y se convierte su contenido a un objeto JSON
        const datos = JSON.parse(fs.readFileSync('datos.json', 'utf-8'));

        // Se espera la respuesta del usuario a la pregunta "¿Desea ingresar un nuevo pedido?"
        const respuesta = await new Promise(resolve => {
            readLine.question(`\n¿Desea ingresar un nuevo pedido? (SI/NO) `.red, resolve);
        });

        // Si la respuesta es 'SI', se procede a ingresar los detalles del pedido
        if (respuesta.trim().toUpperCase() === 'SI') {
            let agregarMasProductos = true;

            // Bucle para ingresar detalles de productos al pedido
            while (agregarMasProductos) {
                let codigo;
                let inventarioEnArchivo;

                // Bucle para asegurarse de que el código del producto ingresado exista en el inventario
                do {
                    // Se solicita al usuario que ingrese el código del producto
                    codigo = await new Promise(resolve => {
                        readLine.question(`\nIngrese el código del producto ►  `.green, resolve);
                    });

                    // Se busca el producto en el inventario a partir del código
                    inventarioEnArchivo = datos.find(producto => producto.codigoProducto === codigo);

                    // Si el producto no existe en el inventario, se muestra un mensaje de error
                    if (!inventarioEnArchivo) {
                        console.log(`\nEl producto con código ${codigo} no existe en el inventario.`.yellow);
                    }
                } while (!inventarioEnArchivo);

                // Si no hay suficientes unidades en inventario, se muestra un mensaje de advertencia
                if (inventarioEnArchivo.inventarioProducto <= 0) {
                    console.log(`\nNo hay suficientes unidades disponibles. Actualmente hay 0 unidades en inventario.`.yellow);
                } else {
                    // Se solicita al usuario ingresar el nombre del producto
                    const nombre = await new Promise(resolve => {
                        readLine.question(`\nIngrese el nombre del producto ►   `.green, resolve);
                    });

                    // Se solicita al usuario ingresar la cantidad de unidades del producto
                    const unidades = await new Promise(resolve => {
                        readLine.question(`\nIngrese las unidades del producto ►  `.green, resolve);
                    });

                    // Si la cantidad de unidades es inválida, se muestra un mensaje de error
                    if (unidades <= 0) {
                        console.log(`\nPor favor, ingrese un número válido de unidades.`.yellow);
                    } else if (inventarioEnArchivo.inventarioProducto < unidades) {
                        // Si no hay suficientes unidades disponibles, se muestra un mensaje de advertencia
                        console.log(`\nNo hay suficientes unidades disponibles. Actualmente hay ${inventarioEnArchivo.inventarioProducto} unidades en inventario.`.yellow);
                    } else {
                        // Se solicita al usuario ingresar el precio del producto
                        const precio = await new Promise(resolve => {
                            readLine.question(`\nIngrese el precio del producto ►  `.green, resolve);
                        });

                        // Se actualiza el inventario restando las unidades vendidas
                        inventarioEnArchivo.inventarioProducto -= unidades;

                        // Se guarda el inventario actualizado en el archivo 'datos.json'
                        fs.writeFileSync('datos.json', JSON.stringify(datos, null, 2), 'utf-8');

                        // Se agrega el producto al pedido
                        this.productos.push({
                            codigo: codigo,
                            nombre: nombre,
                            unidades: unidades,
                            precio: precio,
                        });

                        // Se imprime un mensaje de confirmación
                        console.log(`\nPedido registrado correctamente. Unidades en inventario restantes: ${inventarioEnArchivo.inventarioProducto}.`.green);
                    }
                }

                // Se pregunta al usuario si desea agregar más productos al pedido
                const respuestaAgregarMas = await new Promise(resolve => {
                    readLine.question(`\n¿Desea ingresar más productos al pedido? (SI/NO) `.red, resolve);
                });

                // Si la respuesta no es 'SI', se termina el bucle de ingreso de productos
                if (respuestaAgregarMas.trim().toUpperCase() !== 'SI') {
                    agregarMasProductos = false;
                }
            }
        } else if (respuesta.trim().toUpperCase() === 'NO') {
            // Si la respuesta es 'NO', se establece que no se deben ingresar más pedidos
            seguirIngresando = false;
        } else {
            // Si la respuesta no es ni 'SI' ni 'NO', se muestra un mensaje de error
            console.log(`\nRespuesta no válida. Por favor, ingrese 'SI' o 'NO'.`.yellow);
        }

        // Se cierra la interfaz de línea de lectura al salir del bucle principal
        readLine.close();
    };

    //Se crea un nuevo método llamado imprimirFactura que es una función flecha de tipo asincronica sin parámetros
    imprimirFactura = async () => {

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

// Exporta un objeto que contiene las clases utilizadas en el módulo app.js
module.exports = {
    Producto,
    ProductosTienda,
    CarritoCompras
}