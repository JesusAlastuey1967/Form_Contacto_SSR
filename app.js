const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const { Console } = require('console')
require('dotenv').config()

const app = express()

//(Conectar mi App a los archivos Frontend)

app.use(express.static(path.join(__dirname,'public')))

//(Conectar mi App a la Base Datos Mongoose)

mongoose.connect(`mongodb+srv://jalastuey:${process.env.MONGO_DB_PASS}@desarrollo.gtcrl.mongodb.net/Contactos?retryWrites=true&w=majority`)
.then((result) => console.log("Conexión Exitosa a la BBDD"))
.catch((err) => console.log(error))

//(Configurar Esquema y Modelo para interactuar con una colección/tabla de mongoose )

const contactoSchema = mongoose.Schema ({nombre: String, correo: String, telefono: String, comentarios: String},{timestamps:true})
const Contacto = mongoose.model('Contacto', contactoSchema, 'Nuevos')

//(para ejecutar nuestras peticiones de tipo json y te lo deja en la propiedad req.body)

app.use(express.json())

//(le Pasamos la peticion a nuestro Backend), (Enviamos y grabamos el nuevo producto en mongoose)

app.post('/api/v1/contactos', async (req, res, next) => {
const newContacto = new Contacto (req.body)
newContacto.save()
.then ((result) => {res.status(201).json({ok: true})})
.catch((err) => console.log(err))
})

//(Para escuchar por Consola)

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})
