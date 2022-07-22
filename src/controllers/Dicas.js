import DicasModels from "../models/DicasModels";
import DatabaseMetodos from "../utils/DatabaseMetodos.js";

class Dicas {
    static rotas(app) {

        app.get("/tips", (req, res) => {
            const response = DatabaseMetodos.retornarDicas()
            res.status(200).json(response)
        })

        app.post("/create", (req, res) => {
            const dicas = new DicaModel(...Object.values(req.body))
            const response = DatabaseMetodos.selecioneDica(dicas)
            res.status(201).json(response)
        })

    }
}

export default Dicas;