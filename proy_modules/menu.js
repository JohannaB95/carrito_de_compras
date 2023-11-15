//Se incluye el módulo fs que permite gestionar el sistema de archivos.
const fs = require('fs');

//Se incluye el módulo path que permite gestionar rutas de archivos y directorios
const path = require('path');

// Se declara una variable constante llamada directorioCopia que establece el directorio de copia con la ruta completa en formato de cadena
const directorioCopia = 'C:\\Node_JS\\carrito_de_compras';

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

//Se crea una función constante que es una función flecha llamada preguntarNuevoProducto
const preguntarNuevoProducto = () => {

    return new Promise(resolve => {
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        // Se crea una pregunta para solicitar al usuario que ingrese una respuesta, respecto a si quiere o no ingresar un nuevo producto
        readLine.question(`\n¿Desea ingresar un nuevo producto? (SI/NO) `.red, (respuesta) => {
            // Si la respuesta ingresada (limpiada y convertida a mayúsculas) es 'SI', se resuelve con el valor booleano true.
            if (respuesta.trim().toUpperCase() === 'SI') {
                // Se cierra la interfaz de lectura.
                readLine.close();
                // Se resuelve la promesa con el valor true.
                resolve(true);
                // Si la respuesta ingresada (limpiada y convertida a mayúsculas) es 'NO', se resuelve con el valor booleano false.
            } else if (respuesta.trim().toUpperCase() === 'NO') {
                // Se cierra la interfaz de lectura.
                readLine.close();
                // Se resuelve la promesa con el valor false.
                resolve(false);
                // Si la respuesta no es ni 'SI' ni 'NO', se resuelve con el valor nulo.
            } else {
                // Se cierra la interfaz de lectura.
                readLine.close();
                // Se resuelve la promesa con el valor null.
                resolve(null);
            }
        });
    });
};

//Se crea una función constante que es una función flecha llamada digitarCodigo
const digitarCodigo = () => {

    // Retorna una nueva promesa que se resuelve con el valor proporcionado en la función 'resolve'
    return new Promise(resolve => {

        // Crea una interfaz de lectura en la consola para permitir la entrada del usuario
        const readLine = require('readline').createInterface({
            // Define el flujo de entrada, para leer la entrada del usuario desde la consola
            input: process.stdin,
            //Define el flujo de salida, para mostrar mensajes en la consola
            output: process.stdout
        });

        // Solicita al usuario que ingrese el código del producto
        readLine.question(`\nDigite el código del producto ►  `.green, (codigoProducto) => {
            // Se cierra la interfaz de lectura
            readLine.close();
            // Se resuelve la promesa con el código del producto ingresado por el usuario
            resolve(codigoProducto);
        })
    })
};

//Se crea una función constante que es una función flecha llamada digitarNombre
const digitarNombre = () => {

    // Retorna una nueva promesa que se resuelve con el valor proporcionado en la función 'resolve'
    return new Promise(resolve => {

        // Crea una interfaz de lectura en la consola para permitir la entrada del usuario
        const readLine = require('readline').createInterface({
            // Define el flujo de entrada, para leer la entrada del usuario desde la consola
            input: process.stdin,
            //Define el flujo de salida, para mostrar mensajes en la consola
            output: process.stdout
        });

        // Solicita al usuario que ingrese el nombre del producto
        readLine.question(`\nDigite el nombre del producto ►   `.green, (nombreProducto) => {
            // Se cierra la interfaz de lectura
            readLine.close();
            // Se resuelve la promesa con el nombre del producto ingresado por el usuario
            resolve(nombreProducto);
        })
    })
};

//Se crea una función constante que es una función flecha llamada digitarInventario
const digitarInventario = () => {

    // Retorna una nueva promesa que se resuelve con el valor proporcionado en la función 'resolve'
    return new Promise(resolve => {

        // Crea una interfaz de lectura en la consola para permitir la entrada del usuario
        const readLine = require('readline').createInterface({
            // Define el flujo de entrada, para leer la entrada del usuario desde la consola
            input: process.stdin,
            //Define el flujo de salida, para mostrar mensajes en la consola
            output: process.stdout
        });

        // Solicita al usuario que ingrese el inventario del producto
        readLine.question(`\nDigite el inventario del producto ►  `.green, (inventarioProducto) => {
            // Se cierra la interfaz de lectura
            readLine.close();
            // Se resuelve la promesa con el inventario del producto ingresado por el usuario
            resolve(inventarioProducto);
        })
    })
};

