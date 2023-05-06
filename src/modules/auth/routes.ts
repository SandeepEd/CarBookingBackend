import { Router } from "express";
import { signUpController } from "./signup";

const signUpRouter = Router();

signUpRouter.post('/', signUpController.handleController);

export { signUpRouter }