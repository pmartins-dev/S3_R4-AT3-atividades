const express = require('express');
const app = express();
const PORT = 8080;

app.get("/calculadora", (req, res)=>{
    try {
        const {operador, numUm, numDois} = req.query;

        if(isNaN(numUm) || numUm == undefined || numUm == null || isNaN(numDois) || numDois == undefined || numDois == null ){
            return res.status(400).send(`Entrada de número inválido!`);
        }

        const numeroUm = parseFloat(numUm);
        const numeroDois = parseFloat(numDois);
        let resultado;

        switch (operador) {
            case "soma":
                resultado = numeroUm + numeroDois;
                break;

            case "subtracao":
                if(numeroDois < 0 ){
                    return res.status(405).send(`Segundo numero não pode ser menor que zero!`)
                }
                resultado = (numeroUm) - numeroDois;
                break;

            case "multiplicacao":
                resultado = numeroUm * numeroDois;
                break;

            case "divisao":
                // tratamento de erro para divisão por 0
                if(numeroDois === 0 ){    
                    res.status(400).send(`Não é possivel fazer divisão por zero!`)
                }
                
                resultado = numeroUm / numeroDois;
                break;
        
            default:
                return res.status(400).send('Operador invalido');
                break;
        }

        res.send(`Resultado é ${resultado}`);

        } catch (error) {
            console.error("Erro ao processar operação matematica:", error);
            res.status(500).send(`Ocorreu um erro no servidor`)
        }
});



app.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${PORT}`);
});