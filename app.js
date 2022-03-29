require('colors')
const {
    inquirerMenu,
    pausa,
    leerInput
} = require('./helpers/inquirer')
const { guardarDB, leerDB } = require('./helpers/guardarArchivo')
const Tareas = require('./models/tareas')

const main = async () => {
    let opt = ''
    //instancio la clase tareas para mas adelante llenarla de datos
    const tareas = new Tareas();
    const tareasDB = leerDB();

    if (tareasDB) {//cargar tareas
        tareas.cargarTareasFromArray(tareasDB)
    }

    do {
        //imprimir el menu
        opt = await inquirerMenu();

        switch (opt) {
            //va a seleccionar la opcion y viene al swtich
            case '1':
                const desc = await leerInput('Ingrese la descripcion:')
                tareas.crearTarea(desc)
                break;

            case '2':
                //usar el listadoArr para listar las tareas xD
                tareas.listadoArr.map(e => {
                    console.log('descripcion de la tarea: ' + e.desc.cyan + '\nFecha: ' + e.completadoEn)
                })
                break;

            case '3':
                break;

            case '4':
                break;

            case '5':
                break;

            case '6':
                break;
        }

        //guardo todo, no importa que opcion haya elegido
        guardarDB(tareas.listadoArr)
        await pausa()
    } while (opt !== '0')

    console.log('\nBye'.cyan)
}

main()