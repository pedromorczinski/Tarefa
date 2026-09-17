// 1. Classe e Objeto Crie uma classe Pessoa com os atributos nome e idade. Crie um objeto e exiba seus atributos.
class Pessoa{
    nome : string;
    idade : number;

    constructor(nome: string, idade: number){
        this.nome = nome
        this.idade = idade
    }
}

const pessoa = new Pessoa("Eduardo Osga", 15);

console.log(pessoa);


  
//2. Construtor Crie uma classe Produtocom os atributos nome, precoe estoque, inicializados por um construtor. Crie dois produtos diferentes e exiba seus dados.

class Produto {

    nome : string;
    preco: number;
    estoque: number;

    constructor( nome: string, preco: number, estoque:number){

        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
    }
}

const Produto1 = new Produto(" Banana", 5.99, 4);
const Produto2 = new Produto("Maça", 6.00, 6);

console.log(Produto1);
console.log(Produto2);

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

console.log(aluno.aprovado());

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
