const express = require('express');
const app = express();
const PORT = 8080;

app.get("/soma/:numUm/:numDois", (req, res)=>{

    try {
        const {numUm, numDois} = req.params;
        if(isNaN(numUm) || numUm == undefined || numUm == null || isNaN(numDois) || numDois == undefined || numDois == null){
            return res.status(400).send(`Os valores recebidos não são números ou estão incompletos.`)
        }
        const numeroUm = parseFloat(numUm);
        const numeroDois = parseFloat(numDois);
        const soma = numeroUm + numeroDois;
        res.status(200).send(`Soma realizada dos números ${numeroUm} + ${numeroDois} = ${soma}`)
    } catch (error) {
        console.error(`Erro reportado:`, error);
        res.status(500).send(`Erro interno no servidor!`);
    }

});

app.get("/subtracao/:numUm/:numDois", (req, res)=>{

    try {
        const {numUm, numDois} = req.params;
        if(isNaN(numUm) || numUm == undefined || numUm == null || isNaN(numDois) || numDois == undefined || numDois == null){
            return res.status(400).send(`Os valores recebidos não são números ou estão incompletos.`)
        }
        const numeroUm = parseFloat(numUm);
        const numeroDois = parseFloat(numDois);
        const subtracao = numeroUm - numeroDois;
        res.status(200).send(`Subtração realizada dos números ${numeroUm} - ${numeroDois} = ${subtracao}`)
    } catch (error) {
        console.error(`Erro reportado:`, error);
        res.status(500).send(`Erro interno no servidor!`);
    }

});

app.get("/mutiplicacao/:numUm/:numDois", (req, res)=>{

    try {
        const {numUm, numDois} = req.params;
        if(isNaN(numUm) || numUm == undefined || numUm == null || isNaN(numDois) || numDois == undefined || numDois == null){
            return res.status(400).send(`Os valores recebidos não são números ou estão incompletos.`)
        }
        const numeroUm = parseFloat(numUm);
        const numeroDois = parseFloat(numDois);
        const mutiplicacao = numeroUm * numeroDois;
        res.status(200).send(`Mutiplicação realizada dos números ${numeroUm} X ${numeroDois} = ${mutiplicacao}`)
    } catch (error) {
        console.error(`Erro reportado:`, error);
        res.status(500).send(`Erro interno no servidor!`);
    }

});

app.get("/divisao/:numUm/:numDois", (req, res)=>{

    try {
        const {numUm, numDois} = req.params;
        if(isNaN(numUm) || numUm == undefined || numUm == null || isNaN(numDois) || numDois == undefined || numDois == null){
            return res.status(400).send(`Os valores recebidos não são números ou estão incompletos.`)
        }
        const numeroUm = parseFloat(numUm);
        const numeroDois = parseFloat(numDois);
        const divisao = numeroUm - numeroDois;
        res.status(200).send(`Divisão realizada dos números ${numeroUm} / ${numeroDois} = ${divisao}`)
    } catch (error) {
        console.error(`Erro reportado:`, error);
        res.status(500).send(`Erro interno no servidor!`);
    }

});

app.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${PORT}`);
});