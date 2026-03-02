import { test, expect } from '@playwright/test'
import { randomInt } from 'node:crypto'
import { DeletarProduto, FazerLogin, NovoProduto } from '../../api/helpers_servrest'

// Usando a API ServeRest
// por ser uma API publica, para tornar cada teste independente irei criar um produto novo a cada teste e aí fazer o teste com esse produto

test.describe(' CRUD - Produtos', () => {

    test('Validação de produto existente ', async ({ request }) => {

        // primeiro fazendo login cara criar um produto
        const { status, token, body } = await FazerLogin(request)
        expect(status.status()).toBe(200)

        console.log(body)

        // criando produto
        const randomNumber = randomInt(200)
        const { status_produto, body_produto, id_produto } = await NovoProduto(request, randomNumber, token)

        expect(status_produto.status()).toBe(201)
        console.log(body_produto)

        //Agora sim, teste de produto existente
        const response = await request.get(`https://serverest.dev/produtos/${id_produto}`)
        const json = await response.json()

        expect(response.status()).toBe(200)

        expect(json).toMatchObject({
            _id: id_produto,
            nome: `Mouse Genérico ${randomNumber}`,
            preco: 250,
            descricao: 'Mouse',
            quantidade: 100
        })

        console.log(json)

        //Limpando API
        const { status_delete, body_delete } = await DeletarProduto(request, id_produto, token)

        expect(status_delete.status()).toBe(200)
        console.log(body_delete)

    })

    test('Deve retornar erro ao buscar produto deletado', async ({ request }) => {

        //Login
        const { status, token, body } = await FazerLogin(request)
        expect(status.status()).toBe(200)
        console.log(body)

        // Criando produto
        const randomNumber = randomInt(200)
        const { status_produto, body_produto, id_produto } = await NovoProduto(request, randomNumber, token)
        
        //Deletando produto
        const { status_delete, body_delete } = await DeletarProduto(request, id_produto, token)

        expect(status_delete.status()).toBe(200)
        console.log(body_delete)
        console.log('ID usado no GET:', id_produto);

        //teste para retornar erro 400
        const response = await request.get(`https://serverest.dev/produtos/${id_produto}`);
        expect(response.status()).toBe(400);

        const json = await response.json()
        console.log(json)

    })

})