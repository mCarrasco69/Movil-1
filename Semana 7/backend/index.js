const express = require('express');
const sequelize = require('./db/connection');
const Maestro = require('./Modelos/Maestro');
const Clase = require('./Modelos/Clase');
const MaestroClase = require('./Modelos/MaestroClase');

const app = express();


app.use(express.json());

//ruta de acceso
//codigo de respuestas -- > 200,401,500, 404, etc 
//response y requet 
//manjo de errores 


// ===================== MAESTROS =====================

//get 

app.get('/maestros', async (req, res) => {

    try {

        //select * from Maestro;
        const maestros = await Maestro.findAll();

        if (maestros.length === 0) {
            return res.status(402).json({
                message: 'No hay maestros',
            });
        }

        res.status(200).json(maestros);

    } catch (error) {
        res.status(500).json({
            message: 'Error al obtener los maestros',
            error: error.message
        });
    }

})

app.post('/maestros', async (req, res) => {
    try {

        console.log(req.body);

        //insert into Maestro (nombre, apellido, email, especialidad) values (?, ?, ?, ?);

        const maestro = await Maestro.create(req.body);
        res.status(200).json(maestro);

    } catch (error) {
        res.status(500).json({
            message: 'Error al guardar el maestro',
            error: error.message
        });
    }
})

app.put('/maestros/:id', async (req, res) => {
    try {

        //update Maestro set nombre = ?, apellido = ?, email = ?, especialidad = ? where id = ?;

        const [updated] = await Maestro.update(req.body,
            { where: { id: req.params.id } }
        );

        if (updated) {
            return res.status(200).json({
                message: 'Maestro actualizado correctamente',
            });
        }
        else {
            return res.status(402).json({
                message: 'Maestro no encontrado',
            });
        }


    } catch (error) {
        res.status(500).json({
            message: 'Error al actualizar el maestro',
            error: error.message
        });
    }

})

app.delete('/maestros/:id', async (req, res) => {
    try {

        //delete from Maestro where id = ?;

        const deleted = await Maestro.destroy({
            where: { id: req.params.id }
        });

        if (deleted) {
            return res.status(200).json({
                message: 'Maestro eliminado correctamente',
            });
        }
        else {
            return res.status(402).json({
                message: 'Maestro no encontrado',
            });
        }

    } catch (error) {

        res.status(500).json({
            message: 'Error al eliminar el maestro',
            error: error.message
        });
    }
})


// ===================== CLASES =====================

//get 

app.get('/clases', async (req, res) => {

    try {

        //select * from Clase;
        const clases = await Clase.findAll();

        if (clases.length === 0) {
            return res.status(402).json({
                message: 'No hay clases',
            });
        }

        res.status(200).json(clases);

    } catch (error) {
        res.status(500).json({
            message: 'Error al obtener las clases',
            error: error.message
        });
    }

})

app.post('/clases', async (req, res) => {
    try {

        console.log(req.body);

        //insert into Clase (nombre, descripcion, creditos) values (?, ?, ?);

        const clase = await Clase.create(req.body);
        res.status(200).json(clase);

    } catch (error) {
        res.status(500).json({
            message: 'Error al guardar la clase',
            error: error.message
        });
    }
})

app.put('/clases/:id', async (req, res) => {
    try {

        //update Clase set nombre = ?, descripcion = ?, creditos = ? where id = ?;

        const [updated] = await Clase.update(req.body,
            { where: { id: req.params.id } }
        );

        if (updated) {
            return res.status(200).json({
                message: 'Clase actualizada correctamente',
            });
        }
        else {
            return res.status(402).json({
                message: 'Clase no encontrada',
            });
        }


    } catch (error) {
        res.status(500).json({
            message: 'Error al actualizar la clase',
            error: error.message
        });
    }

})

