

async function showNewProduct() {
    const html = `<!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Shop</title>
    </head>
    <body>
    <nav>
    <a href ='/'>Home</a>
    <a href ='/dashboard'>Dashboard</a>
    <a href ='/products'>Productos</a>
    <a href ='/dashboard/new' >Nuevo producto</a>
    </nav>
    <main>
    <form action ="/dashboard" method="post">
    <label> Nombre: <input type= "text ” name="nombre” id="nombre" </label>
    <br>
    <label>Descripción: <input type="text" name="nombre" id="nombre" </label><br>
    <label>Categoría: <select name= "categoría" id=" categoría" 
    <option value="camisetas"> Camisetas </option>
    <option value="vestidos"> Vestidos </option>
    <option> value= "pantalones">Pantalones</opt1on>
    <option value= "zapatos"> Zapatoss/option>
    <option value= "'accesorios"Accesorios</option>
    </select></label><br>
    
    <label>Talla: <select name="talla” id="talla”>
    <option value= "s">S</option>
    <option value= "m"'>M</option>
    <option value= "l"L</option>
    <optlon value= "xl">XL/option>
    </select></1abel><br>
    <label>Precio: <input type="number'" name= "precio" 1do"'precio" </label><br>
    </form>
    </main>
    </body>
    </html`

    return html;
}