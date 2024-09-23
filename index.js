// 1. Criação de um Objeto JSON
let aluno = {
    nome: "Maria",
    idade: 21,
    curso: "Engenharia",
    notas: [8.5, 7.0, 9.0]
};

// 2. Acesso a Propriedades
console.log("Nome do aluno:", aluno.nome); // Nome do aluno
console.log("Nota da primeira disciplina:", aluno.notas[0]); // Nota da primeira disciplina

// 3. Modificação de Propriedades
aluno.idade = 22; // Atualiza a idade
aluno.notas.push(10.0); // Adiciona nova nota
console.log("Aluno após modificações:", aluno);

// 4. Conversão para String
let alunoJSON = JSON.stringify(aluno);
console.log("Objeto aluno como string JSON:", alunoJSON);

// 5. Conversão para Objeto
let alunoObjeto = JSON.parse(alunoJSON);
console.log("Objeto aluno após conversão de volta:", alunoObjeto);

// 6. Iteração sobre Propriedades
for (let propriedade in aluno) {
    console.log(`${propriedade}:`, aluno[propriedade]);
}

// 7. Cálculo da Média das Notas
const somaNotas = aluno.notas.reduce((acc, nota) => acc + nota, 0);
const mediaNotas = somaNotas / aluno.notas.length;
console.log("Média das notas:", mediaNotas);

// 8. Criação de um Objeto JSON Aninhado
aluno.endereco = {
    rua: "Av. das Flores",
    cidade: "São Paulo",
    estado: "SP"
};

// 9. Acesso a Dados Aninhados
console.log("Cidade do aluno:", aluno.endereco.cidade);
console.log("Estado do aluno:", aluno.endereco.estado);

// 10. Lista de Alunos
let alunos = [
    { nome: "Maria", idade: 21, curso: "Engenharia", notas: [8.5, 7.0, 9.0] },
    { nome: "João", idade: 22, curso: "Matemática", notas: [6.0, 7.5, 8.0] },
    { nome: "Ana", idade: 20, curso: "Física", notas: [9.0, 8.5, 9.5] }
];

// 11. Filtragem de Alunos
const alunosComMediaAlta = alunos.filter(aluno => {
    const media = aluno.notas.reduce((acc, nota) => acc + nota, 0) / aluno.notas.length;
    return media > 8;
});
console.log("Alunos com média superior a 8:", alunosComMediaAlta);
