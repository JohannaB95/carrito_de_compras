const mostrarMenu = () => {

    return new Promise(resolve => {
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

        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        readLine.question(`\nElija una opción ► `.red, (opt) => {
            readLine.close();
            resolve(opt);
        })
    })
};

const pausa = () => {

    return new Promise(resolve => {
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })
        readLine.question(`\n Presione ${'ENTER'} para continuar\n`.green, (opt) => {
            readLine.close();
            resolve(opt);
        })
    })
};

const preguntarNuevoProducto = () => {

    return new Promise(resolve => {
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        readLine.question(`\n¿Desea ingresar un nuevo producto? (SI/NO) `.red, (respuesta) => {
            readLine.close();
            resolve(respuesta.toUpperCase() === 'SI');
        });
    });
};

const nuevoProducto = () => {

    return new Promise(resolve => {
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
            readLine.question(`\nDigite el código del producto ►  `.green, (codigoProducto) => {
                readLine.question(`\nDigite el nombre del producto ►   `.green, (nombreProducto) => {
                    readLine.question(`\nDigite el inventario del producto ►  `.green, (inventarioProducto) => {
                        readLine.question(`\nDigite el precio del producto ►  `.green, (precioProducto) => {
                            readLine.close();
                            resolve(codigoProducto);
                            resolve(nombreProducto);
                            resolve(inventarioProducto);
                            resolve(precioProducto);
                        })
                    })
                })
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
            readLine.close();
            resolve(respuesta.toUpperCase() === 'SI');
        });
    });
};

const mostrarMenuPedido = () => {

    return new Promise(resolve => {
        console.log(`\n♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦`.yellow);
        console.log(`♦   `.yellow + `INGRESO NUEVO PEDIDO`.cyan + `  ♦`.yellow)
        console.log(`♦     `.yellow + `Elija una opción`.cyan + `    ♦`.yellow)
        console.log(`♦        `.yellow + `${'1.'.red} Aceptar` + `       ♦`.yellow);
        console.log(`♦        `.yellow + `${'0.'.red} Cancelar` + `      ♦`.yellow);
        console.log(`♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦`.yellow);

        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        readLine.question(`\n¿Desea ingresar un nuevo pedido? `.red, (opt1) => {
            readLine.close();
            resolve(opt1);
        })
    })
};

const ingresarNombreCliente = () => {

    return new Promise(resolve => {
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        readLine.question(`\n¿Cual es el nombre del cliente? ►  `.green, (nombreCliente) => {
            readLine.close();
            resolve(nombreCliente);
        })
    })
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
        readLine.question(`\n¿Desea ingresar otro pedido? (SI/NO) `.red, (respuesta1) => {
            readLine.close();
            resolve(respuesta1.toUpperCase() === 'SI');
        });
    });
};

module.exports = {
    mostrarMenu,
    preguntarNuevoProducto,
    nuevoProducto,
    pausa,
    preguntarOtroProducto,
    mostrarMenuPedido,
    ingresarNombreCliente,
    ingresarCodigo,
    ingresarNombre,
    ingresarUnidades,
    ingresarPrecio,
    preguntarOtroPedido,
};