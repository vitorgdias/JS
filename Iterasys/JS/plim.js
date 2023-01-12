// Declaraçaõ de um objeto em JS
let pessoa = {
    nome      : "Juca",
    sobrenome : "Pirama",
    idade     : "30",
    vip       : true,
    saudacao  : function(){
        return "Oi " + this.nome + " " + this.sobrenome;
    },
    sauda     : function(){
        document.getElementById("demo").innerHTML = "Oi " + this.nome + " " + this.sobrenome;
    }
};


function myFunction() {
    let i = 0;
    //comentário em JS
    for(i = 1; i <= 20; i++){
        let resto = 0;
        let tipo = "impar";

        resto = i % 2;
        if (resto == 0){
            tipo = "par";
        }
        rest = i % 4;
        if (resto == 0){
            document.write("plim","-", tipo, "<br>");
        } else {
            document.write(i,"-", tipo, "<br>");
        }
    }
}

function contarItemDaLista(){
    //tupla cores (tupla = registro)
    const cores = ["azul","amarelo","vermelho","verde","laranja","roxo"];
    //const cores = ["azul"];
    //const cores = [];
    let mensagem = "";
    if (cores.length > 1){
        mensagem = "A lista tem " + cores.length + " itens";
    }   else if (cores.length == 1){
        mensagem = "A lista tem 1 item";
    }   else {
        mensagem = "A lista está sem itens";
    }
    document.getElementById("demo").innerHTML = mensagem;
}

function contarItemDaLista2(){
    //tupla cores (tupla = registro)
    const cores = ["azul","amarelo","vermelho","verde","laranja","roxo"];
    //const cores = ["azul"];
    //const cores = [];
    let mensagem = "";
    switch (cores.length) {
        case 0:
            mensagem = "A lista está vazia"
            break;
        case 1:
            mensagem = "A lista tem 1 item";
            break; 
        default: //não é padrão, é considerado como "outros"
        mensagem = "A lista tem " + cores.length + " itens";
            break;
    }
    document.getElementById("demo").innerHTML = mensagem;
}
function sortearListaCrescente(){
    const alunos = ["Sara", "Abraao", "MK", "Ademar", "Norma", "Lene", "Beatriz"];
    alunos.sort();
    document.getElementById("demo").innerHTML = alunos;
}
function sortearListaDecrescente(){
    const alunos = ["Sara", "Abraao", "MK", "Ademar", "Norma", "Lene", "Beatriz"];
    alunos.sort();
    alunos.reverse();
    document.getElementById("demo").innerHTML = alunos;
}

function saudarPessoa(){

    document.getElementById("demo").innerHTML = "Oi " + pessoa.nome + " " + pessoa.sobrenome
}

function saudarPessoaFuncaoObjeto(){
    document.getElementById("demo").innerHTML = pessoa.saudacao();

}

function saudarPessoaMetodoObjeto(){
    pessoa.sauda();
}

class Pessoa{
    constructor(nome="Maria", sobrenome="Antonieta", idade=25, vip=true){
        // Atributos do construtor
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.vip = vip;
        }
        // Métodos e Funções
        saudacoes(){
            document.getElementById("demo").innerHTML = "Ola " + this.nome + " " + this.sobrenome
    }
    
}
function saudarPessoaClasse(){
    //let aluna = new Pessoa();
    let aluna = new Pessoa("Beatriz","Gouveia",30,false);
    aluna.saudacoes()
}