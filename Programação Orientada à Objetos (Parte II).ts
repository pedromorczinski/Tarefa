// 1. Herança
{
  class Pessoa {
    constructor(public nome: string) {}
  }

  class Aluno extends Pessoa {
    constructor(nome: string, public matricula: string) {
      super(nome);
    }
  }

  class Professor extends Pessoa {
    constructor(nome: string, public disciplina: string) {
      super(nome);
    }
  }

  const aluno = new Aluno("Ana", "2023001");
  const professor = new Professor("Carlos", "Matemática");

  console.log(`Aluno: ${aluno.nome}, Matrícula: ${aluno.matricula}`);
  console.log(`Professor: ${professor.nome}, Disciplina: ${professor.disciplina}`);
}

// 2. Encapsulamento
{
  class ContaBancaria {
    private saldo: number;

    constructor(saldoInicial: number = 0) {
      this.saldo = saldoInicial;
    }

    public depositar(valor: number): void {
      if (valor > 0) {
        this.saldo += valor;
        console.log(`Depósito de R$ ${valor.toFixed(2)} realizado.`);
      } else {
        console.log("Valor de depósito inválido.");
      }
    }

    public sacar(valor: number): void {
      if (valor > 0 && valor <= this.saldo) {
        this.saldo -= valor;
        console.log(`Saque de R$ ${valor.toFixed(2)} realizado.`);
      } else {
        console.log("Saldo insuficiente ou valor inválido.");
      }
    }

    public consultarSaldo(): number {
      return this.saldo;
    }
  }

  const conta = new ContaBancaria(100);
  conta.depositar(50);
  conta.sacar(30);
  console.log(`Saldo atual: R$ ${conta.consultarSaldo().toFixed(2)}`);
}

// 3. Polimorfismo
{
  class Animal {
    public emitirSom(): string {
      return "Som genérico de animal";
    }
  }

  class Cachorro extends Animal {
    public override emitirSom(): string {
      return "Au Au!";
    }
  }

  class Gato extends Animal {
    public override emitirSom(): string {
      return "Miau!";
    }
  }

  const animais: Animal[] = [new Cachorro(), new Gato()];

  animais.forEach((animal) => {
    console.log(`${animal.constructor.name}: ${animal.emitirSom()}`);
  });
}

// 4. Abstração
{
  abstract class Forma {
    abstract calcularArea(): number;
  }

  class Retangulo extends Forma {
    constructor(private largura: number, private altura: number) {
      super();
    }

    public calcularArea(): number {
      return this.largura * this.altura;
    }
  }

  class Circulo extends Forma {
    constructor(private raio: number) {
      super();
    }

    public calcularArea(): number {
      return Math.PI * Math.pow(this.raio, 2);
    }
  }

  const retangulo = new Retangulo(5, 4);
  const circulo = new Circulo(3);

  console.log(`Área do Retângulo: ${retangulo.calcularArea()}`);
  console.log(`Área do Círculo: ${circulo.calcularArea().toFixed(2)}`);
}

// 5. Projeto integrando os quatro pilares em TypeScript
{
  abstract class Pessoa {
    constructor(
      public nome: string,
      public email: string
    ) {}

    abstract obterIdentificacao(): string;
  }

  class Aluno extends Pessoa {
    private _matricula: string;

    constructor(nome: string, email: string, matricula: string) {
      super(nome, email);
      this._matricula = matricula;
    }

    public get matricula(): string {
      return this._matricula;
    }

    public obterIdentificacao(): string {
      return `[ALUNO] Nome: ${this.nome} | Matrícula: ${this._matricula}`;
    }
  }

  class Professor extends Pessoa {
    private _salario: number;

    constructor(nome: string, email: string, salario: number) {
      super(nome, email);
      this._salario = salario;
    }

    public get salario(): number {
      return this._salario;
    }

    public set salario(novoSalario: number) {
      if (novoSalario > 0) {
        this._salario = novoSalario;
      }
    }

    public obterIdentificacao(): string {
      return `[PROFESSOR] Nome: ${this.nome} | Salário: R$ ${this._salario.toFixed(2)}`;
    }
  }

  const membros: Pessoa[] = [
    new Aluno("Lucas Silva", "lucas@email.com", "202401"),
    new Professor("Dra. Maria Santos", "maria@universidade.edu", 7500.00)
  ];

  console.log("--- Registro de Membros da Instituição ---");
  membros.forEach((membro) => {
    console.log(membro.obterIdentificacao());
  });
}
