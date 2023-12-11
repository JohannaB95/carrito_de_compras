//Se carga la librería colors para permitir el uso de estilos de colores en la terminal.
require('colors');

//Se incluye el módulo fs que permite gestionar el sistema de archivos.
const fs = require('fs');

//Se incluye el módulo path que permite gestionar rutas de archivos y directorios
const path = require('path');

/*Se cargan los datos del archivo datos.json en la variable datosArchivo. Esto es posible debido al uso de require,
 que puede cargar archivos JSON en Node.js.*/
const datosArchivo = require('../datos.json');

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

    //Se crea un método llamado mostrarProductos sin parámetros
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

    //Se crea un método llamado grabarCopiaRespaldo que es una función flecha asincrónica sin parámetros
    grabarCopiaRespaldo = async () => {

        // Crea una interfaz de lectura en la consola para permitir la entrada del usuario
        const readLine = require('readline').createInterface({
            // Define el flujo de entrada, para leer la entrada del usuario desde la consola
            input: process.stdin,
            //Define el flujo de salida, para mostrar mensajes en la consola
            output: process.stdout
        });

        //Se declara una variable llamada respuesta sin valor inicial
        let respuesta;
        //Se utiliza un bucle do-while que se encarga de repetir el proceso si la respuesta del usuario no es ni 'SI' ni 'NO'.
        do {
            //Se utiliza una promesa para obtener la respuesta del usuario de manera asíncrona.
            respuesta = await new Promise(resolve => {
                // Se utiliza la interfaz de línea de lectura para obtener la respuesta del usuario.
                readLine.question(`\n¿Desea realizar una copia de respaldo? (SI/NO) `.red, (respuesta) => {
                    // La respuesta se resuelve y se convierte a mayúsculas sin espacios adicionales.
                    resolve(respuesta.trim().toUpperCase());
                });
            });

            //verifica si la respuesta del usuario (almacenada en la variable respuesta) es igual a la cadena 'SI'. Si es así, se ejecuta el bloque de código dentro del if.
            if (respuesta === 'SI') {
                //Se crea una constante llamada nombreArchivo que contiene el nombre del archivo que se va a leer, en este caso, 'datos.json'.
                const nombreArchivo = 'datos.json';

                /*Utiliza el método readFile del módulo fs para leer el contenido del archivo de manera asíncrona. 
                Toma tres argumentos: el nombre del archivo, la codificación (en este caso, 'utf-8' para interpretar 
                el archivo como texto) y una función de devolución de llamada que se ejecutará una vez que la operación de lectura se haya completado. */
                fs.readFile(nombreArchivo, 'utf-8', (err, data) => {
                    /*Si hay un error en la lectura del archivo, en este caso si el archivo no existe se imprimira un mensaje
                    de error en la consola y que indica que se debe dirigir a la opción de Reparación de datos*/
                    if (err) {
                        console.log(`\n♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦`.red);
                        console.log(`♦ `.red + `Error al leer el archivo ${nombreArchivo}`.bgRed + ` ♦`.red);
                        console.log(`♦    `.red + `Dirijase a Reparación de datos`.bgRed + `   ♦`.red);
                        console.log(`♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦`.red);
                        // Se cierra aquí si hay un error al leer el archivo
                        readLine.close();
                        return;
                    }

                    /*Se usa para eliminar espacios en blanco al inicio y al final de la cadena almacenada en la variable
                    data. Luego, verifica si la cadena resultante es igual a una cadena vacía. Si el archivo está vacio se imprimira un mensaje
                    de error en la consola y que indica que se debe dirigir a la opción de Reparación de datos*/
                    if (data.trim() === '') {
                        console.log(`\n♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦`.red);
                        console.log(`♦ `.red + `Error: El archivo ${nombreArchivo} está vacío o no existe`.bgRed + ` ♦`.red);
                        console.log(`♦            `.red + `Dirijase a Reparación de datos`.bgRed + `           ♦`.red);
                        console.log(`♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦`.red);
                        // Se cierra aquí si hay un error al leer el archivo
                        readLine.close();
                        return;
                    }

                    /*Se crea una variable llamada fecha en la que se almacenara la fecha actual en la que se realiza la copia de seguridad.
                    Se obtiene la fecha actual en formato ISO utilizando new Date().toISOString().
                    Luego, se utiliza split('T') para dividir la cadena en dos partes, obteniendo solo la parte de la fecha (sin la hora).*/
                    const fecha = new Date().toISOString().split('T')[0];
                    /*Se crea una variable de tipo constante llamada nuevoArchivo que crea un nuevo nombre de 
                    archivo para la copia de respaldo concatenando la cadena "datos_copia_", la fecha obtenida y la 
                    extensión .json.*/
                    const nuevoArchivo = `datos_copia_${fecha}.json`;

                    /*Escribe el contenido del archivo original en el nuevo archivo de copia de respaldo. Aquí, JSON.parse(data)
                    se utiliza para convertir la cadena JSON en un objeto JavaScript, y luego JSON.stringify(..., null, 2) 
                    convierte ese objeto de nuevo en una cadena JSON con formato y espaciado adecuados. */
                    fs.writeFileSync(nuevoArchivo, JSON.stringify(JSON.parse(data), null, 2));

                    //Se imprime un mensaje en la consola que indica que la copia de seguridad ha sido completada
                    console.log(`\n♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦`.red);
                    console.log(`♦  `.red + `Copia de seguridad de ${nombreArchivo} completada`.bgRed + ` ♦`.red);
                    console.log(`♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦`.red);

                    //Se cierra la interfaz aquí si la operación de escritura ha finalizado
                    readLine.close();
                });

                //Si la respuesta del usuario es no, se imprimira un mensaje en la consola que indica que no se realizara la copia
            } else if (respuesta === 'NO') {
                console.log(`\nNo se realizará una copia de respaldo.`.yellow);
                //Se cierra la interfaz de lectura después de imprimir el mensaje
                readLine.close();
                /*Si la respuesta no es ni SI ni NO, sino otra respuesta se imprimira un mensaje en la consola indicando
                 al usuario que debe ingresar como respuesta un si o un no*/
            } else {
                console.log(`\nRespuesta no válida. Por favor, ingrese 'SI' o 'NO'.`.yellow);
            }
            //La condición del bucle (while) verifica si la respuesta no es 'SI' y no es 'NO'.
        } while (respuesta !== 'SI' && respuesta !== 'NO');

        // Cierra la interfaz de lectura aquí si ha terminado el bucle
        readLine.close();
    };

    //Se crea un método llamado reparacionDatos que es una función flecha asincrónica sin parámetros
    reparacionDatos = async () => {

        // Crea una interfaz de lectura en la consola para permitir la entrada del usuario
        const readLine = require('readline').createInterface({
            // Define el flujo de entrada, para leer la entrada del usuario desde la consola
            input: process.stdin,
            //Define el flujo de salida, para mostrar mensajes en la consola
            output: process.stdout
        });

        //Se declara una variable constante llamada ruta que almacenara la ruta del directorio superior al directorio actual
        const ruta = path.join(__dirname, '..');

        //Se inicia un bucle while. El bucle se ejecutará repetidamente ya que la condición siempre es true.
        while (true) {
            /*Se utiliza una promesa para manejar la entrada del usuario de manera asíncrona. La función 
          readLine.question solicita al usuario que ingrese una respuesta a la pregunta*/
            const respuestaRecuperar = await new Promise((resolve) => {
                readLine.question(`\n¿Desea recuperar alguna copia de respaldo? (SI/NO) `.red, (respuesta) => {
                    // La respuesta se resuelve y se convierte a mayúsculas sin espacios adicionales.
                    resolve(respuesta.trim().toUpperCase());
                });
            });

            /*Se verifica si la respuesta del usuario (almacenada en la variable respuestaRecuperar) es igual a la cadena 'SI'. 
            Si es así, se ejecuta el bloque de código dentro del if.*/
            if (respuestaRecuperar === 'SI') {
                /*Se crea una variable constante llamada archivos que almacena el resultado de la lectura de la lista
                de archivos en el directorio especificado por 'ruta'*/
                const archivos = fs.readdirSync(ruta);

                /*Se crea una variable constante llamada copiasDisponibles que almacena el resultado de la lectura de la lista
               de archivos en el directorio especificado y filtra los archivos para encontrar solo aquellos que comienzan
               con 'datos_copia_' y terminan con '.json'. Esto debería identificar las copias de respaldo en el directorio.*/
                const copiasDisponibles = archivos.filter(file => file.startsWith('datos_copia_') && file.endsWith('.json'));

                /*Se verifica si hay o no copias de respaldo disponibles. Si no hay copias de respaldo, imprime un 
                mensaje indicando que no se encontraron y cierra la interfaz de línea de lectura antes de salir de la función*/
                if (copiasDisponibles.length === 0) {
                    console.log(`\nNo se encontraron copias de seguridad`.green);
                    readLine.close();
                    return;
                    /*Si hay copias de respaldo disponibles, imprime un mensaje indicando cuáles copias de respaldo 
                    están disponibles en el directorio. */
                } else {
                    console.log(`\nLas siguientes copias de seguridad están disponibles:\n`.green);
                    /*Se inicia un bucle forEach en el array copiasDisponibles. Por cada elemento del array, se ejecutará 
                    la función proporcionada como argumento a forEach. La función toma dos parámetros, file e index.
                    file representa el nombre de cada archivo y index es el índice del elemento en el array. */
                    copiasDisponibles.forEach((file, index) => {
                        //Se indica imprimir en la consola el indice de la copia de seguridad más el nombre de cada archivo
                        console.log(`${index + 1}. ${file}`);
                    });

                    /*Se utiliza una Promise para esperar la respuesta del usuario mediante la función readLine.question.
                    La respuesta del usuario se resuelve en la Promise y se almacena en indexSeleccionado. */
                    const indexSeleccionado = await new Promise(resolve => {
                        readLine.question(`\nIngrese el número de la copia de seguridad que desea restaurar: `.green, (index) => {
                            resolve(index);
                        });
                    });
                    /*Se utiliza copiasDisponibles[indexSeleccionado - 1] para obtener el nombre del archivo seleccionado. 
                    Se resta 1 del índice para ajustar el valor ingresado por el usuario al índice del array.*/
                    const selectedFile = copiasDisponibles[indexSeleccionado - 1];
                    //Se verifica si selectedFile tiene un valor válido. Si no es válido, se imprime un mensaje de "Selección no válida"
                    if (!selectedFile) {
                        console.log(`\nSelección no válida`.green);
                        return;
                        //Si por el contrario es un valor válido
                    } else {
                        //Se construye la ruta completa del archivo seleccionado utilizando path.join.
                        const rutaArchivo = path.join(ruta, selectedFile);
                        //Se lee el contenido del archivo mediante fs.readFileSync y se almacena en la variable datos.
                        const datos = fs.readFileSync(rutaArchivo, 'utf-8');

                        /*Se escriben en datos.json los datos que se recuperaron de la copia de seguridad, se convierte
                        la cadena JSON datos en un objeto JavaScript. Luego se convierte el objeto JavaScript en una 
                        cadena JSON con formato, utilizando espaciado de 2.*/
                        fs.writeFileSync('datos.json', JSON.stringify(JSON.parse(datos), null, 2));

                        //Se imprime un mensaje qe indica que los datos se han guardado en el archivo
                        console.log(`\n♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦`.red);
                        console.log(`♦ `.red + `Los datos se han guardado en el archivo datos.json.`.bgRed + ` ♦`.red);
                        console.log(`♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦`.red);

                        //Se cierra la interfaz de lectura
                        readLine.close();

                        //Retorna el objeto JavaScript 
                        return JSON.parse(datos);
                    }
                }
                //Si la respuesta del usuario es 'NO', se imprime un mensaje indicando que no se realizará la recuperación de datos.
            } else if (respuestaRecuperar === 'NO') {
                console.log(`\nNo se realizará la recuperación de datos.`.yellow);
                //Se cierra la interfaz de lectura
                readLine.close();
                //La función devuelve false para indicar que no se realizará la recuperación de datos.
                return false;
                /*Si la respuesta del usuario no es ni 'SI' ni 'NO', se imprime un mensaje de error indicando que la 
                respuesta no es válida y se solicita al usuario que ingrese 'SI' o 'NO'.*/
                //No se cierra la interfaz de línea de lectura en este caso, ya que se espera que el usuario proporcione una respuesta válida.
            } else {
                console.log(`\nRespuesta no válida. Por favor, ingrese 'SI' o 'NO'.`.yellow);
            }
        }
    };


    //Se crea un método llamado borrarProducto que es una función flecha asincrónica sin parámetros
    borrarProducto = async () => {
        // Crea una interfaz de lectura en la consola para permitir la entrada del usuario
        const readLine = require('readline').createInterface({
            // Define el flujo de entrada, para leer la entrada del usuario desde la consola
            input: process.stdin,
            //Define el flujo de salida, para mostrar mensajes en la consola
            output: process.stdout
        });

        //Se declara una variable llamada respuestaEliminar sin valor inicial
        let respuestaEliminar;

        //Se inicia un bucle while. El bucle se ejecutará repetidamente ya que la condición siempre es true.
        while (true) {
            //Se utiliza una promesa para obtener la respuesta del usuario de manera asíncrona.
            respuestaEliminar = await new Promise(resolve => {
                // Se utiliza la interfaz de línea de lectura para obtener la respuesta del usuario.
                readLine.question(`\n¿Desea eliminar un producto? (SI/NO) `.red, (respuesta) => {
                    // La respuesta se resuelve y se convierte a mayúsculas sin espacios adicionales.
                    resolve(respuesta.trim().toUpperCase());
                });
            });
            /*Se verifica si la respuesta del usuario (almacenada en la variable respuestaEliminar) es igual a la cadena 'SI'. Si 
            es así, se ejecuta el bloque de código dentro del if.*/
            if (respuestaEliminar === 'SI') {
                /*se utiliza una Promise para esperar la entrada del usuario mediante la función readLine.question.
                El código del producto ingresado por el usuario se almacena en la variable codigoProducto.*/
                const codigoProducto = await new Promise(resolve => {
                    readLine.question(`\nDigite el código del producto: `.green, (codigo) => {
                        //Se resulve el valor de la promesa, mediante la entrada que realiza el usuario, es decir el código del producto
                        resolve(codigo);
                    });
                });

                //Se cierra la interfaz de línea de lectura, después de obtener la entrada del usuario
                readLine.close();

                //Se crea una variable constante llamada listaProductos que almacenara los datos de datosArchivo
                const listaProductos = datosArchivo;

                /*Se declara una variable constante llamada productosFiltrados que utiliza la función filter para crear
                 una nueva lista de productos llamada productosFiltrados */
                const productosFiltrados = listaProductos.filter(
                    /*Para cada elemento (producto), la función de filtro evalúa la condición (producto.codigoProducto !== codigoProducto). 
                    Si esta condición es true, el elemento se incluye en la nueva lista productosFiltrados; si es false, el elemento se excluye. */
                    (producto) => producto.codigoProducto !== codigoProducto
                );

                /*Se compara la longitud de productosFiltrados con la longitud de listaProductos. Si la longitud de 
                productosFiltrados es menor que la longitud de listaProductos, significa que se eliminó al menos un producto. */
                if (productosFiltrados.length < listaProductos.length) {
                    //Se imprime un mensaje en la consola que indica que el producto ha sido borrado
                    console.log(`\n♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦`.red);
                    console.log(`♦ `.red + `Producto eliminado con éxito.`.bgRed + ` ♦`.red);
                    console.log(`♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦`.red);

                    /*Se utiliza fs.writeFile para escribir la nueva lista de productos (productosFiltrados) en el archivo 
                    'datos.json'.JSON.stringify(productosFiltrados, null, 2) convierte la lista filtrada en formato JSON 
                    con una indentación de 2 espacios para mejorar la legibilidad. */
                    fs.writeFile('datos.json', JSON.stringify(productosFiltrados, null, 2), (error) => {
                        //Se maneja un callback para gestionar cualquier error que pueda ocurrir durante la escritura en el archivo.
                        if (error) {
                            console.error(error);
                        }
                    });
                    //Si no hay ningún producto en la lista con el código ingresado, se imprime un mensaje en la consola que indica que no existe ese producto.
                } else {
                    console.log(`\n♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦`.red);
                    console.log(`♦ `.red + `El producto no existe en la lista.`.bgRed + ` ♦`.red);
                    console.log(`♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦`.red);
                }
                //Se retorna el código del producto eliminado
                return codigoProducto;
                //Si la respuesta es NO, se imprime un mensaje en la consola que indica que no se eliminará ningún producto
            } else if (respuestaEliminar === 'NO') {
                console.log(`\n♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦`.red);
                console.log(`♦   `.red + `No se eliminó ningún producto.`.bgRed + `   ♦`.red);
                console.log(`♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦`.red);
                //Se cierra la interfaz de lectura después de imprimir el mensaje
                readLine.close();
                //Si el usuario elige no eliminar ningún producto, se retorna false.
                return false;
                /*Si la respuesta del usuario no es ni 'SI' ni 'NO', se imprime un mensaje de error indicando que la 
                respuesta no es válida y se solicita al usuario que ingrese 'SI' o 'NO'.*/
            } else {
                console.log(`\nRespuesta no válida. Por favor, ingrese 'SI' o 'NO'.`.yellow);
            }
        }
    }

    //Se crea un método llamado preguntarNuevoProducto que es una función flecha asincrónica sin parámetros
    preguntarNuevoProducto = async () => {
        // Crea una interfaz de lectura en la consola para permitir la entrada del usuario
        const readLine = require('readline').createInterface({
            // Define el flujo de entrada, para leer la entrada del usuario desde la consola
            input: process.stdin,
            //Define el flujo de salida, para mostrar mensajes en la consola
            output: process.stdout
        });

        //Se declara una variable llamada seguirIngresando que determina si se debe seguir ingresando productos o no
        let seguirIngresando = true;

        /*Se usa un bucle while para continuar preguntando el ingreso de productos hasta que el usuario decida
         dejar de ingresar productos*/
        while (seguirIngresando) {
            // Se espera la respuesta del usuario a la pregunta "¿Desea ingresar un nuevo producto?"
            const respuesta = await new Promise(resolve => {
                readLine.question(`\n¿Desea ingresar un nuevo producto? (SI/NO) `.red, resolve);
            });

            // Si la respuesta es 'SI', se convierte a mayúsculas sin espacios adicionales y se procede a solicitar los datos del nuevo producto
            if (respuesta.trim().toUpperCase() === 'SI') {

                //Se declaran las variables codigo, nombre, inventario, y precio
                let codigo, nombre, inventario, precio;

                //Se utiliza un bucle do-while para solicitar al usuario que ingrese el código del producto.
                do {
                    //Se utiliza new Promise para crear una promesa que se resolverá cuando se obtenga el código del producto
                    codigo = await new Promise(resolve => {
                        //Se utiliza readLine.question para realizar una pregunta al usuario y obtener una respuesta que resuelve la promesa
                        readLine.question(`\nDigite el código del producto ►  `.green, codigo => resolve(codigo));
                    });
                    //El bucle se repite mientras el código está vacío.
                } while (codigo === '');

                //Se utiliza un bucle do-while para solicitar al usuario que ingrese el nombre del producto. 
                do {
                    //Se utiliza new Promise para crear una promesa que se resolverá cuando se obtenga el nombre del producto
                    nombre = await new Promise(resolve => {
                        //Se utiliza readLine.question para realizar una pregunta al usuario y obtener una respuesta que resuelve la promesa
                        readLine.question(`\nDigite el nombre del producto ►  `.green, nombre => resolve(nombre));
                    });
                    //El bucle se repite mientras el nombre está vacío.
                } while (nombre === '');

                //Se utiliza un bucle do-while para solicitar al usuario que ingrese el inventario del producto.
                do {
                    //Se utiliza new Promise para crear una promesa que se resolverá cuando se obtenga el inventario del producto
                    inventario = await new Promise(resolve => {
                        //Se utiliza readLine.question para realizar una pregunta al usuario y obtener una respuesta que resuelve la promesa
                        readLine.question(`\nDigite el inventario del producto ►  `.green, inventario => resolve(parseInt(inventario)));
                    });
                    //El bucle se repite mientras el valor ingresado no es un número válido o es menor o igual a cero.
                } while (isNaN(inventario) || inventario <= 0);

                //Se utiliza un bucle do-while para solicitar al usuario que ingrese el precio del producto.
                do {
                    //Se utiliza new Promise para crear una promesa que se resolverá cuando se obtenga el precio del producto
                    precio = await new Promise(resolve => {
                        //Se utiliza readLine.question para realizar una pregunta al usuario y obtener una respuesta que resuelve la promesa
                        readLine.question(`\nDigite el precio del producto ►  `.green, precio => resolve(parseFloat(precio)));
                    });
                    //El bucle se repite mientras el valor ingresado no es un número válido o es menor o igual a cero.
                } while (isNaN(precio) || precio <= 0);

                // Se crea una instancia de la clase Producto y se configuran sus propiedades
                const producto = new Producto();

                //Se configuran las propiedades de la instancia producto utilizando el método setter para obtener los valores de cada uno
                producto.setCodigoProducto = codigo;
                producto.setNombreProducto = nombre;
                producto.setInventarioProducto = inventario;
                producto.setPrecioProducto = precio;

                // Se agrega el nuevo producto a la lista de productos a través de .push
                this.#listaProductos.push(producto);

                // Se imprime un mensaje indicando que los datos se han guardado en datos.json
                console.log(`\n♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦`.cyan);
                console.log(`♦   `.cyan + `Datos guardados en datos.json`.bgCyan + `   ♦`.cyan);
                console.log(`♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦`.cyan);

                //Si la respuesta es NO, se convierte a mayúsculas sin espacios adicionales y se rompe el ciclo
            } else if (respuesta.trim().toUpperCase() === 'NO') {
                //La variable toma el valor de false al obtener una respuesta de no
                seguirIngresando = false;
            } else {
                // Si la respuesta no es ni 'SI' ni 'NO', se muestra un mensaje de error
                console.log(`\nRespuesta no válida. Por favor, ingrese 'SI' o 'NO'.`.yellow);
            }
        }

        // Se cierra la interfaz de línea de lectura
        readLine.close();

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
        this.#nombreCliente = ' ';
        this.#numeroIdentificacion = '';
        this.#telefono = '';
        this.#productos = [];
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

    //Se crea un método llamado preguntarNuevoProducto que es una función flecha asincrónica sin parámetros
    preguntarNuevoPedido = async () => {
        // Crea una interfaz de lectura en la consola para permitir la entrada del usuario
        const readLine = require('readline').createInterface({
            // Define el flujo de entrada, para leer la entrada del usuario desde la consola
            input: process.stdin,
            //Define el flujo de salida, para mostrar mensajes en la consola
            output: process.stdout
        });

        //Se declara una variable constante llamada datos que almacena el resultado de los datos leídos en el archivo y su conversión a un objeto JSON
        const datos = JSON.parse(fs.readFileSync('datos.json', 'utf-8'));

        /*Se utiliza readLine.question para hacer una pregunta al usuario sobre si desea ingresar un nuevo pedido.
        La respuesta se almacena en la variable respuesta.*/
        const respuesta = await new Promise(resolve => {
            readLine.question(`\n¿Desea ingresar un nuevo pedido? (SI/NO) `.red, resolve);
        });

        /*Si la respuesta es 'si', se convierte a mayúsculas sin espacios adicionales y se procede a solicitar los 
        datos del producto del pedido*/
        if (respuesta.trim().toUpperCase() === 'SI') {

            //Se declara una variable llamada agregarMasProductos y se inicializa con un valor booleano de true
            let agregarMasProductos = true;

            /*Se usa un bucle while para continuar preguntando al usuario el ingreso de productos al pedido 
            hasta que decida dejar de ingresar productos*/
            while (agregarMasProductos) {
                //Se declaran las variables codigo, nombre, inventario, y precio
                let codigo, nombre, unidades, precio;
                //Se declara la variable inventarioEnArchivo que almacenará el inventario del producto en el archivo
                let inventarioEnArchivo;

                /*Se utiliza un bucle do-while que verifica que mientras código sea una cadena vacia se repetira el 
                proceso hasta que el usuario ingrese un valor válido, que no este vacio*/
                do {
                    /*Se utiliza un bucle do-while para obtener un código de producto válido y verificar su existencia 
                    en el inventario*/
                    do {
                        //Se utiliza new Promise para crear una promesa que se resolverá cuando se obtenga el código del producto
                        codigo = await new Promise(resolve => {
                            //Se utiliza readLine.question para realizar una pregunta al usuario y obtener una respuesta que resuelve la promesa
                            readLine.question(`\nIngrese el código del producto ►  `.green, resolve);
                        });

                        /*Se toma la variable inventarioEnArchivo que contendra el elemento que cumpla con una condición.
                        El método .find buscará un elemento dentro del array datos que contenga el mismo código
                        que el que proporcionara el usuario*/
                        inventarioEnArchivo = datos.find(producto => producto.codigoProducto === codigo);

                        /*Se utiliza if para indicar que si el producto no se encuentra en el archivo se imprimirá en la 
                        consola un mensaje informando al usuario que el producto con ese código no existe en el 
                        inventario*/
                        if (!inventarioEnArchivo) {
                            console.log(`\nEl producto con código ${codigo} no existe en el inventario.`.yellow);
                        }
                        // Se utiliza while para que se repita el ciclo hasta que se ingrese un código válido y el producto exista en el inventario
                    } while (!inventarioEnArchivo);
                    //Se utiliza while para que se repita la pregunta mientras el código está vacío.
                } while (codigo === '');

                //Se utiliza un bucle do-while para obtener un nombre de producto válido, que no este vacio
                do {
                    //Se utiliza new Promise para crear una promesa que se resolverá cuando se obtenga el nombre del producto
                    nombre = await new Promise(resolve => {
                        //Se utiliza readLine.question para realizar una pregunta al usuario y obtener una respuesta que resuelve la promesa
                        readLine.question(`Ingrese el nombre del producto ►  `.green, resolve);
                    });
                    //Se utiliza while para que se repita la pregunta mientras el nombre está vacío.
                } while (nombre === '');

                //Se utiliza un bucle do-while para obtener un número de unidades válido, que no este vacio o sea menor a cero
                do {
                    //Se utiliza new Promise para crear una promesa que se resolverá cuando se obtengan las unidades del producto
                    unidades = await new Promise(resolve => {
                        //Se utiliza readLine.question para realizar una pregunta al usuario y obtener una respuesta que resuelve la promesa
                        readLine.question(`Ingrese las unidades del producto ►  `.green, resolve);
                    });
                    /*Mientras el número de unidades no sea un número o sea menor o igual a cero el ciclo se repetirá
                    hasta que se ingrese un valor válido*/
                } while (isNaN(unidades) || unidades <= 0);

                /*Se usa un if para verificar la cantidad de unidades que se encuentran disponibles en el inventario,
                si el número de unidades en el  inventario es menor al solicitado por el usuario en el pedido, se 
                imprimirá en la consola un mensaje que indica que no hay suficientes unidades*/
                if (inventarioEnArchivo.inventarioProducto < unidades) {
                    console.log(`\nNo hay suficientes unidades disponibles. Actualmente hay ${inventarioEnArchivo.inventarioProducto} unidades en inventario.`.yellow);
                    //Si hay unidades suficientes se continua con el proceso de ingreso de pedido
                } else {

                    //Se utiliza un bucle do-while para obtener un precio válido, que no este vacio o sea menor a cero
                    do {
                        //Se utiliza new Promise para crear una promesa que se resolverá cuando se obtenga el precio del producto
                        precio = await new Promise(resolve => {
                            //Se utiliza readLine.question para realizar una pregunta al usuario y obtener una respuesta que resuelve la promesa
                            readLine.question(`Ingrese el precio del producto ►  `.green, precio => resolve(parseFloat(precio)));
                        });
                        /*Mientras el precio no sea un número o sea menor o igual a cero el ciclo se repetirá
                        hasta que se ingrese un valor válido*/
                    } while (isNaN(precio) || precio <= 0);

                    //Se descuentan las unidades pedidas por el usuario de la cantidad que contiene el inventario del producto
                    inventarioEnArchivo.inventarioProducto -= unidades;

                    /*Se utiliza writeFileSync para escribir el array actualizado (datos) en el archivo 'datos.json'. 
                    Esto refleja la actualización del inventario después de la venta. */
                    fs.writeFileSync('datos.json', JSON.stringify(datos, null, 2), 'utf-8');

                    /*Se agrega un nuevo objeto al array #productos. Este array es una lista de productos que registrará
                    los productos del pedido y que contiene el código, nombre, unidades y precio. */
                    this.#productos.push({
                        codigo: codigo,
                        nombre: nombre,
                        unidades: unidades,
                        precio: precio,
                    });

                    /*Se imprime en la consola un mensaje indicando al usuario que el pedido fue registrado y la 
                    cantidad de unidades que quedan en el inventario*/
                    console.log(`\nPedido registrado correctamente. Unidades en inventario restantes: ${inventarioEnArchivo.inventarioProducto}.`.green);
                }
                //Se utiliza new Promise para crear una promesa que se resolverá cuando se obtenga una respuesta del usuario
                const respuestaAgregarMas = await new Promise(resolve => {
                    //Se utiliza readLine.question para realizar una pregunta al usuario y obtener una respuesta que resuelve la promesa
                    readLine.question(`\n¿Desea ingresar más productos al pedido? (SI/NO) `.red, resolve);
                });
                //Si la respuesta no es igual a 'SI', se termina el bucle de ingreso de productos
                if (respuestaAgregarMas.trim().toUpperCase() !== 'SI') {
                    //Si el usuario no desea agregar más productos, se establece la variable agregarMasProductos en false
                    agregarMasProductos = false;
                }
            }
            /*Si la respuesta es 'no', se convierte a mayúsculas sin espacios adicionales se establece que no se deben
            ingresar más pedidos*/
        } else if (respuesta.trim().toUpperCase() === 'NO') {

            // Si la respuesta no es ni 'SI' ni 'NO', se muestra un mensaje de error indicando cual es la respuesta que se debe ingresar
        } else {
            console.log(`\nRespuesta no válida. Por favor, ingrese 'SI' o 'NO'.`.yellow);
        }
        // Se cierra la interfaz de lectura al salir del bucle principal
        readLine.close();
    }

    //Se crea un método llamado imprimirFactura que es una función flecha asincrónica sin parámetros
    imprimirFactura = () => {
        // Crea una interfaz de lectura en la consola para permitir la entrada del usuario
        const readLine = require('readline').createInterface({
            // Define el flujo de entrada, para leer la entrada del usuario desde la consola
            input: process.stdin,
            //Define el flujo de salida, para mostrar mensajes en la consola
            output: process.stdout
        });

        //Se crea una nueva Promise que se resolverá cuando se obtenga una respuesta del usuario
        return new Promise((resolve) => {

            //Se utiliza readLine.question para realizar una pregunta al usuario y obtener el nombre del cliente
            readLine.question(`\nDigite el nombre del cliente  ►  `.green, (nombreCliente) => {
                //Se utiliza readLine.question para realizar una pregunta al usuario y obtener el número de identificación
                readLine.question(`\nDigite el número de identificación  ►  `.green, (numeroIdentificacion) => {
                    //Se utiliza readLine.question para realizar una pregunta al usuario y obtener el teléfono
                    readLine.question(`\nDigite el teléfono del cliente  ►  `.green, (telefono) => {
                        // Se cierra la interfaz de línea de lectura
                        readLine.close();

                        /*Se imprime en la consola un cuadro con un titulo y los respectivos datos que se solicitaron 
                        del cliente, junto con la información de los productos que pidió el cliente*/
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
                        this.#productos.forEach(producto => {
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
                        //Se resuelve la promesa externa cuando se haya impreso la factura
                        resolve();
                    })
                });
            });
        });
    };
}

// Exporta un objeto que contiene las clases utilizadas en el módulo app.js
module.exports = {
    Producto,
    ProductosTienda,
    CarritoCompras
}