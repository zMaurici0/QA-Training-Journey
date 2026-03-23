# Teste Funcional - Grafo Causa Efeito

Sistema: Sauce Demo
Funcionalidade: Checkout

## Causas

- C1 = usuário logado
- C2 = produto no carrinho
- C3 = first name preenchido
- C4 = last name preenchido
- C5 = zip code preenchido

## Efeitos 

- E1 = checkout concluído
- E2 = mensagem de erro

## Casos de teste

- CT01 – Todas condições verdadeiras = Checkout concluído  
- CT02 – First Name vazio = Erro  
- CT03 – Last Name vazio = Erro  
- CT04 – Postal Code vazio = Erro  
- CT05 – Usuário não logado/Acesso negado
