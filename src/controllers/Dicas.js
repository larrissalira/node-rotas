import DicasModel from "../models/DicasModel.js";
import ValidacoesService from "../services/ValidacoesService.js";
import DatabaseMetodos from "../utils/DatabaseMetodos.js";

class Dicas{
    static rotas(app){
        app.get("/dicas", (req, res) => {
            const response = DatabaseMetodos.escolheDica()
            res.status(200).json(response)
        })
        
        app.post("/dicas",(req, res) => {  
            const validar = ValidacoesService.validarDicas(req.body.dica)
            
            if(validar){
                const dicas = new DicasModel(...Object.values(req.body)) 
                const response = DatabaseMetodos.inserirDicas(dicas)
                res.status(201).json(response)
            }else{
                res.status(400).send(`Erro: ${req.body.dica}a dica está certa?`);
            }
        })
    }
}

export default Dicas;