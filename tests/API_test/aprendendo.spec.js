import {test, expect} from '@playwright/test'

test ('API GET Request', async ({request}) => {

    const response = await request.get('https://jsonplaceholder.typicode.com/users')
    
    //verificando se o status code = 200
    expect(response.status()).toBe(200)

    const text = await response.text();
    //verificando se contém um texto em específico
    expect(text).toContain('Leanne Graham')

    //Escrever a resposta no console
    console.log(await response.json());
})

test ('API Delete Request', async ({request}) => {

    const response = await request.delete('https://jsonplaceholder.typicode.com/users/1')

    expect(response.status()).toBe(200)
    console.log(await response.json())

})

test('API Patch Request', async ({request}) => {

    const response = await request.patch('https://jsonplaceholder.typicode.com/users/1', {

        data:{
            name:"Mauricio"
        }
    })
    expect(response.status()).toBe(200)
    console.log(await response.json())
})

test('API Post Request', async({request}) => {

    const response = await request.post('https://jsonplaceholder.typicode.com/users', {

        data: {
            id: 2,
            name: "Mauricio",
            username: "Mota"
        }
    })

    expect(response.status()).toBe(201)

    const text = await response.text();
    expect(text).toContain('Mauricio')

    console.log(await response.json());
    
})

test('API Put Request', async({request}) => {

    const response = await request.put('https://jsonplaceholder.typicode.com/users/1', {

        data: {
            id: 2,
            name: "Mauricio",
            username: "Cabanhas"
        }
    })

    expect(response.status()).toBe(200)

    const text = await response.text();
    expect(text).toContain('Cabanhas')

    console.log(await response.json());
    
})