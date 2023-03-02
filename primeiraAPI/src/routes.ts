import { Router } from "express";

import { CreateCategoryController } from "./categoryControllers/CreateCategoryController";
import { DeleteCategoryController } from "./categoryControllers/DeleteCategoryController";
import { ListCategoryController } from "./categoryControllers/ListCategoryController";
import { UpdateCategoryController } from "./categoryControllers/UpdateCategoryController";

import { CreateProductController } from "./productControllers/CreateProductController";
import { DeleteProductController } from "./productControllers/DeleteProductController";
import { ListProductController } from "./productControllers/ListProductController";
import { UpdateProductController } from "./productControllers/UpdateProductController";

import { CreateSalesController } from "./salesControllers/CreateSalesController";
import { DeleteSalesController } from "./salesControllers/DeleteSalesController";
import { ListSalesController } from "./salesControllers/ListSalesController";
import { UpdateSalesController } from "./salesControllers/UpdateSalesController";

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
router.delete("/categories", deleteCategoryController.handle);
router.get("/categories", listCategoryController.handle);
router.put("/categories", updateCategoryController.handle);

router.post("/products", createProductController.handle);
router.delete("/products", deleteProductController.handle);
router.get("/products", listProductController.handle);
router.put("/products", updateProductController.handle);

router.post("/sales", createSalesController.handle);
router.delete("/sales", deleteSalesController.handle);
router.get("/sales", listSalesController.handle);
router.put("/sales", updateSalesController.handle);

export { router };
