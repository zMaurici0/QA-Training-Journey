export async function FazerLogin(request) {

    const response = await request.post('https://serverest.dev/login', {
        data: {
            email: 'fulano@qa.com',
            password: 'teste'
        }
    })

    const body = await response.json();

    return{
        status: response,
        token: body.authorization,
        body
    }
}

export async function NovoProduto(request, randomNumber, token) {
    
    const response = await request.post('https://serverest.dev/produtos', {
        headers:{
            Authorization: `${token}`
        },
        data:{
            "nome": `Mouse Genérico ${randomNumber}`,
            "preco": 250,
            "descricao": "Mouse",
            "quantidade": 100
        }
    });

    const body_produto = await response.json();

    return{
        status_produto: response,
        body_produto,
        id_produto: body_produto._id
    }

}

export async function DeletarProduto(request, id_produto, token) {
    
    const response = await request.delete(`https://serverest.dev/produtos/${id_produto}`, {
        headers:{
            Authorization: `${token}`
        }
    })

    const body_delete = await response.json();

    return{
        status_delete: response,
        body_delete
    }

}