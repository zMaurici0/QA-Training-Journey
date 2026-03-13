import { test, expect } from '@playwright/test'

async function criarUsuario(request, firstName){
    return await request.post('https://dummyjson.com/users/add',{
        data:{
            firstName,
            lastName:'Ovi',
            age:38
        }
    })
}

test.describe('Análise de valor limite - Campo FirstName', () => {

    test('CT01 Nome com 1 caractere', async ({request}) => {

        const response = await criarUsuario(request,'a')
        expect(response.status()).toBe(201)
    })

    test('CT02 Nome com 20 caracteres', async ({request}) => {

        const nome = 'a'.repeat(20)
        const response = await criarUsuario(request,nome)
        expect(response.status()).toBe(201)
    })

    test('CT03 Nome com 100 caracteres', async ({request}) => {

        const nome = 'a'.repeat(100)
        const response = await criarUsuario(request,nome)
        expect(response.status()).toBe(201)
    })

    test('CT04 Nome com 1000 caracteres', async ({request}) => {

        const nome = 'a'.repeat(1000)
        const response = await criarUsuario(request,nome)
        expect(response.status()).toBe(201)
    })

})