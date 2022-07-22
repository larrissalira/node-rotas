class ValidacoesService{
    /**
     * @param {string} dicas 
     * @returns boll
     */
    static validaDica(dicas){
        
        return dicas.length >=5;
    }
}

export default ValidacoesService;