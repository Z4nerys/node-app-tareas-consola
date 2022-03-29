const Tarea = require("./tarea");
const fs = require("fs")
/*
_listado:
{'uuid: {id: 12, desc: asd, completadoEn: 9232}}
{'uuid: {id: 12, desc: asd, completadoEn: 9232}}
{'uuid: {id: 12, desc: asd, completadoEn: 9232}}
*/

class Tareas {
    _listado = {};

    //geter para retornar un arreglo
    get listadoArr() {
        const listado = [];
        Object.keys(this._listado).forEach( key => {
            const tarea = this._listado[key]
            listado.push(tarea)
        })

        return listado;
    }

    constructor() {
        this._listado = {}
    }

    cargarTareasFromArray(tareas = []) {
        tareas.forEach( tarea =>{
            this._listado[tarea.id] = tarea
        })
    }

    crearTarea(desc = '') {
        //aca creo la tarea y la guardo en la lista de tareas que es un objeto
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea
    }
}

module.exports = Tareas;