//Se crea una función constante que es una función flecha llamada digitarPrecio
const digitarPrecio = () => {

    // Retorna una nueva promesa que se resuelve con el valor proporcionado en la función 'resolve'
    return new Promise(resolve => {

        // Crea una interfaz de lectura en la consola para permitir la entrada del usuario
        const readLine = require('readline').createInterface({
            // Define el flujo de entrada, para leer la entrada del usuario desde la consola
            input: process.stdin,
            //Define el flujo de salida, para mostrar mensajes en la consola
            output: process.stdout
        });

        // Solicita al usuario que ingrese el precio del producto
        readLine.question(`\nDigite el precio del producto ►  `.green, (precioProducto) => {
            // Se cierra la interfaz de lectura
            readLine.close();
            // Se resuelve la promesa con el precio del producto ingresado por el usuario
            resolve(precioProducto);
        })
    })
};

const preguntarOtroProducto = () => {

    return new Promise(resolve => {
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readLine.question(`\n¿Desea ingresar otro producto? (SI/NO) `.red, (respuesta) => {
            if (respuesta.trim().toUpperCase() === 'SI') {
                readLine.close();
                resolve(true);
            } else if (respuesta.trim().toUpperCase() === 'NO') {
                readLine.close();
                resolve(false);
            } else {
                readLine.close();
                resolve(null);
            }
        });
    });
};

const preguntarNuevoPedido = () => {
    return new Promise(resolve => {
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readLine.question(`\n¿Desea ingresar un nuevo pedido? (SI/NO) `.red, (respuesta) => {
            if (respuesta.trim().toUpperCase() === 'SI') {
                readLine.close();
                resolve(true);
            } else if (respuesta.trim().toUpperCase() === 'NO') {
                readLine.close();
                resolve(false);
            } else {
                readLine.close();
                resolve(null);
            }
        });
    });
};

const ingresarCodigo = () => {

    return new Promise(resolve => {
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        readLine.question(`\nIngrese el código del producto ►  `.green, (codigoProducto) => {
            readLine.close();
            resolve(codigoProducto);
        })
    })
};

const ingresarNombre = () => {

    return new Promise(resolve => {
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        readLine.question(`\nIngrese el nombre del producto ►   `.green, (nombreProducto) => {
            readLine.close();
            resolve(nombreProducto);
        })
    })
};

const ingresarUnidades = () => {

    return new Promise(resolve => {
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readLine.question(`\nIngrese la cantidad ►  `.green, (inventarioProducto) => {
            readLine.close();
            resolve(inventarioProducto);
        })
    })
};

const ingresarPrecio = () => {

    return new Promise(resolve => {

        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readLine.question(`\nIngrese el precio del producto ►  `.green, (precioProducto) => {
            readLine.close();
            resolve(precioProducto);
        })
    })
};

