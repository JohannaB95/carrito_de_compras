//Se incluye el módulo fs que permite gestionar el sistema de archivos.
const fs = require('fs');

//Se incluye el módulo path que permite gestionar rutas de archivos y directorios
const path = require('path');

//Se crea una función constante que es una función flecha llamada mostrarMenu
const mostrarMenu = () => {

    // Retorna una nueva promesa que se resuelve con el valor proporcionado en la función 'resolve'
    return new Promise(resolve => {
        // Muestra el menú en la consola con diferentes opciones, dependiendo de lo que se necesite realizar
        console.log(`♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦`.blue);
        console.log(`♦          `.blue + `MENÚ DE OPCIONES`.cyan + `            ♦`.blue)
        console.log(`♦                     `.blue + `                 ♦`.blue)
        console.log(`♦        `.blue + `${'1.'.yellow} Cargar datos`.cyan + `               ♦`.blue);
        console.log(`♦        `.blue + `${'2.'.yellow} Copia de respaldo`.cyan + `          ♦`.blue);
        console.log(`♦        `.blue + `${'3.'.yellow} Reparación de datos`.cyan + `        ♦`.blue);
        console.log(`♦        `.blue + `${'4.'.yellow} Grabar nuevos productos`.cyan + `    ♦`.blue);
        console.log(`♦        `.blue + `${'5.'.yellow} Borrar producto`.cyan + `            ♦`.blue);
        console.log(`♦        `.blue + `${'6.'.yellow} Comprar productos`.cyan + `          ♦`.blue);
        console.log(`♦        `.blue + `${'7.'.yellow} Imprimir factura`.cyan + `           ♦`.blue);
        console.log(`♦        `.blue + `${'0.'.yellow} Cerrar app`.cyan + `                 ♦`.blue);
        console.log(`♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦\n`.blue);

        // Crea una interfaz de lectura en la consola para permitir la entrada del usuario
        const readLine = require('readline').createInterface({
            // Define el flujo de entrada, para leer la entrada del usuario desde la consola
            input: process.stdin,
            //Define el flujo de salida, para mostrar mensajes en la consola
            output: process.stdout
        });
        //Le indica al usuario que debe escoger una opción del menu
        readLine.question(`\nElija una opción ► `.yellow, (opt) => {
            // Se cierra la interfaz de lectura
            readLine.close();
            // Se resuelve la promesa con la opción seleccionada por el usuario
            resolve(opt);
        })
    })
};

//Se crea una función constante que es una función flecha llamada pausa
const pausa = () => {

    // Retorna una nueva promesa que se resuelve con el valor proporcionado en la función 'resolve'
    return new Promise(resolve => {
        // Crea una interfaz de lectura en la consola para permitir la entrada del usuario
        const readLine = require('readline').createInterface({
            // Define el flujo de entrada, para leer la entrada del usuario desde la consola
            input: process.stdin,
            //Define el flujo de salida, para mostrar mensajes en la consola
            output: process.stdout
        })
        // Se le pide al usuario que presione ENTER para continuar
        readLine.question(`\n Presione ${'ENTER'} para continuar\n`.yellow, (opt) => {
            // Una vez que el usuario presiona ENTER, se cierra la interfaz de lectura y se resuelve la promesa
            readLine.close();
            resolve(opt);
        })
    })
};

const CopiaRespaldo = async () => {
    // Crea una interfaz de lectura en la consola para permitir la entrada del usuario
    const readLine = require('readline').createInterface({
        // Define el flujo de entrada, para leer la entrada del usuario desde la consola
        input: process.stdin,
        //Define el flujo de salida, para mostrar mensajes en la consola
        output: process.stdout
    });
    // Bucle infinito para continuar preguntando hasta obtener una respuesta válida
    while (true) {
        // Se espera la respuesta del usuario a la pregunta "¿Desea realizar una copia de respaldo?"
        const respuesta = await new Promise(resolve => {
            readLine.question(`\n¿Desea realizar una copia de respaldo? (SI/NO) `.red, (input) => {
                // Se resuelve la promesa con la respuesta del usuario, limpiada y en mayúsculas
                resolve(input.trim().toUpperCase());
            });
        });

        // Si la respuesta es 'SI', se cierra la interfaz de línea de lectura y se devuelve true
        if (respuesta === 'SI') {
            readLine.close();
            return true;
        }
        // Si la respuesta es 'NO', se cierra la interfaz de línea de lectura y se devuelve false
        else if (respuesta === 'NO') {
            readLine.close();
            return false;
        }
        // Si la respuesta no es ni 'SI' ni 'NO', se muestra un mensaje de error
        else {
            console.log(`\nRespuesta no válida. Por favor, ingrese 'SI' o 'NO'.`.yellow);
        }
    }
};

