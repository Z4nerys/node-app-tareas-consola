const Tarea = require("./tarea");
/*
_listado:
{'uuid: {id: 12, desc: asd, completadoEn: 9232}}
{'uuid: {id: 12, desc: asd, completadoEn: 9232}}
{'uuid: {id: 12, desc: asd, completadoEn: 9232}}
*/

class Tareas {
    _listado = {};

    constructor(){
        this._listado = {}
    }

    crearTarea( desc=''){
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea
    }
}

module.exports = Tareas;