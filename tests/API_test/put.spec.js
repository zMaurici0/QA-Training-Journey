import {test, expect} from '@playwright/test'

test('API Put Request', async({request}) => {

    const response = await request.put('https://jsonplaceholder.typicode.com/posts/1', {

        data: {
            userId: 2,
            title: "Mauricio",
            body: "Cabanhas"
        }
    })

    expect(response.status()).toBe(200)

    const text = await response.text();
    expect(text).toContain('Cabanhas')

    console.log(await response.json());
    
})