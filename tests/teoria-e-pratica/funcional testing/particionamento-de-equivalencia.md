# Teste Funcional - Particionamento de Equivalência

 O Particionamento de Equivalência é uma técnica de teste que divide os dados de entrada em grupos chamados de "partições". Cada partição representa um conjunto de valores que devem produzir o mesmo comportamento no sistema. Em vez de testar todos os valores possíveis, o testador escolhe apenas um valor representativo de cada grupo (válido ou inválido) para verificar se o sistema funciona corretamente.

Sistema: Sauce Demo
Funcionalidade: Login

## Partições

- username = qualquer usuário permitido no sistema -> válido
- username = usuário não cadastrado -> inválido

- senha = secret_sauce -> válido
- senha diferente de standad_user -> inválido

## Casos de teste

- CT01 – username válido + senha válida
- CT02 – username inválido + senha válida 
- CT03 – username inválido + senha válida
