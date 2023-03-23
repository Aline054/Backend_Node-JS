import { Request,Response } from "express";
import {ListyCategoryService} from '../../services/product/ListyCategoryService'


class ListyProductController{
    async handle(req: Request, res: Response){
        const category_id = req.query.category_id as string;

        const listByCategory = new ListyCategoryService();

        const products =await listByCategory.execute({
            category_id
        });

        return res.json(products);

    }
}

export{ ListyProductController };
