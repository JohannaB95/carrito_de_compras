//Se crea una función flecha de tipo constante llamada mostrarMenu
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

//Se crea una constante llamada pausa que es una función flecha
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

// Exporta un objeto que contiene varias funciones utilizadas en el módulo app.js
module.exports = {
    mostrarMenu,
    pausa
};