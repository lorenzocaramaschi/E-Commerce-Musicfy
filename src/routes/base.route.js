import { Router } from "express";
import path from "path";
import { fileURLToPath } from 'url'
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const baseRouter = Router();

baseRouter.route("/").get((req, res) => {
    res.sendFile(path.join(__dirname, "../html/productForm.html"));
  }); 

export default baseRouter;
