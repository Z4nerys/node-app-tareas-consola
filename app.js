require('colors')
const {
    inquirerMenu,
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmar
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
                tareas.listadoCompleto()
                break;

            case '3':
                //listar completadas
                tareas.listarPendientesCompletadas('')
                break;

            case '4':
                //listar pendientes
                tareas.listarPendientesCompletadas(false)
                break;

            case '5':
                break;

            case '6':
                //Borrar tareas
                const id = await listadoTareasBorrar(tareas.listadoArr)
                if (id !== '0') {
                    //confirmar si quiere eliminar
                    const ok = await confirmar('Estas seguro?')
                    ok ? (console.log('Tarea borrada'.cyan), tareas.borrarTarea(id)) : console.log('No se borro nada'.yellow)
                }
                break;
        }

        //guardo todo, no importa que opcion haya elegido
        guardarDB(tareas.listadoArr)
        await pausa()
    } while (opt !== '0')

    console.log('\nBye'.cyan)
}

main()