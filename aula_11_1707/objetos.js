// Objeto -> Estrutura que representa um objeto do mundo real (Ex. Produto, pessoa, Profissão)
// Objeto pode ser modelado -> Classe

class Livro{
    titulo;
    paginas;
    autor;
    volume;
    isbn;
    alugar = function(){
        console.log("Alugado!")
    };

    static isLivro(livro){ // isLivro -> é uma função estática, ou seja, não será necessário instanciar o objeto para acessa-la
        let flag = livro.titulo == undefined;
        return !flag;
    }
    constructor(titulo, paginas, autor, volume, isbn){
        this.titulo = titulo;
        this.paginas = paginas;
        this.autor = autor;
        this.volume = volume;
        this.isbn = isbn;
    }
};

// Para criar a estrutura "física" do objeto pela classe: fazer uma INSTÂNCIA
let arquiteturaLimpa = new Livro(); // sintaxe para criação de um objeto - instância
// console.log(arquiteturaLimpa);

arquiteturaLimpa.titulo = "Arquitetura Limpa";
arquiteturaLimpa.autor = "Robert D Junior";
arquiteturaLimpa.paginas = 400;
arquiteturaLimpa.volume = 2;
arquiteturaLimpa.isbn = "630-129-007-10";
console.log(arquiteturaLimpa);
arquiteturaLimpa.alugar();

let livroInstancia = new Livro("Java para Iniciantes", 500, "J. K. Rowling", 2, "123asd13gh");
console.log(livroInstancia);

// OBJETO é uma estrutra que representa o objeto do mundo real no nosso código.
// Classe -> Planta ou Modelo do objeto
// Instãncia é processo de construir o objeto "new Livro()"
// Construtor é a função que gere o objeto físico
// Características -> Atributos/Propriedades, Métodos/Funçãos

// JavaScript -> Front
// Java -> Back

const objeto = {};
console.log(typeof objeto);