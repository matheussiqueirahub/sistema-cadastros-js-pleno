// ==========================================
// 1. Carro
// ==========================================
console.log("--- 1. Carro ---");

class Carro {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
}

const meuCarro = new Carro("Toyota", "Corolla", 2022);

console.log(`Marca: ${meuCarro.marca}`);
console.log(`Modelo: ${meuCarro.modelo}`);
console.log(`Ano: ${meuCarro.ano}`);
console.log(""); // Espaço para melhor visualização

// ==========================================
// 2. Pessoa
// ==========================================
console.log("--- 2. Pessoa ---");

class Pessoa {
    constructor(nome, idade, profissao) {
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }
}

const pessoa1 = new Pessoa("Carlos", 30, "Designer");

// Atualizando profissão
pessoa1.profissao = "Gerente de Produto";

// Adicionando propriedade cidade
pessoa1.cidade = "Rio de Janeiro";

console.log("Objeto Pessoa Atualizado:", pessoa1);
console.log("");

// ==========================================
// 3. Livro (Desestruturação)
// ==========================================
console.log("--- 3. Livro (Desestruturação) ---");

const livro = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    ano: 1954,
    editora: "HarperCollins"
};

const { titulo, autor } = livro;

console.log(`Título: ${titulo}`);
console.log(`Autor: ${autor}`);
console.log("");

// ==========================================
// 4. Biblioteca (Array de Objetos)
// ==========================================
console.log("--- 4. Biblioteca (Array de Objetos) ---");

class Biblioteca {
    constructor() {
        this.livros = [];
    }

    adicionarLivro(livro) {
        this.livros.push(livro);
    }

    listarLivros() {
        console.log("Catálogo da Biblioteca:");
        this.livros.forEach((livro, index) => {
            console.log(`${index + 1}. ${livro.titulo} - ${livro.autor}`);
        });
    }
}

const minhaBiblioteca = new Biblioteca();

// Adicionando alguns livros iniciais
minhaBiblioteca.adicionarLivro({ titulo: "1984", autor: "George Orwell" });
minhaBiblioteca.adicionarLivro({ titulo: "Dom Quixote", autor: "Miguel de Cervantes" });

// Listando
minhaBiblioteca.listarLivros();

// Adicionando um novo livro
console.log("\nAdicionando novo livro...");
minhaBiblioteca.adicionarLivro({ titulo: "Clean Code", autor: "Robert C. Martin" });

// Listando novamente
minhaBiblioteca.listarLivros();
console.log("");

// ==========================================
// 5. Aluno (Objeto com Métodos)
// ==========================================
console.log("--- 5. Aluno (Objeto com Métodos) ---");

const aluno = {
    nome: "Mariana",
    notas: [],

    adicionarNota(nota) {
        if (typeof nota === 'number' && nota >= 0 && nota <= 10) {
            this.notas.push(nota);
            console.log(`Nota ${nota} adicionada.`);
        } else {
            console.log("Nota inválida. Insira um número entre 0 e 10.");
        }
    },

    calcularMedia() {
        if (this.notas.length === 0) return 0;
        const soma = this.notas.reduce((acc, curr) => acc + curr, 0);
        return (soma / this.notas.length).toFixed(2);
    }
};

aluno.adicionarNota(8.5);
aluno.adicionarNota(7.0);
aluno.adicionarNota(9.5);

const mediaFinal = aluno.calcularMedia();
console.log(`Aluno: ${aluno.nome}`);
console.log(`Média Final: ${mediaFinal}`);
