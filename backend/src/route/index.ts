import express = require("express");
import integrationtestercontroller from "../controller/integrationtestercontroller";

const router = express.Router();


// Routes
router.post("/create", integrationtestercontroller.create);
router.get("/findall", integrationtestercontroller.findAll);
router.get("/find/:id", integrationtestercontroller.find);
router.patch("/update/:id", integrationtestercontroller.update);
router.delete("/delete/:id", integrationtestercontroller.delete);

export default router;
