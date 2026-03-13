# Teste Funcional - Análise de valor limite

Sistema: Dummy JSON
Funcionalidade: Criação de usuário

Como a documentação da API não define limite de caracteres, foram testados
valores progressivamente maiores.

## Valores Testados

Campo FirstName:
1 caractere
20 caracteres
100 caracteres
1000 caracteres


## Casos de teste

CT01 – Nome com 1 caractere
CT02 – Nome com 20 caracteres
CT03 – Nome com 100 caracteres
CT04 – Nome com 1000 caracteres

## Resultados

A API aceita qualquer tamanho de valor para o campo firstName.
Nenhuma validação de limite foi encontrada.
