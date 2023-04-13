import { Router } from "express";

import { CreateCategoryController } from "./controllers/categoryControllers/CreateCategoryController";
import { DeleteCategoryController } from "./controllers/categoryControllers/DeleteCategoryController";
import { ListCategoryController } from "./controllers/categoryControllers/ListCategoryController";
import { UpdateCategoryController } from "./controllers/categoryControllers/UpdateCategoryController";

import { CreateProductController } from "./controllers/productControllers/CreateProductController";
import { DeleteProductController } from "./controllers/productControllers/DeleteProductController";
import { ListProductController } from "./controllers/productControllers/ListProductController";
import { UpdateProductController } from "./controllers/productControllers/UpdateProductController";

import { CreateSalesController } from "./controllers/salesControllers/CreateSalesController";
import { DeleteSalesController } from "./controllers/salesControllers/DeleteSalesController";
import { ListSalesController } from "./controllers/salesControllers/ListSalesController";
import { UpdateSalesController } from "./controllers/salesControllers/UpdateSalesController";

const createCategoryController = new CreateCategoryController();
const deleteCategoryController = new DeleteCategoryController();
const listCategoryController = new ListCategoryController();
const updateCategoryController = new UpdateCategoryController();

const createProductController = new CreateProductController();
const deleteProductController = new DeleteProductController();
const listProductController = new ListProductController();
const updateProductController = new UpdateProductController();

const createSalesController = new CreateSalesController();
const deleteSalesController = new DeleteSalesController();
const listSalesController = new ListSalesController();
const updateSalesController = new UpdateSalesController();

const router = Router();

router.post("/categories", createCategoryController.handle);
router.delete("/categories/:id", deleteCategoryController.handle);
router.get("/categories", listCategoryController.handle);
router.put("/categories", updateCategoryController.handle);

router.post("/products", createProductController.handle);
router.delete("/products/:id", deleteProductController.handle);
router.get("/products", listProductController.handle);
router.put("/products", updateProductController.handle);

router.post("/sales", createSalesController.handle);
router.delete("/sales/:id", deleteSalesController.handle);
router.get("/sales", listSalesController.handle);
router.put("/sales", updateSalesController.handle);

export { router };
