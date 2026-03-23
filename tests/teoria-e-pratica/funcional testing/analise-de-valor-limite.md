# Teste Funcional - Análise de valor limite

 A Análise de Valor Limite é uma técnica de teste que busca identificar falhas testando valores próximos aos limites de entrada de um sistema. Como a documentação da API não define um tamanho máximo para o campo firstName, foram utilizados valores progressivamente maiores para observar como a API se comporta em diferentes tamanhos de entrada.

Sistema: Dummy JSON
Funcionalidade: Criação de usuário

## Valores Testados

Campo FirstName:
- 1 caractere
- 20 caracteres
- 100 caracteres
- 1000 caracteres


## Casos de teste

- CT01 – Nome com 1 caractere
- CT02 – Nome com 20 caracteres
- CT03 – Nome com 100 caracteres
- CT04 – Nome com 1000 caracteres

## Resultados

A API aceita qualquer tamanho de valor para o campo firstName.
Nenhuma validação de limite foi encontrada.
