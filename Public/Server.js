const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const PORT = 3000;

// Middleware para procesar datos del formulario
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Servir archivos estáticos (como el HTML)
app.use(express.static('public'));

// Ruta para recibir y guardar los datos del formulario
app.post('/guardar-datos', (req, res) => {
    const { nombre, correo, telefono, asunto } = req.body;
    const nuevoContacto = { nombre, correo, telefono, asunto };

    // Leer el archivo JSON existente (si existe)
    fs.readFile('contactos.json', 'utf8', (err, data) => {
        let contactos = [];
        if (!err && data) {
            contactos = JSON.parse(data); // Parsear los datos existentes
        }

        // Añadir el nuevo contacto
        contactos.push(nuevoContacto);

        // Guardar los datos actualizados en el archivo JSON
        fs.writeFile('contactos.json', JSON.stringify(contactos, null, 2), 'utf8', (err) => {
            if (err) {
                return res.status(500).send('Error al guardar los datos');
            }
            res.send('Datos guardados correctamente');
        });
    });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});