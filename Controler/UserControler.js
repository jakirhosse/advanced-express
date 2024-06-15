import express from "express";
import { deleteById, getAllProducts, postProducts, updateProducts } from "../Services/ProductsServices.js";
// Ensure the import path is correct
import handleValidateProducts from "../middlewear/handleValidateProducts.js";
import validate from '../model/Dto/index.js';

const router = express.Router();

const handleGetAllProducts = async (req, res, next) => {
    try {
        const result = await getAllProducts();
        res.send(result);
    } catch (error) {
        return next(error, req, res);
    }
};

const handlePostProducts = async (req, res, next) => {
    try {
        const body = req.body;
        const result = await postProducts(body);
        res.send(result);
    } catch (error) {
        return next(error, req, res);
    }
};

const handleUpdateProducts = async (req, res, next) => {
    try {
        const product = req.body;
        const result = await updateProducts(product);
        res.send(result);
    } catch (error) {
        return next(error, req, res);
    }
};

const handleDeleteById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const result = await deleteById(id);
        res.status(200).send(result);
    } catch (error) {
        return next(error, req, res);
    }
};

router.get("/", handleGetAllProducts);
router.post("/", handleValidateProducts(validate.productsSchema), handlePostProducts);
router.put("/", handleUpdateProducts);
router.delete("/:id", handleDeleteById);

const configure = (app) => {
    app.use("/product", router);
};

export default configure;
