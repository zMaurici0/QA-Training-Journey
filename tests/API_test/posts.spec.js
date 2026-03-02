import {test, expect} from '@playwright/test'
import { randomInt } from 'node:crypto';
import { createUser, CreatePost } from './helpers';

/* criando um usuário novo para garantir isolamento do teste. Cada teste deve ser independente,
não pode depender de dados já existentes ou criados por outros testes. 
Isso evita conflitos (ex: email duplicado), falhas por exclusão externa e 
problemas ao rodar testes em paralelo. */

test.describe('GET', () => {

    test('Teste de post existente | criar novo usuário -> criar novo post -> testar post', async ({request}) => {

        const randomNumber = randomInt(200);

        // Criando usuário
        const {id_usuario, status, body } = await createUser(request, randomNumber);
        expect(status.status()).toBe(201);

        console.log(`Usuário ${body.name} criado`);

        //Criando post
        const {id_post, status_post, body_post} = await CreatePost(request, id_usuario, randomNumber);
        expect(status_post.status()).toBe(201);

        console.log(`Post ${body_post.title} criado`);

        // testando se retorna 200 OK
        const response = await request.get(`https://gorest.co.in/public/v2/posts/${id_post}`);
        expect(response.status()).toBe(200);

        console.log(body_post);
    })


    // dia 02/03, eu queria deixar esses 2 testes abaixo independentes hoje, mas a API GoRest caiu e está retornando status code 500, vou continuar com outra API e depois volto aq

    test('Teste de post inexistente', async ({request}) => {

        const response = await request.get('https://gorest.co.in/public/v2/posts/999999');
        const body = await response.json();

        expect(response.status()).toBe(404);

        console.log(body);
    })

    test('Retorno de dados de um post', async ({request}) => {

        const response = await request.get('https://gorest.co.in/public/v2/posts/272549');
        const body = await response.json();

        expect(response.status()).toBe(200);

        expect(body).toHaveProperty('user_id');
        expect(body).toHaveProperty('title');
        expect(body).toHaveProperty('body');

        console.log(body);
    })

})

test.describe('POST' , () =>{

    test('Criar Usuário | Criar novo post | verificar dados do novo post', async ({ request }) => {

        const randomNumber = randomInt(200);

        //criando novo usuário

        /*
        Minha função retorna algo assim
        {
            id_usuario: 12345,
            status: 201,
            body: { ...dados do usuário... }
        }

        a parte {id_usuario, status, body} basicamente está criando variáveis com os mesmos nomes
        do objeto retornado

        é a mesma coisa q fazer isso:
        const result = await createUser(request, randomNumber)

        const id_usuario = result.id_usuario
        const status = result.status
        const body = result.body

        lembrar disso
        */
        const {id_usuario, status, body} = await createUser(request, randomNumber)

        expect(status.status()).toBe(201)
        expect(body).toHaveProperty('name');
        expect(body).toHaveProperty('email');
        expect(body).toHaveProperty('gender');
        expect(body).toHaveProperty('status');

        //criando novo post 
        const {status_post, body_post} = await CreatePost(request, id_usuario, randomNumber)

        expect(status_post.status()).toBe(201)
        expect(body_post).toHaveProperty('user_id')
        expect(body_post).toHaveProperty('title')
        expect(body_post).toHaveProperty('body')
        
    })

})

test.describe('PUT', () => {

    test('Atualizando dados completos de um post', async ({request}) => {
        
        const randomNumber = randomInt(200)

        const new_user = await createUser(request, randomNumber);
        const id_usuario = new_user.id_usuario
        const {id_post, status_post, body_post} = await CreatePost(request, id_usuario, randomNumber);
        
        expect(status_post.status()).toBe(201)
        console.log("Post Criado:\n", body_post)

        const response = await request.put(`https://gorest.co.in/public/v2/posts/${id_post}`, {
            headers: {
                Authorization: 'Bearer da1fa3dcd59e2415d9dd286c903d745280f63aa99500c0d8aa7c89341902f501'
            },
            data:{
                title: `Nome Atualizado ${randomNumber}`,
                body: `Corpo atualizado ${randomNumber}.`
            }
        })

        const body =  await response.json()
        expect(response.status(200))

        expect(body.title).toContain(`Nome Atualizado ${randomNumber}`)
        expect(body.body).toContain(`Corpo atualizado ${randomNumber}.`)

        console.log(body)
    })
})

test.describe('DELETE', () => {

    test('Deletar um post', async ({request}) => {

        const response = await request.delete('https://gorest.co.in/public/v2/posts/272544', {
            headers:{
                Authorization: 'Bearer da1fa3dcd59e2415d9dd286c903d745280f63aa99500c0d8aa7c89341902f501'
            }
        });

        expect(response.status()).toBe(204);

        //valida que realmente foi deletado
        const getResponse = await request.get('https://gorest.co.in/public/v2/users/272544');

        expect(getResponse.status()).toBe(404);

    })

})
