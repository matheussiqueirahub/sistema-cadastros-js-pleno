# Sistema de Cadastros e Consultas - Desafio Javascript Pleno

Este repositório contém a implementação de um sistema modular desenvolvido em JavaScript (Node.js) como parte de um desafio técnico de nível pleno. O projeto demonstra o uso de funcionalidades modernas da linguagem (ES6+), incluindo Classes, Desestruturação de Objetos, Manipulação de Arrays e Métodos.

## Visão Geral do Projeto

O sistema é composto por cinco módulos principais, cada um focado em um aspecto específico da modelagem de dados e lógica de programação:

1.  **Módulo Carro**: Instanciação de objetos e acesso a propriedades.
2.  **Módulo Pessoa**: Manipulação de propriedades de objetos, atualizações e expansão de campos.
3.  **Módulo Livro**: Demonstração de extração de dados via desestruturação.
4.  **Módulo Biblioteca**: Gerenciamento de coleções (arrays) de objetos com métodos para adição e listagem.
5.  **Módulo Aluno**: Lógica de negócios encapsulada em métodos para cálculos matemáticos (média de notas).

## Pré-requisitos

Para executar este projeto, é necessário ter o Node.js instalado em seu ambiente.

-   **Node.js**: Versão 12.0.0 ou superior recomendada.

## Como Executar

1.  Clone este repositório:
    ```bash
    git clone https://github.com/matheussiqueirahub/sistema-cadastros-js-pleno.git
    ```

2.  Acesse o diretório do projeto:
    ```bash
    cd atividades_js
    ```

3.  Execute o arquivo principal:
    ```bash
    node atividade02.js
    ```

## Detalhes da Implementação

### 1. Classe Carro
Define a estrutura básica de um veículo com propriedades como marca, modelo e ano. O script instancia um veículo e exibe suas características individualmente.

### 2. Classe Pessoa
Representa uma entidade pessoal. O código demonstra a dinamicidade do JavaScript permitindo a atualização da profissão e a inclusão dinâmica da propriedade cidade após a instanciação.

### 3. Objeto Livro
Utiliza a sintaxe de desestruturação (Destructuring Assignment) para extrair e exibir propriedades específicas (título e autor) de um objeto literário de forma limpa e direta.

### 4. Classe Biblioteca
Implementa um sistema de gerenciamento de acervo. Possui uma propriedade interna para armazenar livros e métodos públicos para:
-   **adicionarLivro(livro)**: Insere um novo objeto livro no catálogo.
-   **listarLivros()**: Itera sobre o acervo e exibe os títulos formatados no console.

### 5. Objeto Aluno
Encapsula dados (nome, notas) e comportamentos.
-   **adicionarNota(nota)**: Valida e insere uma nota numérica no registro do aluno.
-   **calcularMedia()**: Processa as notas armazenadas e retorna a média aritmética com precisão de duas casas decimais.

## Tecnologias Utilizadas

-   JavaScript (ES6+)
-   Node.js

## Autor

Matheus Siqueira