const preguntarOtroPedido = () => {
    return new Promise(resolve => {

        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readLine.question(`\n¿Desea ingresar otro pedido? (SI/NO) `.red, (respuesta) => {
            if (respuesta.trim().toUpperCase() === 'SI') {
                readLine.close();
                resolve(true);
            } else if (respuesta.trim().toUpperCase() === 'NO') {
                readLine.close();
                resolve(false);
            } else {
                readLine.close();
                resolve(null);
            }
        });
    });
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

const CopiaRespaldo = () => {
    return new Promise(resolve => {
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readLine.question(`\n¿Desea realizar una copia de respaldo? (SI/NO) `.red, (respuesta) => {
            if (respuesta.trim().toUpperCase() === 'SI') {
                readLine.close();
                resolve(true);
            } else if (respuesta.trim().toUpperCase() === 'NO') {
                readLine.close();
                resolve(false);
            } else {
                readLine.close();
                resolve(null);
            }
        });
    });
};
//Se crea una función constante que es una función flecha llamada recuperarDatos
const recuperarDatos = () => {
    // Se devuelve una nueva promesa que resuelve con los datos recuperados (o null si no se desea recuperar)
    return new Promise((resolve, reject) => {
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        // Se hace una pregunta al usuario sobre si desea recuperar alguna copia de respaldo
        readLine.question(`\n¿Desea recuperar alguna copia de respaldo? (SI/NO) `.red, (respuesta) => {
            if (respuesta.trim().toUpperCase() === 'SI') {
                // Si la respuesta es "SI", se utiliza el módulo 'fs' para leer el contenido del directorio de copias
                fs.readdir(directorioCopia, (err, files) => {
                    if (err) {
                        // Si hay un error al leer el directorio, se cierra la interfaz de lectura y se rechaza la promesa
                        readLine.close();
                        reject(err);
                    } else {
                        // Se filtran las copias disponibles para quedarse con los archivos que cumplen con ciertos criterios
                        const copiasDisponibles = files.filter(file => file.startsWith('datos_copia_') && file.endsWith('.json'));

                        // Si no hay copias disponibles, se informa al usuario y se resuelve la promesa con null
                        if (copiasDisponibles.length === 0) {
                            //Se imprime un mensaje en la consola avisando que no se encontraron copias
                            console.log(`No se encontraron copias de seguridad`.green);
                            readLine.close();
                            resolve(null);
                        } else {
                            // En caso contrario, se informa al usuario sobre las copias disponibles y se le pide seleccionar una
                            console.log(`\nLas siguientes copias de seguridad están disponibles:\n`.green);
                            copiasDisponibles.forEach((file, index) => {
                                console.log(`${index + 1}. ${file}`);
                            });

                            // Se le pide al usuario que ingrese el número de la copia de seguridad que desea restaurar
                            readLine.question(`\nIngrese el número de la copia de seguridad que desea restaurar: `.green, (index) => {
                                // Se cierra la interfaz de lectura
                                readLine.close();
                                // Se obtiene el nombre del archivo seleccionado
                                const selectedFile = copiasDisponibles[index - 1];
                                if (!selectedFile) {
                                    // Si la selección no es válida, se informa al usuario y se resuelve la promesa con null
                                    console.log(`Selección no válida`.green);
                                    resolve(null);
                                } else {
                                    // Se construye la ruta completa del archivo seleccionado
                                    const rutaArchivo = path.join(directorioCopia, selectedFile);
                                    // Se lee el contenido del archivo seleccionado
                                    const datos = fs.readFileSync(rutaArchivo, 'utf-8');
                                    // Se resuelve la promesa con los datos recuperados parseados desde formato JSON
                                    resolve(JSON.parse(datos));
                                }
                            });
                        }
                    }
                });
            } else if (respuesta.trim().toUpperCase() === 'NO') {
                // Si la respuesta es "NO", se cierra la interfaz de lectura y se resuelve la promesa con false
                readLine.close();
                resolve(false);
            } else {
                // Si la respuesta no es ni "SI" ni "NO", se cierra la interfaz de lectura y se resuelve la promesa con null
                readLine.close();
                resolve(null);
            }
        });
    });
};

//Se crea una función constante que es una función flecha llamada eliminarProducto
const eliminarProducto = () => {
    return new Promise((resolve) => {
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        // Se crea una pregunta para solicitar al usuario que ingrese una respuesta, respecto a si quiere o no eliminar un producto
        readLine.question(`\n¿Desea eliminar un producto? (SI/NO) `.red, (respuesta) => {
            // Si la respuesta ingresada (limpiada y convertida a mayúsculas) es 'SI', se resuelve con el valor booleano true.
            if (respuesta.trim().toUpperCase() === 'SI') {
                // Si la respuesta es "SI", se solicita al usuario que ingrese el código del producto a eliminar
                readLine.question(`\nDigite el código del producto: `.green, (codigoProducto) => {
                    // Se cierra la interfaz de lectura
                    readLine.close();
                    // Se resuelve la promesa con el código del producto a eliminar
                    resolve(codigoProducto);
                });
                // Si la respuesta es "NO", se cierra la interfaz de lectura y se resuelve la promesa con false
            } else if (respuesta.trim().toUpperCase() === 'NO') {
                readLine.close();
                resolve(false);
                // Si la respuesta no es ni 'SI' ni 'NO', se resuelve con el valor nulo.
            } else {
                readLine.close();
                resolve(null);
            }
        });
    });
};

// Exporta un objeto que contiene varias funciones utilizadas en el módulo app.js
module.exports = {
    mostrarMenu,
    preguntarNuevoProducto,
    digitarCodigo,
    digitarNombre,
    digitarInventario,
    digitarPrecio,
    pausa,
    preguntarOtroProducto,
    preguntarNuevoPedido,
    ingresarCodigo,
    ingresarNombre,
    ingresarUnidades,
    ingresarPrecio,
    preguntarOtroPedido,
    datosCliente,
    CopiaRespaldo,
    eliminarProducto,
    recuperarDatos
};