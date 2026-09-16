// 1. Classe e Objeto Crie uma classe Pessoacom os atributos nomee idade. Crie um objeto e exiba seus atributos.
class Aluno {
  constructor(
    public nome: string,
    public idade: number,
    public altura: number,
    public peso: number,
  ) {}
}

const aluno = new Aluno("Maria", 20, 1.78, 65.89);

console.log(aluno.nome);
console.log(aluno.idade);
console.log(aluno.altura);
console.log(aluno.peso);

//2. Construtor Crie uma classe Produtocom os atributos nome, precoe estoque, inicializados por um construtor. Crie dois produtos diferentes e exiba seus dados.

class Produto {
    nome: string;
    preco: number;
    estoque: number;

    constructor(nome: string, preco: number, estoque: number) {
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
    }
}

const produto1 = new Produto("Notebook", 3500, 10);
const produto2 = new Produto("Mouse", 80, 25);

console.log(produto1);
console.log(produto2);

//3. Métodos Crie uma classe Alunocom os atributos nome nota. Implemente o método aprovado(), que deve retornar truequando a nota for maior ou igual a 6.

class Aluno {
    nome: string;
    nota: number;

    constructor(nome: string, nota: number) {
        this.nome = nome;
        this.nota = nota;
    }

    aprovado(): boolean {
        return this.nota >= 6;
    }
}

const aluno = new Aluno("João", 8);

if (aluno.aprovado()) {
    console.log(`${aluno.nome} passou!`);
} else {
    console.log(`${aluno.nome} não passou.`);
}

//this / self Crie uma classe Retangulo com os atributos largura e altura. Utilize this (ou self) para inicializá-los no construtor e implemente um método calcularPerimetro().

class Retangulo {
  largura: number;
  altura: number;

  constructor(largura: number, altura: number) {
    this.largura = largura;
    this.altura = altura;
  }

  calcularPerimetro(): number {
    return 2 * (this.largura + this.altura);
  }
}

const retangulo = new Retangulo(5, 3);
console.log(retangulo.calcularPerimetro());

//5. Modificadores de acesso Crie uma classe ContaBancaria com o atributo saldo como privado. Implemente os métodos depositar(valor) e consultarSaldo(), sem permitir que o saldo seja alterado diretamente.

class Conta {
  private saldo: number = 0;

  depositar(valor: number): void {
    if (valor > 0) {
      this.saldo += valor;
    }
  }

  consultarSaldo(): number {
    return this.saldo;
  }
}

const conta = new Conta();
conta.depositar(100);
console.log(`Saldo atual: R$ ${conta.consultarSaldo().toFixed(2)}`);