app.delete('/clases/:id', async (req, res) => {
    try {

        //delete from Clase where id = ?;

        const deleted = await Clase.destroy({
            where: { id: req.params.id }
        });

        if (deleted) {
            return res.status(200).json({
                message: 'Clase eliminada correctamente',
            });
        }
        else {
            return res.status(402).json({
                message: 'Clase no encontrada',
            });
        }

    } catch (error) {

        res.status(500).json({
            message: 'Error al eliminar la clase',
            error: error.message
        });
    }
})


// ===================== ASIGNACIONES (Maestro - Clase) =====================

//get 

app.get('/asignaciones', async (req, res) => {

    try {

        //select * from MaestroClase;
        const asignaciones = await MaestroClase.findAll({
            include: [
                { model: Maestro },
                { model: Clase }
            ]
        });

        if (asignaciones.length === 0) {
            return res.status(402).json({
                message: 'No hay asignaciones',
            });
        }

        res.status(200).json(asignaciones);

    } catch (error) {
        res.status(500).json({
            message: 'Error al obtener las asignaciones',
            error: error.message
        });
    }

})

app.post('/asignaciones', async (req, res) => {
    try {

        console.log(req.body);

        //insert into MaestroClase (maestroId, claseId) values (?, ?);

        const { maestroId, claseId } = req.body;

        // Verificar que no exista ya la asignacion
        const existe = await MaestroClase.findOne({
            where: { maestroId: maestroId, claseId: claseId }
        });

        if (existe) {
            return res.status(402).json({
                message: 'La asignacion ya existe',
            });
        }

        const asignacion = await MaestroClase.create({ maestroId, claseId });
        res.status(200).json(asignacion);

    } catch (error) {
        res.status(500).json({
            message: 'Error al guardar la asignacion',
            error: error.message
        });
    }
})

app.delete('/asignaciones/:id', async (req, res) => {
    try {

        //delete from MaestroClase where id = ?;

        const deleted = await MaestroClase.destroy({
            where: { id: req.params.id }
        });

        if (deleted) {
            return res.status(200).json({
                message: 'Asignacion eliminada correctamente',
            });
        }
        else {
            return res.status(402).json({
                message: 'Asignacion no encontrada',
            });
        }

    } catch (error) {

        res.status(500).json({
            message: 'Error al eliminar la asignacion',
            error: error.message
        });
    }
})


// ===================== BUSCAR MAESTROS POR CLASE =====================

app.get('/maestros/clase/:claseId', async (req, res) => {

    try {

        //select m.* from Maestro m
        //inner join MaestroClase mc on mc.maestroId = m.id
        //where mc.claseId = ?;

        const maestros = await Maestro.findAll({
            include: [{
                model: MaestroClase,
                where: { claseId: req.params.claseId }
            }]
        });

        if (maestros.length === 0) {
            return res.status(402).json({
                message: 'No hay maestros para esta clase',
            });
        }

        res.status(200).json(maestros);

    } catch (error) {
        res.status(500).json({
            message: 'Error al buscar maestros por clase',
            error: error.message
        });
    }

})


// ===================== CLASES DE UN MAESTRO =====================

app.get('/clases/maestro/:maestroId', async (req, res) => {

    try {

        //select c.* from Clase c
        //inner join MaestroClase mc on mc.claseId = c.id
        //where mc.maestroId = ?;

        const clases = await Clase.findAll({
            include: [{
                model: MaestroClase,
                where: { maestroId: req.params.maestroId }
            }]
        });

        if (clases.length === 0) {
            return res.status(402).json({
                message: 'No hay clases para este maestro',
            });
        }

        res.status(200).json(clases);

    } catch (error) {
        res.status(500).json({
            message: 'Error al buscar clases del maestro',
            error: error.message
        });
    }

})




//sincronizar modelos con la base de datos
//create table if not exists Maestro, Clase, MaestroClase

sequelize.sync({ force: false }).then(() => {
    console.log('Tablas sincronizadas');

    app.listen(3000, () => {
        console.log('Servidor corriendo en el puerto 3000');
    });
}).catch((error) => {
    console.log('Error al sincronizar tablas:', error);
});
