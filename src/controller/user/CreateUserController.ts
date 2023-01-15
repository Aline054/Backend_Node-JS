import { Request, response, Response } from "express";

import {CreactUserService} from '../../services/user/CreateUserServices'

class CreateUserController{
async handle(req:Request, res:Response){

   const {name, email,password} =req.body

   const createUserService =new CreactUserService();

   const user = await createUserService.execute({
    name,
    email,
    password
   });
   
    return res.json (user)
}
}

export {CreateUserController}