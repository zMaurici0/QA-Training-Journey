import {test, expect} from '@playwright/test'
import { randomInt } from 'node:crypto';

// Fazendo teste na API da GORest

test.describe('GET', () => {

    test('Teste de usuário existente', async ({request}) => {

        const response = await request.get('https://gorest.co.in/public/v2/users/8383536');
        const body = await response.json();

        expect(response.status()).toBe(200);
        
        console.log(body);
    })

    test.only('Teste de usuário inexistente', async ({request}) => {

        const response = await request.get('https://gorest.co.in/public/v2/users/999999');
        const body = await response.json();

        expect(response.status()).toBe(404);
        
        console.log(body);
    })

    test('Retorno de dados do usuário', async ({request}) => {
        
        const response = await request.get('https://gorest.co.in/public/v2/users/8383536');
        const body = await response.json();
        console.log(body);

        expect(body).toHaveProperty('name');
        expect(body).toHaveProperty('email');
        expect(body).toHaveProperty('gender');
        expect(body).toHaveProperty('status');

        expect(response.status()).toBe(200);
    
    })
})

test.describe('POST', () => {

    test('Criação de usuário e validação de retorno', async ({request}) => {

        // Tive q colocar um número aleatório no nome para testar várias vezes pois ele n aceita nome e email já existentes
        const randomNumber = randomInt(200);

        const response = await request.post('https://gorest.co.in/public/v2/users', {
            headers: {
                Authorization: 'Bearer da1fa3dcd59e2415d9dd286c903d745280f63aa99500c0d8aa7c89341902f501'
            },
            data:{
                name: `Fulano${randomNumber}`,
                email: `fulano${randomNumber}@gmail.com`,
                gender: 'male',
                status: 'active'
            }
        });

        const body = await response.json();

        expect(response.status()).toBe(201);

        //valida campos criados
        expect(body).toHaveProperty('name', `Fulano${randomNumber}`);
        expect(body).toHaveProperty('email', `fulano${randomNumber}@gmail.com`);
        expect(body).toHaveProperty('gender', 'male');
        expect(body).toHaveProperty('status', 'active');

        console.log(body);
    })
})

test.describe('PUT', () => {

    const randomNumber = randomInt(200);

    test('Modificar totalmente os dados de um usuário', async ({request}) => {

        const response = await request.put('https://gorest.co.in/public/v2/users/8383536', {
            headers: {
                Authorization: 'Bearer da1fa3dcd59e2415d9dd286c903d745280f63aa99500c0d8aa7c89341902f501'
            },
            data:{
                name: `Fulana${randomNumber}`,
                email: `fulana${randomNumber}@gmail.com`,
                gender: 'female',
                status: 'inactive'
            }
        });

        const body = await response.json();

        expect(response.status()).toBe(200);

        expect(body).toHaveProperty('name', `Fulana${randomNumber}`);
        expect(body).toHaveProperty('email', `fulana${randomNumber}@gmail.com`);
        expect(body).toHaveProperty('gender', 'female');
        expect(body).toHaveProperty('status', 'inactive');
        //valida campos atualizados

        console.log(body)

    })
})

test.describe('DELETE', () => {

    test('Deletar um usuário', async ({request}) => {

        const response = await request.delete('https://gorest.co.in/public/v2/users/8382858', {
            headers:{
                Authorization: 'Bearer da1fa3dcd59e2415d9dd286c903d745280f63aa99500c0d8aa7c89341902f501'
            }
        });

        expect(response.status()).toBe(204);

        //valida que realmente foi deletado
        const getResponse = await request.get('https://gorest.co.in/public/v2/users/8382858');

        expect(getResponse.status()).toBe(404);

    })

})


