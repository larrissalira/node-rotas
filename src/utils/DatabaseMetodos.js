import { Database } from "../infra/Database.js"

class DatabaseMetodos {
    static selecioneDica(dicas){
        Database.Dicas = [...Database.Dicas, dicas]
        return Database.Dicas
    }

    static  retornarDicas(dicas){
        return Database.Dicas[Math.floor(Math.random() * Database.Dicas.length)]
    }
}

export default DatabaseMetodos