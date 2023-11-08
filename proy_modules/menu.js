const fs = require('fs');
const path = require('path');

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
            //Si la respuesta es si, 
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

const digitarCodigo = () => {

    return new Promise(resolve => {
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        readLine.question(`\nDigite el código del producto ►  `.green, (codigoProducto) => {
            readLine.close();
            resolve(codigoProducto);
        })
    })
};

const digitarNombre = () => {

    return new Promise(resolve => {
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        readLine.question(`\nDigite el nombre del producto ►   `.green, (nombreProducto) => {
            readLine.close();
            resolve(nombreProducto);
        })
    })
};

const digitarInventario = () => {

    return new Promise(resolve => {

        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readLine.question(`\nDigite el inventario del producto ►  `.green, (inventarioProducto) => {
            readLine.close();
            resolve(inventarioProducto);
        })
    })
};

const digitarPrecio = () => {

    return new Promise(resolve => {
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        readLine.question(`\nDigite el precio del producto ►  `.green, (precioProducto) => {
            readLine.close();
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
                resolve(false); // Indicar que no se desea ingresar otro pedido
            } else {
                readLine.close();
                resolve(null); // Manejar otro tipo de respuesta
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
                resolve(false); // Indicar que no se desea ingresar otro pedido
            } else {
                readLine.close();
                resolve(null); // Manejar otro tipo de respuesta
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
                resolve(false); // Indicar que no se desea ingresar otro pedido
            } else {
                readLine.close();
                resolve(null); // Manejar otro tipo de respuesta
            }
        });
    });
};

const datosCliente = () => {
    return new Promise((resolve) => {
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        let nombreCliente, numeroIdentificacion, telefono;

        readLine.question(`\nDigite el nombre del cliente  ►  `.green, (nombre) => {
            nombreCliente = nombre;
            readLine.question(`\nDigite el número de identificación  ►  `.green, (identificacion) => {
                numeroIdentificacion = identificacion;
                readLine.question(`\nDigite el teléfono del cliente  ►  `.green, (tel) => {
                    telefono = tel;
                    readLine.close();
                    resolve({ nombreCliente, numeroIdentificacion, telefono });
                });
            });
        });
    });
};

const eliminarProducto = () => {
    return new Promise((resolve) => {
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readLine.question(`\n¿Desea eliminar un producto? (SI/NO) `.red, (respuesta) => {
            if (respuesta.trim().toUpperCase() === 'SI') {
                readLine.question(`\nDigite el código del producto: `.green, (codigoProducto) => {
                    readLine.close();
                    resolve(codigoProducto);
                });
            } else if (respuesta.trim().toUpperCase() === 'NO') {
                readLine.close();
                resolve(null); 
            } else {
                readLine.close();
            }
        });
    });
};

const recuperarDatos = () => {
    return new Promise((resolve, reject) => {
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readLine.question(`\n¿Desea recuperar alguna copia de respaldo? (SI/NO) `.red, (respuesta) => {
            if (respuesta.trim().toUpperCase() === 'SI') {
                fs.readdir(directorioCopia, (err, files) => {
                    if (err) {
                        readLine.close();
                        reject(err);
                    } else {
                        const copiasDisponibles = files.filter(file => file.startsWith('datos_copia_') && file.endsWith('.json'));

                        if (copiasDisponibles.length === 0) {
                            console.log(`No se encontraron copias de seguridad`.green);
                            readLine.close();
                            resolve(null);
                        } else {
                            console.log(`\nLas siguientes copias de seguridad están disponibles:\n`.green);
                            copiasDisponibles.forEach((file, index) => {
                                console.log(`${index + 1}. ${file}`);
                            });

                            readLine.question(`\nIngrese el número de la copia de seguridad que desea restaurar: `.green, (index) => {
                                readLine.close();
                                const selectedFile = copiasDisponibles[index - 1];
                                if (!selectedFile) {
                                    console.log(`Selección no válida`.green);
                                    resolve(null);
                                } else {
                                    const rutaArchivo = path.join(directorioCopia, selectedFile);
                                    const datos = fs.readFileSync(rutaArchivo, 'utf-8');
                                    resolve(JSON.parse(datos));
                                }
                            });
                        }
                    }
                });
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
    eliminarProducto,
    recuperarDatos
};