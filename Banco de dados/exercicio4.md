- Mostre as informações apenas dos alunos aprovados. A aprovação é acima de 7,0;
- Exiba as informações dos alunos do primeiro ano com nota maior ou igual a 8,0;
- Exiba apenas os nomes e as notas dos alunos;
- Crie uma tabela PROFESSOR que apresente apenas o primeiro e o último nome do professor;
- Crie uma tabela ALUNO com o primeiro e o último nome de cada;
- Mostre o resultado da união entre a tabela ALUNO(PNome, UNome) e a tabela PROFESSOR;
- Exiba o resultado da intersecção entre a tabela ALUNO(PNome, UNome) e a tabela PROFESSOR;
- Exiba o resultado da diferença entre a tabela ALUNO(PNome, UNome) e a tabela PROFESSOR. 

![Alt text](Imagem01_Atividade04_BancoDeDadosI-1.png)

1 SELECT * FROM ALUNO WHERE NOTA > 7;

2 SELECT * FROM ALUNO WHERE NOTA >= 8;

3 SELECT P.NOME, NOTA FROM ALUNO;

4 CREATE TABLE PROFESSOR (P.NOME varchar(255), U.NOME varchar(255));

5 SELECT A.P.NOME, A.U.NOME FROM ALUNO A 
   UNION
   SELECT PRO.P.NOME, PRO.U.NOME FROM PROFESSOR PRO;
Vai mostrar duas colunas P.NOME e U.NOME como todos os dados tanto de aluno quanto professor

6 Como nao existe relaçao entre aluno e professor o resultado nao retornara nada 

7 Mostrar todos os dados que contem em ALUNOS que nao contem em PROFESSOR
