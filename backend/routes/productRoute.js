const express = require("express");
const { getAllProducts, createProduct, updateProdcut, deleteProduct, getProductDetails } = require("../controllers/productControllers");

const router = express.Router();


router.route("/products").get(getAllProducts)

router.route("/product/new").post(createProduct)

router.route("/product/:id").put(updateProdcut).delete(deleteProduct).get(getProductDetails)



module.exports = router