// Se define una función asíncrona llamada recuperarDatos
const recuperarDatos = async () => {
    // Crea una interfaz de lectura en la consola para permitir la entrada del usuario
    const readLine = require('readline').createInterface({
        // Define el flujo de entrada, para leer la entrada del usuario desde la consola
        input: process.stdin,
        //Define el flujo de salida, para mostrar mensajes en la consola
        output: process.stdout
    })

    // Se obtiene la ruta del directorio superior al actual
    const ruta = path.join(__dirname, '..');

    // Bucle infinito para continuar preguntando hasta obtener una respuesta válida
    while (true) {
        // Se espera la respuesta del usuario a la pregunta "¿Desea recuperar alguna copia de respaldo?"
        const respuestaRecuperar = await new Promise((resolve) => {
            readLine.question(`\n¿Desea recuperar alguna copia de respaldo? (SI/NO) `.red, (respuesta) => {
                // Se resuelve la promesa con la respuesta del usuario, limpiada y en mayúsculas
                resolve(respuesta.trim().toUpperCase());
            });
        });

        // Si la respuesta es 'SI', se procede a listar y permitir seleccionar copias de seguridad
        if (respuestaRecuperar === 'SI') {
            // Se obtiene la lista de archivos en el directorio
            const archivos = await new Promise((resolve, reject) => {
                /*Se usa fs.readdir para leer el contenido del directorio, tiene dos parámetros la ruta del directorio 
                que se requiere, un objeto error, que será null si la operación es exitosa y un array que contiene los
                nombres de los archivos y directorios*/
                fs.readdir(ruta, (err, files) => {
                    if (err) {
                        readLine.close();
                        /*  Si hay algún error durante la lectura del directorio, se llama a la función reject con el objeto 
                        de error err. Esto rechaza la Promesa con el error especificado.*/
                        reject(err);
                    } else {
                        /*Si la operación de lectura del directorio es exitosa, se llama a la función resolve con files, es decir,
                     la lista de archivos en el directorio. Esto cumple la Promesa con éxito. */
                        resolve(files);
                    }
                });
            });

            // Se filtran las copias de seguridad en base al formato del nombre de archivo
            const copiasDisponibles = archivos.filter(file => file.startsWith('datos_copia_') && file.endsWith('.json'));

            // Si no hay copias disponibles, se informa al usuario y se devuelve null
            if (copiasDisponibles.length === 0) {
                console.log(`No se encontraron copias de seguridad`.green);
                readLine.close();
                return null;
            } else {
                // Se muestra la lista de copias disponibles al usuario
                console.log(`\nLas siguientes copias de seguridad están disponibles:\n`.green);
                copiasDisponibles.forEach((file, index) => {
                    console.log(`${index + 1}. ${file}`);
                });

                // Se solicita al usuario que ingrese el número de la copia de seguridad que desea restaurar
                const indexSeleccionado = await new Promise(resolve => {
                    readLine.question(`\nIngrese el número de la copia de seguridad que desea restaurar: `.green, (index) => {
                        resolve(index);
                    });
                });

                // Se cierra la interfaz de línea de lectura
                readLine.close();

                // Se selecciona la copia de seguridad según la elección del usuario
                const selectedFile = copiasDisponibles[indexSeleccionado - 1];
                if (!selectedFile) {
                    console.log(`Selección no válida`.green);
                    return null;
                } else {
                    // Se lee el contenido del archivo de la copia de seguridad y se parsea como JSON
                    const rutaArchivo = path.join(ruta, selectedFile);
                    const datos = fs.readFileSync(rutaArchivo, 'utf-8');
                    return JSON.parse(datos);
                }
            }
        }
        // Si la respuesta es 'NO', se cierra la interfaz de línea de lectura y se devuelve false
        else if (respuestaRecuperar === 'NO') {
            readLine.close();
            return false;
        }
        // Si la respuesta no es ni 'SI' ni 'NO', se muestra un mensaje de error
        else {
            console.log(`\nRespuesta no válida. Por favor, ingrese 'SI' o 'NO'.`.yellow);
        }
    }
};

