# Charter 01 - Exploratory Testing - Cadastro de Usuário

Sistema: Automation Exercise

## Objetivo:
Explorar a funcionalidade de criação de conta com foco na validação de entradas e casos extremos,
utilizando testes de limite, formatos inválidos e entradas incomuns (caracteres especiais, textos longos, apenas números),
para identificar falhas de validação, possíveis vulnerabilidades de segurança e riscos à experiência do usuário.

## Estratégia
- Testes baseados em sessão utilizando o Xray
- Testar campos obrigatórios com valores vazios
- Validar entradas com caracteres especiais e formatos inválidos
- Inserir valores inesperados (apenas números, emojis, etc.)
- Verificar consistência das validações entre frontend e backend
- Observar mensagens de erro e comportamento da aplicação

## Evidência
Arquivo disponível em:
exploratory-testing/evidences/cadastro-evidence-01.pdf

## Principais descobertas
- Sistema aceita nomes com caracteres especiais
- Sistema aceita nomes contendo apenas números
- Sistema aceita nomes compostos apenas por espaços
- Sistema aceita uso de emojis no campo "Name"

## Duração:
36 minutos