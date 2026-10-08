#Atividade 1
class Pessoa:
    def __init__(self, nome):
        self.nome = nome


class Aluno(Pessoa):
    pass


class Professor(Pessoa):
    pass


aluno = Aluno("Pedro")
professor = Professor("Eduardo")

print(aluno.nome)
print(professor.nome)

