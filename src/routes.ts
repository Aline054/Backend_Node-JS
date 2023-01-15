import {Router } from 'express';
import multer from 'multer';

import { CreateUserController } from './controller/user/CreateUserController';

import { AuthUserController } from './controller/user/AuthUserController';
import {DetailUserController} from './controller/user/DetailUserController'

import {isAuthenticated} from  './middlewares/isAuthenticated'

import { CreateCategoryController } from './controller/category/CreateCategoryController';

import {ListCategoryController} from './controller/category/ListCategoryController';

import {CreateProductController} from './controller/product/CreateProductController'

import  { ListByCategoryController } from './controller/product/ListByCategoryController'

import {CreateOrderController} from './controller/order/CreateOrderController'
import { RemoveOrderController } from './controller/order/RemoveOrdesControler';

import { AddItemController } from './controller/order/AddItemController'
import { RemoveItemController } from './controller/order/RemoveItemController';

import { SendOrderController } from './controller/order/SendOrderController'
import { ListOrdersController } from './controller/order/ListOrderController'

import { DetailOrderController } from './controller/order/DetailOrderController'
import { FinishOrderController } from './controller/order/FinishOrderController'


import uploadConfig from './config/multer'

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"))

//--Rotas-Users---
router.post('/users', new CreateUserController().handle);

router.post('/session', new AuthUserController().handle);

router.get('/me', new DetailUserController().handle );

//--Rotas-Categoris--
router.post('/category', new CreateCategoryController().handle);

router.get('/category', new ListCategoryController().handle);

// --Rotas Product--
router.post ('/product', upload.single('file'), new CreateProductController().handle)

router.get ('./category/product', new ListByCategoryController().handle);

//--Rotas Order--
router.post('/order',  new CreateOrderController().handle);
router.delete('/order', new RemoveOrderController().handle);

router.post('./order/add', new AddItemController().handle);
router.delete('./order/remove', new RemoveItemController().handle);

router.put('/order/send', new SendOrderController().handle )

router.get('/orders', new ListOrdersController().handle )

router.get('/order/detail', new DetailOrderController().handle )

router.put('/order/finish', new FinishOrderController().handle )


   


export {router};