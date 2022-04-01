const Tarea = require("./tarea");
const fs = require("fs")
require('colors')

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
        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key]
            listado.push(tarea)
        })

        return listado;
    }

    constructor() {
        this._listado = {}
    }

    borrarTarea(id = '') {
        if (this._listado[id]) {
            delete this._listado[id];
        }
    }

    cargarTareasFromArray(tareas = []) {
        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea
        })
    }

    crearTarea(desc = '') {
        //aca creo la tarea y la guardo en la lista de tareas que es un objeto
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea
    }

    listadoCompleto() {
        console.log()
        this.listadoArr.forEach((tarea, i) => {
            console.log(`${(i + 1) + '.'}`.green, tarea.desc + ' :: ', tarea.completadoEn ? tarea.completadoEn.green : 'Pendiente'.red)
        })
    }

    listarPendientesCompletadas(completadas) {
        const tareas = this.listadoArr.filter(tarea => typeof (tarea.completadoEn) == typeof (completadas))
        tareas.forEach((tarea, i) => {
            console.log(`${(i + 1) + '.'}`.green, tarea.desc + ' :: ', tarea.completadoEn ? tarea.completadoEn.green : 'Pendiente'.red)
        })
    }

    marcarTarea(ids = []) {

        ids.map(id => {
            const tarea = this._listado[id];
            if (!tarea.completadoEn) {
                tarea.completadoEn = new Date().toISOString()
            }
        });

        this.listadoArr.forEach(tarea =>{
            if(!ids.includes(tarea.id)){
                this._listado[tarea.id].completadoEn = false
            }
        })
    }
}

module.exports = Tareas;