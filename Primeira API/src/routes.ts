import { Router } from "express";
// import { CreateUserController } from "./controllers/CreateUserController";

// import { ListUsersController } from "./controllers/ListUsersController";
// import { UpdateUserController} from "./controllers/UpdateUserController";
// import { DeleteUserController} from "./controllers/DeleteUserController";

import { CreateProductController } from "./productcontrollers/CreateProductController";
import { ListProductController } from "./productcontrollers/ListProductController";
import { UpdateProductController} from "./productcontrollers/UpdateProductController";
import { DeleteProductController} from "./productcontrollers/DeleteProductController";
import { UpdateCategoryController } from "./categorycontrollers/UpdateCategoryController";
import { ListCategoryController } from "./categorycontrollers/ListCategoryController";
import { CreateCategoryController } from "./categorycontrollers/CreateCategoryController";
import { DeleteCategoryController } from "./categorycontrollers/DeleteCategoryController";
import { CreateSalesController } from "./salescontrollers/CreateSalesController";
import { UpdateSalesController } from "./salescontrollers/UpdateSalesController";
import { ListSalesController } from "./salescontrollers/ListSalesController";
import { DeleteSalesController } from "./salescontrollers/DeleteSalesController";




/*
import {AuthenticateUserController} from "./controllers/AuthenticateUserController";
import { ensureAdmin} from "./middlewares/ensureAdmin";
import { ensureAuthenticated} from "./middlewares/ensureAuthenticated";




const autenticationUserController  = new AuthenticateUserController();
 */
// const updateUserController  = new UpdateUserController();
// const deleteUserController  = new DeleteUserController();
// const createUserController  = new CreateUserController();
// const listUsersController  = new ListUsersController();

const updateProductController = new UpdateProductController();
const listProductController = new ListProductController();
const createProductController = new CreateProductController();
const deleteProductController = new DeleteProductController();

const updateCategoryController = new UpdateCategoryController();
const listCategoryController = new ListCategoryController();
const createCategoryController = new CreateCategoryController();
const deleteCategoryController = new DeleteCategoryController();

const createSalesController = new CreateSalesController();
const updateSalesController = new UpdateSalesController();
const listSalesController = new ListSalesController();
const deleteSalesController = new DeleteSalesController();


const router = Router();
// router.post("/users", createUserController.handle);
// router.get("/users", listUsersController.handle);
// router.put("/users", updateUserController.handle);
// router.delete("/users", deleteUserController.handle);

router.post("/products", createProductController.handle);
router.get("/products", listProductController.handle);
router.put("/products", updateProductController.handle);
router.delete("/products", deleteProductController.handle);

router.post("/categories", createCategoryController.handle);
router.get("/categories", listCategoryController.handle);
router.put("/categories", updateCategoryController.handle);
router.delete("/categories", deleteCategoryController.handle);

router.post("/sales", createSalesController.handle);
router.get("/sales", listSalesController.handle);
router.put("/sales", updateSalesController.handle);
router.delete("/sales", deleteSalesController.handle);
/*
router.post("/login", autenticationUserController.handle);

router.get("/users",  ensureAuthenticated,ensureAdmin,listUsersController.handle);

router.use(ensureAdmin)
router.delete("/users/:id", deleteUserController.handle);
router.put("/users", updateUserController.handle);
*/
export {router}