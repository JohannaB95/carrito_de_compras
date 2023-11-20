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

    // Se solicita imprimir un encabezado en la consola y que sea de color rojo, se añade diseño.
    console.log(`\n★★★★★★★★★★★★★★★★★★★★★★`.red);
    console.log(`★   Menú Principal   ★`.red);
    console.log(`★★★★★★★★★★★★★★★★★★★★★★\n`.red);

    // Se crea una nueva instancia de la clase ProductosTienda
    let productosTienda = new ProductosTienda();

    // Se crea una nueva instancia de la clase CarritoCompras
    let carritoCompras = new CarritoCompras();

    //Se declara una variable llamada option que almacenara el número de opción elegida por el usuario
    let option = ' ';

    // Inicializa la variable para indicar si el archivo de productos ha sido cargado
    let archivoProductosCargado = false;

    // Bucle principal que ejecuta el menú hasta que el usuario elige salir (opción '0')
    do {
        // Bucle interno para solicitar una opción válida del menú
        do {
            option = await mostrarMenu();
        } while (!(option >= '0' && option <= '7'));

        // Switch para manejar las diferentes opciones del menú
        switch (option) {
            case '0':
                // Opción para cerrar la aplicación
                console.log(`\n★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★`.cyan);
                console.log(`★    `.cyan + `Cerrando la aplicación...`.bgCyan + `    ★`.cyan);
                console.log(`★`.cyan + `Gracias por usar nuestro servicio`.bgCyan + `★`.cyan)
                console.log(`★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★`.cyan);
                break;
            case '1':
                // Opción para cargar la cantidad de productos desde un archivo
                console.clear();
                console.log(`♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦`.cyan);
                console.log(`♦   `.cyan + `Cantidad de productos`.bgCyan + `   ♦`.cyan);
                console.log(`♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦\n`.cyan);
                // Carga el archivo de productos utilizando la función cargarArchivoProductos() de la instancia productosTienda
                await productosTienda.cargarArchivoProductos();
                // Actualiza la variable a true después de cargar el archivo de productos
                archivoProductosCargado = true;
                break;
            case '2':
                // Opción para realizar una copia de respaldo
                console.clear();
                console.log(`\n★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★`.cyan);
                console.log(`★  `.cyan + `Grabar Copia de Respaldo`.bgCyan + `  ★`.cyan);
                console.log(`★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★`.cyan);
                await productosTienda.grabarCopiaRespaldo();
                break;
            case '3':
                // Opción para realizar una reparación de datos
                console.clear();
                console.log(`\n★★★★★★★★★★★★★★★★★★★★★★★★★`.cyan);
                console.log(`★  `.cyan + `Reparación de datos`.bgCyan + `  ★`.cyan);
                console.log(`★★★★★★★★★★★★★★★★★★★★★★★★★`.cyan);
                await productosTienda.reparacionDatos();
                break;
            case '4':
                // Opción para ingresar un nuevo producto
                console.clear();
                console.log(`\n★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★`.cyan);
                console.log(`★  `.cyan + `Ingresar un Nuevo Producto`.bgCyan + `  ★`.cyan);
                console.log(`★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★`.cyan);
                // Verifica si el archivo de productos ha sido cargado
                if (!archivoProductosCargado) {
                    console.log(`\nError: Debe cargar primero el archivo de productos`.red);
                } else {
                    // Si el archivo de productos está cargado, muestra los productos actuales
                    await productosTienda.mostrarProductos();
                    // Luego, solicita el ingreso de un producto mediante la función preguntarNuevoProducto()
                    await productosTienda.preguntarNuevoProducto();
                }
                break;
            case '5':
                // Opción para eliminar un producto
                console.clear();
                console.log(`\n★★★★★★★★★★★★★★★★★★★★★★★★★★`.cyan);
                console.log(`★  `.cyan + `Eliminar un Producto`.bgCyan + `  ★`.cyan);
                console.log(`★★★★★★★★★★★★★★★★★★★★★★★★★★`.cyan);
                // Verifica si el archivo de productos ha sido cargado
                if (!archivoProductosCargado) {
                    // Muestra un mensaje de error si el archivo no se ha cargado
                    console.log(`\nError: Debe cargar primero el archivo de productos`.red);
                } else {
                    // Si el archivo de productos está cargado, muestra los productos actuales
                    await productosTienda.mostrarProductos();
                    // Luego, solicita la eliminación de un producto mediante la función borrarProducto()
                    await productosTienda.borrarProducto();
                }
                break;
            case '6':
                // Opción para realizar un nuevo pedido
                console.clear();
                console.log(`\n★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★`.cyan);
                console.log(`★  `.cyan + `Realizar un Nuevo Pedido`.bgCyan + `  ★`.cyan);
                console.log(`★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★`.cyan);
                if (!archivoProductosCargado) {
                    console.log(`\nError: Debe cargar primero el archivo de productos`.red);
                } else {
                    await productosTienda.mostrarProductos();
                    await carritoCompras.preguntarNuevoPedido();
                }
                break;
            case '7':
                // Opción para imprimir una factura
                console.clear();
                console.log(`\n★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★`.cyan);
                console.log(`★      `.cyan + `Impresión factura`.bgCyan + `     ★`.cyan);
                console.log(`★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★`.cyan);
                await carritoCompras.imprimirFactura();
                break;
            default:
                // Mensaje de error para opciones no válidas
                console.log(`Opción no válida. Intente de nuevo.`.red);
                break;
        }

        // Pausa después de cada opción, excepto al salir (opción '0')
        if (option !== '0') {
            await pausa();
        }
        // El bucle continuará hasta que la opción elegida por el usuario sea igual a '0'.
    } while (option !== '0');

};
// Se llama a la función main, que inicia la ejecución de la aplicación.
main();