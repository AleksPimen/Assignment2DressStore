const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.1', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Failed to connect to MongoDB', err);
});

app.get('/', (req, res) => {
    res.send('Dress Store');
  });


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/api/products', controller.getAllProducts);
router.get('/api/products/:id', controller.getProductById);
router.post('/api/products', controller.addNewProduct);
router.put('/api/products/:id', controller.updateProductById);
router.delete('/api/products/:id', controller.deleteProductById);
router.delete('/api/products', controller.deleteAllProducts);
router.get('/api/products', controller.findProductsByName);

module.exports = router;