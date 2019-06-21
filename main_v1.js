class List{
    //Metodo construtor - inicia junto com objeto
    constructor(){
        this.data = [];
    }

    add(data){
        this.data.push(data);
        console.log(this.data);
    }
}

//classe com herança
class TodoList extends List{
    constructor(){
        //ao criar o metodo constructor em uma classe extendida, é importante chamar o metodo super() que instancia o constructor da classe pai
        super();

        this.usuario =  "Diego";
    }

    mostraUsuario(){
        console.log(this.usuario);
    }
}

var MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function(){
    MinhaLista.add('Novo todo');
}

MinhaLista.mostraUsuario();