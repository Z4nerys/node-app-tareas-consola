const { v4: uuidv4 } = require('uuid');
//lo que viene despues de los 2 puntos es como yo lo quiero renombrar
// { v4: renombre }

class Tarea {
    id = '';
    desc= '';
    completadoEn = false;

    constructor( descripcion ){
        //estoy creando la tarea
        this.id = uuidv4();
        this.desc = descripcion;
    }
}

module.exports = Tarea