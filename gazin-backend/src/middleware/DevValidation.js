const DevModel = require('../model/DevModel');

const DevValidation = async (req, res, next) => {

    const {nome, sexo, idade, hobby, datanascimento} = req.body;

    if(!nome)
        return res.status(400).json({ error: 'O nome é obrigatório'}); 
    else if(!sexo)
        return res.status(400).json({ error: 'O campo sexo é obrigatório'});    
    else if(!idade)
        return res.status(400).json({ error: 'O campo idade é obrigatório'});
    else if(!hobby)
        return res.status(400).json({ error: 'O campo hoobby é obrigatório'});        
    else if(!datanascimento)
        return res.status(400).json({ error: 'O campo datanascimento é obrigatório'});
    else
        next();
    // fazer validação data maior que atual
    // fazer validação de genero se não for dropbox    
}

module.exports = DevValidation;
