export async function createUser(request, randomNumber) {
    
    const response = await request.post('https://gorest.co.in/public/v2/users', {
        headers: {
            Authorization: 'Bearer da1fa3dcd59e2415d9dd286c903d745280f63aa99500c0d8aa7c89341902f501'
        },
        data:{
            name: `fulano${randomNumber}`,
            email: `fulano${randomNumber}@gmail.com`,
            gender: 'male',
            status: 'active'
        }
    });

    const body = await response.json();

    return{
        id_usuario: body.id,
        status: response,
        body
    }
   
}

export async function CreatePost(request, id_usuario, randomNumber) {

    const response_post = await request.post('https://gorest.co.in/public/v2/posts', {
        headers: {
            Authorization: 'Bearer da1fa3dcd59e2415d9dd286c903d745280f63aa99500c0d8aa7c89341902f501'
        },
        data:{
            user_id: id_usuario,
            title: `Nome Aleatório ${randomNumber}`,
            body: `Pecus nostrum paulatim. Appono quia suasoria. Natus commemoro reiciendis ${randomNumber} .`
        }
    })

    const body_post = await response_post.json()

    return {
        id_post: body_post.id,
        status_post: response_post,
        body_post
    }
    

}