// Se define una función asíncrona llamada eliminarProducto
const eliminarProducto = async () => {
    // Crea una interfaz de lectura en la consola para permitir la entrada del usuario
    const readLine = require('readline').createInterface({
        // Define el flujo de entrada, para leer la entrada del usuario desde la consola
        input: process.stdin,
        //Define el flujo de salida, para mostrar mensajes en la consola
        output: process.stdout
    })

    // Bucle infinito para continuar preguntando hasta obtener una respuesta válida
    while (true) {
        // Se espera la respuesta del usuario a la pregunta "¿Desea eliminar un producto?"
        const respuestaEliminar = await new Promise(resolve => {
            readLine.question(`\n¿Desea eliminar un producto? (SI/NO) `.red, (respuesta) => {
                // Se resuelve la promesa con la respuesta del usuario, limpiada y en mayúsculas
                resolve(respuesta.trim().toUpperCase());
            });
        });

        // Si la respuesta es 'SI', se pide al usuario que ingrese el código del producto
        if (respuestaEliminar === 'SI') {
            // Se espera la entrada del usuario para el código del producto
            const codigoProducto = await new Promise(resolve => {
                readLine.question(`\nDigite el código del producto: `.green, (codigo) => {
                    // Se resuelve la promesa con el código del producto ingresado por el usuario
                    resolve(codigo);
                });
            });

            // Se cierra la interfaz de línea de lectura
            readLine.close();
            // Se devuelve el código del producto
            return codigoProducto;
        }
        // Si la respuesta es 'NO', se cierra la interfaz de línea de lectura y se devuelve false
        else if (respuestaEliminar === 'NO') {
            readLine.close();
            return false;
        }
        // Si la respuesta no es ni 'SI' ni 'NO', se muestra un mensaje de error
        else {
            console.log(`\nRespuesta no válida. Por favor, ingrese 'SI' o 'NO'.`.yellow);
        }
    }
};

//Se crea una función constante que es una función flecha llamada datosCliente
const datosCliente = () => {
    // Se devuelve una nueva promesa que resuelve con un objeto que contiene la información del cliente
    return new Promise((resolve) => {
        // Crea una interfaz de lectura en la consola para permitir la entrada del usuario
        const readLine = require('readline').createInterface({
            // Define el flujo de entrada, para leer la entrada del usuario desde la consola
            input: process.stdin,
            //Define el flujo de salida, para mostrar mensajes en la consola
            output: process.stdout
        });

        // Se declaran variables para almacenar la información del cliente
        let nombreCliente, numeroIdentificacion, telefono;

        // Se solicita al usuario que ingrese el nombre del cliente
        readLine.question(`\nDigite el nombre del cliente  ►  `.green, (nombre) => {
            // Se guarda el nombre del cliente en la variable correspondiente
            nombreCliente = nombre;
            // Se solicita al usuario que ingrese el número de identificación del cliente
            readLine.question(`\nDigite el número de identificación  ►  `.green, (identificacion) => {
                // Se guarda el número de identificación en la variable correspondiente
                numeroIdentificacion = identificacion;
                // Se solicita al usuario que ingrese el teléfono del cliente
                readLine.question(`\nDigite el teléfono del cliente  ►  `.green, (tel) => {
                    // Se guarda el teléfono en la variable correspondiente
                    telefono = tel;
                    // Se cierra la interfaz de lectura
                    readLine.close();
                    // Se resuelve la promesa con un objeto que contiene la información del cliente
                    resolve({ nombreCliente, numeroIdentificacion, telefono });
                });
            });
        });
    });
};

// Exporta un objeto que contiene varias funciones utilizadas en el módulo app.js
module.exports = {
    mostrarMenu,
    pausa,
    datosCliente,
    CopiaRespaldo,
    eliminarProducto,
    recuperarDatos
};