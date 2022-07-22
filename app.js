import express from "express";
import * as dotenv from "dotenv";
import Dicas from "./src/controllers/Dicas.js";

dotenv.config();
    const port = process.env.PORT || 3000
    const app = express();
        app.listen(port, () => {
            console.log(`Service ativo em http://localhost:${port}`);
})

app.use(express.json())

Dicas.rotas(app);