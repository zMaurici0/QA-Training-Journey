# Teste Funcional - Teste Funcional Sistemático

 Teste Funcional Sistemático é uma técnica que consiste em testar de forma organizada diferentes combinações de entradas e condições do sistema. O objetivo é verificar se a funcionalidade se comporta corretamente em diversos cenários possíveis, incluindo casos válidos, inválidos e limites, garantindo uma cobertura mais completa da funcionalidade.

Sistema: Sauce Demo
Funcionalidade: Login

## Partições

- username = qualquer usuário permitido no sistema -> válido
- username = usuário não cadastrado -> inválido
- username = vazio -> inválido
- username = caracteres especiais -> inválido
------------------------------------------------------------
- senha = secret_sauce -> válido
- senha = diferente de standad_user -> inválido
- senha = vazia -> inválido

## Casos de teste

- CT01 – username válido + senha válida
- CT02 – username inválido + senha válida
- CT03 – username válido + senha inválida
CT04 – username vazio
CT05 – senha vazia
CT06 – username com 1 caractere
CT07 – username com muitos caracteres
CT08 – username com caracteres especiais
CT09 – username com espaço
