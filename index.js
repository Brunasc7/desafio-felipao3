class formaHeroi{
    constructor(nome,tipo){
        this.nome = nome
        this.tipo = tipo
        this.ataque = ""
    }

    verificarTipo(){
        if(this.tipo == "mago"){
            this.ataque = "magia"
        }else if(this.tipo == "guerreiro"){
            this.ataque = "espada"
        }else if(this.tipo == "monge"){
            this.ataque = "artes marciais"
        }else if(this.tipo == "ninja"){
            this.ataque = "shuriken"
        }else {
            console.log("Tipo Invalido");         
        }
    }

    atacar(){
        this.verificarTipo()
        console.log(`o ${this.tipo} atacou usando ${this.ataque}`);   
    }

    iniciarJogo(){
        console.log(`Azard deseja Boas Vindas a ${this.nome}`);   
        this.atacar() 
    }
}

let heroiAventureiro = new formaHeroi("Roger", "guerreiro")

heroiAventureiro.iniciarJogo()