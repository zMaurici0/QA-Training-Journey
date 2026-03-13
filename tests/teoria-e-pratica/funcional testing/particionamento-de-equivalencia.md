# Teste Funcional - Particionamento de Equivalência

Sistema: Sauce Demo
Funcionalidade: Login

## Partições

username = qualquer usuário permitido no sistema -> válido
username = usuário não cadastrado -> inválido

senha = secret_sauce -> válido
senha diferente de standad_user -> inválido

## Casos de teste

CT01 – username válido + senha válida
CT02 – username inválido + senha válida 
CT03 – username inválido + senha válida
