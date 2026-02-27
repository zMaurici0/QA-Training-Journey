import {test, expect} from '@playwright/test'


test('Users API', () => {

    test('API GET Request', async ({request}) => {

        const response = await request.get('https://jsonplaceholder.typicode.com/users')
        
        expect(response.status()).toBe(200)

        const body = await response.json()

        expect(body[0]).toMatchObject({
            id: expect.any(Number),
            name: expect.any(String),
            email: expect.any(String)
        })
        expect(body[0].name).toBe('Leanne Graham')

        console.log(body[0]);
    })

    test('API Delete Request', async ({request}) => {

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
                name: "Mauricio",
                username: "Cabanhas"
            }
        })

        expect(response.status()).toBe(200)

        const text = await response.text();
        expect(text).toContain('Cabanhas')

        console.log(await response.json());
        
    })
})

