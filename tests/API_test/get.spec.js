import {test, expect} from '@playwright/test'

test ('API GET Request', async ({request}) => {

    const response = await request.get('https://jsonplaceholder.typicode.com/posts')
    
    //verificando se o status code = 200
    expect(response.status()).toBe(200)

    const text = await response.text();
    //verificando se contém um texto em específico
    expect(text).toContain('sunt aut facere repellat provident occaecati excepturi optio reprehenderit')


    //Escrever a resposta no console
    console.log(await response.json());
})