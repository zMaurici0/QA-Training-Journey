# Teste Funcional - Particionamento de Equivalência

Sistema: Sauce Demo
Funcionalidade: Login

## Partições

username = qualquer usuário permitido no sistema -> válido
username = usuário não cadastrado -> inválido

senha = secret_sauce -> válido
senha diferente de standad_user -> inválido

## Casos de teste

CT01 – username: standard_user, senha: secret_sauce = válido
CT02 – username: nome errado, senha: secret_sauce = inválido
CT03 – username: standard_user, senha: senha errada = inválido

