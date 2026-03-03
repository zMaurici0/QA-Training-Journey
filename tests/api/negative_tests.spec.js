import {test, expect} from '@playwright/test'
import { DeletarProduto, FazerLogin, NovoProduto } from '../../api/helpers_servrest'
import { randomInt } from 'crypto'

/* Aprendendo a fazer testes negativos básicos para garantir que a API 
não retorne erros, não quebre, responda com códigos e mensagens corretas,
não aceita dados inválidos, etc */

// Os testes serão feitos na API pública ServeRest

// Teste 1 

test('Falta de campo obrigatório', async ({request}) => {

    // Fazendo login pra pegar o token
    const {status, token, body} = await FazerLogin(request)

    //criando novo produto sem nome
    const response =  await request.post('https://serverest.dev/produtos', {
        headers: {
            Authorization: `${token}`
        },
        data:{
            preco: 10,
            descricao: 'asdasd',
            quantidade: 10
        }
    })

    expect(response.status()).toBe(400)

    const json = await response.json()
    console.log(json)
})

// teste 2

test('Campos com tipo errado', async ({request}) => {

    // Fazendo login pra pegar o token
    const {status, token, body} = await FazerLogin(request)

    //criando novo produto com tipo errado
    const response =  await request.post('https://serverest.dev/produtos', {
        headers: {
            Authorization: `${token}`
        },
        data:{
            nome: 100,
            preco: '10 reais',
            descricao: 'asdasd',
            quantidade: 90
            // enviando nome como int e preço como string
            // deve retornar erro
        }
    })

    expect(response.status()).toBe(400)

    const json = await response.json()
    console.log(json)
})

// teste 3

test('Enviar ID que não existe', async ({request}) => {

    // Fazendo login pra pegar o token
    const {status, token, body} = await FazerLogin(request)

    const response =  await request.get('https://serverest.dev/produtos/999aaa999bbb888s', {
        headers: {
            Authorization: `${token}`
        }
    })

    //testei com 404 e não foi, ele retorna erro 400 Bad Request
    expect(response.status()).toBe(400)

    const json = await response.json()
    console.log(json)
})

// teste 4

test('Campos com valor fora do limite', async ({request}) => {

    // Fazendo login pra pegar o token
    const {status, token, body} = await FazerLogin(request)

    //criando produto com valores negativos e campos vazios
    const response =  await request.post('https://serverest.dev/produtos', {
        headers: {
            Authorization: `${token}`
        },
        data:{
            nome: 'Monitor 144hz',
            preco: -20,
            descricao: '',
            quantidade: -100
        }
    })

    //422 Unprocessable Entity
    //expect(response.status()).toBe(422)

    expect(response.status()).toBe(400)

    const json = await response.json()
    console.log(json)
})

// teste 5

test('Token inválido', async ({request}) => {

    // Fazendo login pra pegar o token
    const {status, token, body} = await FazerLogin(request)

    //criando produto com valores negativos e campos vazios
    const response =  await request.post('https://serverest.dev/produtos', {
        headers: {
            Authorization: `${token}Errado`
        },
        data:{
            nome: 'Monitor 144hz',
            preco: 20,
            descricao: 'Periférico',
            quantidade: 100
        }
    })

    // 401 Unauthorized
    expect(response.status()).toBe(401)

    const json = await response.json()
    console.log(json)
})

// teste 6

test('Método não permitido', async ({request}) => {

    // Fazendo login pra pegar o token
    const {status, token, body} = await FazerLogin(request)

    //Usando delete sem passar id_produto
    const response =  await request.delete('https://serverest.dev/produtos', {
        headers: {
            Authorization: `${token}`
        }
    })

    // 405 Method Not Allowed
    expect(response.status()).toBe(405)

    const json = await response.json()
    console.log(json)
})

// teste 7

test('Campos extremamente grande', async ({request}) => {

    // Fazendo login pra pegar o token
    const {status, token, body} = await FazerLogin(request)

    //criando produto nome gigante
    const nomeGigante = '2'.repeat(100000)

    // Resultado:

    // A API aceita até aproximadamente 100.000 caracteres
    // Acima de ~110.000 retorna 413

    const response =  await request.post('https://serverest.dev/produtos', {
        headers: {
            Authorization: `${token}`
        },
        data:{
            nome: 'aaaaaaaaaaaaaaaaaa',
            preco: 9007199254740991,
            descricao: 'asdasd',
            quantidade: -9007199254740991
        }
    })

    // Esperado seria 413 caso existisse validação de regra de negócio.
    // Atualmente retorna 201, indicando ausência de validação de tamanho.
    expect(response.status()).toBe(400)

    const json = await response.json()
    console.log(json)
})