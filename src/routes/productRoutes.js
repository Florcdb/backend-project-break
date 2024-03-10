const express = require('express')
const router = express.Router();
const productController = require('./productController');

/*
router.get('/', productController.getAllProducts);
router.get('/:productId', productController.getProductById);
router.post('/', productController.createProduct);
router.put('/:productId', productController.updateProduct);
router.delete('/:productId', productController.deleteProduct);
*/



router.get('/', (req, res) => {
    res.send('algo más'); 
})

router.get('/products', (req, res) => {
    res.json(products); 
})


router.get('/products/:productId', (req, res) =>{
    const productId = parseInt(req.params.productId);
    const product = products.find(product => product.id === productId);
     if (product){
        res.json(product)
        } else {
            res.status(404).json ({message: 'Producto no encontrado'})
        }
     }
     )


router.get('/dashboard', (req, res) => {
    const dashboard = 'products';

})


router.post('/dashboard', (req, res) =>{
    const newProduct = {
        id: products.length + 1,
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        categoría: req.body.categoría,
        talla: req.body.talla,
        precio: req.body.precio
    }
          products.push(newProduct);
          res.redirect('/products')
})


module.exports =  router