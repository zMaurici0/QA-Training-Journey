import {test, expect} from '@playwright/test'

test('API Post Request', async({request}) => {

    const response = await request.post('https://jsonplaceholder.typicode.com/posts', {

        data: {
            userId: 2,
            title: "Mauricio",
            body: "Mota"
        }
    })

    expect(response.status()).toBe(201)

    const text = await response.text();
    expect(text).toContain('Mauricio')

    console.log(await response.json());
    
})