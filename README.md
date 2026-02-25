Sobre

Este projeto faz parte da minha jornada de aprendizado em Quality Assurance (QA) com foco em testes automatizados usando Playwright no JavaScript.
O objetivo é praticar frameworks de teste, estruturar cenários e ganhar experiência com execução de testes, geração de relatórios e automação básica de UI.

Tecnologias

- JavaScript
- Playwright
- Node.js (npm)

Estrutura do Projeto
```
├── pages/                  # Page Object Model
├── tests/                  # Testes automatizados
├── playwright.config.js    # Configuração do Playwright
├── package.json            # Dependências e scripts
├── .gitignore
├── README.md
```
Organização dos Testes

Os testes estão divididos em arquivos dentro de tests/
As páginas e objetos de interface estão em pages/
A configuração geral está em playwright.config.js

Como usar

Clone o repositório:
```
git clone https://github.com/zMaurici0/QA-Training-Journey.git
```
Entre na pasta do projeto:
```
cd QA-Training-Journey
```
Instale as dependências:
```
npm install
```
Execute os testes:
```
npx playwright test
```
Abra o relatório:
```
npx playwright show-report
```

Comandos úteis
```
npx playwright test	/arquivo                              | para rodar um arquivo em específico
npx playwright test --headed                              | para abrir o navegador e mostrar a execução	
npx playwright test --project                             | para executar o teste em um navegador específico, ex: chromium
npx playwright test	/arquivo --headed --project           | juntando os três
```
