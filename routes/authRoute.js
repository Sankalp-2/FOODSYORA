import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);

//Forgot Password || POST
router.post('/forgot-password', forgotPasswordController)

//Protected Routh Auth

router.get("/user-auth"),
  requireSignIn,
  (req, res) => {
    res.status(200).send({ ok: true });
  };

//Test Route
router.get("/test", requireSignIn, isAdmin, testController);

export default router;
