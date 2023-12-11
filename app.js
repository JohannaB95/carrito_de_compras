//Se carga la librería colors para permitir el uso de estilos de colores en la terminal.
require('colors');

//Se carga el código que contiene Producto, ProductosTienda y CarritoCompras desde el módulo clases.js
const { Producto, ProductosTienda, CarritoCompras } = require('./proy_modules/clases.js');

//Se carga el código que contiene el archivo 'menu.js' en la carpeta 'proy_modules'.
const { mostrarMenu, pausa } = require('./proy_modules/menu.js');

//Se declara una función flecha llamada main y que es asíncrona
const main = async () => {

    // Limpia la consola antes de imprimir el menú principal
    console.clear();

    //Se solicita imprimir un encabezado en la consola y que sea de color rojo, se añade diseño.
    console.log(`\n★★★★★★★★★★★★★★★★★★★★★★`.red);
    console.log(`★   Menú Principal   ★`.red);
    console.log(`★★★★★★★★★★★★★★★★★★★★★★\n`.red);

    // Se crea una nueva instancia de la clase ProductosTienda
    let productosTienda = new ProductosTienda();

    // Se crea una nueva instancia de la clase CarritoCompras
    let carritoCompras = new CarritoCompras();

    //Se declara una variable llamada option que almacenara el número de opción elegida por el usuario
    let option = ' ';

    // Se declara una variable llamada archivoProductosCargado que se inicializa en false
    let archivoProductosCargado = false;

    // Bucle principal que ejecuta el menú hasta que el usuario elige salir (opción '0')
    do {
         // Bucle interno para asegurarse de que la opción ingresada sea válida (entre '0' y '7')
        do {
            option = await mostrarMenu();
        } while (!(option >= '0' && option <= '7'));

        /*
         * Función principal que implementa un menú interactivo.
         * Se utiliza una estructura de selección switch que tendrá como parámetro a option.
         */
        switch (option) {
            // Si la opción elegida es la 1: Caso 1: mostrar la cantidad de productos almacenados en el archivo datos.json
            case '1':
                //Se utiliza un console.clear que limpiara la consola
                console.clear();
                //se imprime un encabezado que indica lo que se realiza en esta opción
                console.log(`♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦`.cyan);
                console.log(`♦   `.cyan + `Cantidad de productos`.bgCyan + `   ♦`.cyan);
                console.log(`♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦\n`.cyan);

                /*Para cargar el archivo, se utiliza el método cargarArchivoProductos del objeto productosTienda,
                 y se utiliza la palabra clave 'await' para esperar a que la operación se complete antes de continuar.*/
                await productosTienda.cargarArchivoProductos();
               // La variable archivoProductosCargado se establecerá en true cuando el archivo de productos se haya cargado correctamente.
                archivoProductosCargado = true;
                // Fin del caso 1
                break;
            // Si la opción elegida es la 2: Caso 2: Se procede a hacer el proceso para guardar una copia de respaldo.
            case '2':
                //Se utiliza un console.clear que limpiara la consola
                console.clear();
                //se imprime un encabezado que indica lo que se realiza en esta opción
                console.log(`\n★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★`.cyan);
                console.log(`★  `.cyan + `Grabar Copia de Respaldo`.bgCyan + `  ★`.cyan);
                console.log(`★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★`.cyan);

                /*Para grabar la copia de respaldo, se utiliza el método grabarCopiaRespaldo del objeto productosTienda,
                 y se utiliza la palabra clave 'await' para esperar a que la operación se complete antes de continuar.*/
                await productosTienda.grabarCopiaRespaldo();
                // Fin del caso 2
                break;
            // Si la opción elegida es la 3: Caso 3: Se procede a hacer el proceso para reparar los datos.
            case '3':
                //Se utiliza un console.clear que limpiara la consola
                console.clear();
                //se imprime un encabezado que indica lo que se realiza en esta opción
                console.log(`\n★★★★★★★★★★★★★★★★★★★★★★★★★`.cyan);
                console.log(`★  `.cyan + `Reparación de datos`.bgCyan + `  ★`.cyan);
                console.log(`★★★★★★★★★★★★★★★★★★★★★★★★★`.cyan);
                  /*Para la reparación de datos, se utiliza el método reparacionDatos del objeto productosTienda,
                 y se utiliza la palabra clave 'await' para esperar a que la operación se complete antes de continuar.*/
                await productosTienda.reparacionDatos();
                // Fin del caso 3
                break;
            // Si la opción elegida es la 4: Caso 4: Se procede a hacer el proceso para ingresar un nuevo producto.
            case '4':
                //Se utiliza un console.clear que limpiara la consola
                console.clear();
                //se imprime un encabezado que indica lo que se realiza en esta opción
                console.log(`\n★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★`.cyan);
                console.log(`★  `.cyan + `Ingresar un Nuevo Producto`.bgCyan + `  ★`.cyan);
                console.log(`★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★`.cyan);

                //Para mostrar los productos, se utiliza el método mostrarProductos del objeto productosTienda
                productosTienda.mostrarProductos();
                       /*Se usa un condicional if-else, para comprobar si el archivo de productos ha sido cargado o no.
                Si el archivo de productos no ha sido cargado (!archivoProductosCargado es true),
                se imprime un mensaje de error indicando que se debe cargar primero el archivo de productos.*/
                if (!archivoProductosCargado) {
                    console.log(`\nError: Debe cargar primero el archivo de productos`.red);
                /* Si el archivo de productos ha sido cargado (archivoProductosCargado es false),
                 se ejecuta el bloque else. En este caso, se utiliza 'await' para esperar a que el usuario
                 ingrese un nuevo producto utilizando el método preguntarNuevoProducto de productosTienda.*/
                } else {
                    await productosTienda.preguntarNuevoProducto();
                }
                // Fin del caso 4
                break;
            // Si la opción elegida es la 5: Caso 5: Se procede a hacer el proceso para eliminar un producto.
            case '5':
                //Se utiliza un console.clear que limpiara la consola
                console.clear();
                //se imprime un encabezado que indica lo que se realiza en esta opción
                console.log(`\n★★★★★★★★★★★★★★★★★★★★★★★★★★`.cyan);
                console.log(`★  `.cyan + `Eliminar un Producto`.bgCyan + `  ★`.cyan);
                console.log(`★★★★★★★★★★★★★★★★★★★★★★★★★★`.cyan);

                //Para mostrar los productos, se utiliza el método mostrarProductos del objeto productosTienda
                productosTienda.mostrarProductos();

                /*Se usa un condicional if-else, para comprobar si el archivo de productos ha sido cargado o no.
                Si el archivo de productos no ha sido cargado (!archivoProductosCargado es true),
                se imprime un mensaje de error indicando que se debe cargar primero el archivo de productos.*/
                if (!archivoProductosCargado) {
                    console.log(`\nError: Debe cargar primero el archivo de productos`.red);
                /* Si el archivo de productos ha sido cargado (archivoProductosCargado es false),
                se ejecuta el bloque else. En este caso, se utiliza 'await' para esperar a que el usuario borre un
                producto utilizando el método borrarProducto de productosTienda.*/
                } else {
                    await productosTienda.borrarProducto();
                }
                // Fin del caso 5
                break;
            // Si la opción elegida es la 6: Caso 6: Se procede a hacer el proceso para realizar un nuevo pedido.
            case '6':
                //Se utiliza un console.clear que limpiara la consola
                console.clear();
                //se imprime un encabezado que indica lo que se realiza en esta opción
                console.log(`\n★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★`.cyan);
                console.log(`★  `.cyan + `Realizar un Nuevo Pedido`.bgCyan + `  ★`.cyan);
                console.log(`★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★`.cyan);

                 //Para mostrar los productos, se utiliza el método mostrarProductos del objeto productosTienda
                 productosTienda.mostrarProductos();

                /*Se usa un condicional if-else, para comprobar si el archivo de productos ha sido cargado o no.
                Si el archivo de productos no ha sido cargado (!archivoProductosCargado es true),
                se imprime un mensaje de error indicando que se debe cargar primero el archivo de productos.*/
                if (!archivoProductosCargado) {
                    console.log(`\nError: Debe cargar primero el archivo de productos`.red);
                /* Si el archivo de productos ha sido cargado (archivoProductosCargado es false),
                se ejecuta el bloque else. En este caso, se utiliza 'await' para esperar a que el usuario ingrese un nuevo
                pedido utilizando el método preguntarNuevoPedido de carritoCompras.*/
                } else {
                    await carritoCompras.preguntarNuevoPedido();
                }
                // Fin del caso 6
                break;
            // Si la opción elegida es la 7: Caso 7: Se procede a hacer el proceso para imprimir la factura de compra.
            case '7':
                //Se utiliza un console.clear que limpiara la consola
                console.clear();
                //se imprime un encabezado que indica lo que se realiza en esta opción
                console.log(`\n★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★`.cyan);
                console.log(`★      `.cyan + `Impresión factura`.bgCyan + `     ★`.cyan);
                console.log(`★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★`.cyan);

                /*Para la impresión de la factura, se utiliza el método imprimirFactura del objeto carritoCompras,
                 y se utiliza la palabra clave 'await' para esperar a que la operación se complete antes de continuar.*/
                await carritoCompras.imprimirFactura();
                // Fin del caso 7
                break;
            case '0':
                //Se utiliza un console.clear que limpiara la consola
                console.clear();
                //se imprime un encabezado que indica lo que se realiza en esta opción
                console.log(`\n★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★`.cyan);
                console.log(`★    `.cyan + `Cerrando la aplicación...`.bgCyan + `    ★`.cyan);
                console.log(`★`.cyan + `Gracias por usar nuestro servicio`.bgCyan + `★`.cyan)
                console.log(`★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★`.cyan);
                // Fin del caso 0
                break;
             //Si la opción ingresada no coincide con ningún caso, se ejecuta el bloque default y se imprime un mensaje de error en la consola.
            default:
                console.log(`\nOpción no válida. Intente de nuevo.`.red);
                // Fin de default
                break;
        }
        /*Si la opción no es '0', se espera a que el usuario presione una tecla antes de continuar.
        Esto ayuda a pausar la ejecución del programa y permite al usuario visualizar el resultado antes de mostrar nuevamente el menú.*/
        if (option !== '0') {
            await pausa();
        }

    // Fin del bucle principal. El bucle se seguirá ejecutando mientras el usuario no haya seleccionado la opción '0'
    } while (option !== '0');

};

//Fin de la función main
main();