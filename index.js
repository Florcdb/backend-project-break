const express = require('express');
const productRoutes = require('./src/routes/productRoutes')
const app = express ();
const dbConnection = require('./src/config/db');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', productRoutes);


let products = [
    {id: 1, nombre: "Camiseta Florida", descripcion: "Camiseta playera de flores ", categoría: "camisetas", talla: "xl", precio: "24'99€"},
    {id: 2, nombre: "Vestido Negro", descripcion: "Vestido negro elegante", categoría: "vestidos", talla: "s", precio: "44,99€"},
    {id: 3, nombre: "Pantalón Fiesta", descripcion: "Pantalón de fiesta", categoría: "pantalones", talla: "m", precio: "20,00€"},
    {id: 4, nombre: "Tacones Elegantes", descripcion: "Tacones elegantes", categoría: "zapatos", talla: "36", precio: "35€"},
    {id: 5, nombre: "Collar Fino Esmeralda", descripcion: "Collar fino", categoría: "accesorios", talla: "única", precio: "70,99"}
]



app.listen(3000, () => {
    console.log('El puerto está escuchando Express en el http://localhost:3000')
})