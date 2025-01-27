const express = require("express");

const adminController = require("../controllers/admin.controller");

const imageUploadMiddleware = require("../middlewares/image-upload");

const router = express.Router();

router.get("/admin/products"); // /products

router.get("/admin/products/new");

router.get("/products/new", adminController.getNewproduct);

router.post(
  "/products",
  imageUploadMiddleware,
  adminController.createNewProduct
);

router.get("/products/:id", adminController.getUpdateProduct);

router.post(
  "/products/:id",
  imageUploadMiddleware,
  adminController.updateProduct
);

router.delete('/products/:id', adminController.deleteProduct);

module.exports = router;
