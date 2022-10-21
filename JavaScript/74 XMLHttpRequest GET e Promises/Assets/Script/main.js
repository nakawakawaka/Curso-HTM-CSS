// esta funcao faz requisicao de qualque tipo de dado ex ajax jason etc
const request = obj => {
    return new Promise ((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url ,true);
        xhr.send();
    
        xhr.addEventListener('load', () => {
            // codigos Http
            if(xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
            } else {
                reject({
                    code: xhr.status,
                    msg: xhr.statusText
                });
            }
        });
    })
    //xhr.open('Get', 'URL', 'true ou fase para sincrono ou asincrono')
    
    // METODO ANTIGO UTILIZANDO CALLBACK
    // xhr.open(obj.method, obj.url ,true);
    // xhr.send();

    // xhr.addEventListener('load', () => {
    //     // codigos Http
    //     if(xhr.status >= 200 && xhr.status < 300) {
    //         obj.success(xhr.responseText);
    //     } else {
    //         obj.error({
    //             code: xhr.status,
    //             msg: xhr.statusText
    //         });
    //     }
    // });
};

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    }
});

async function carregaPagina(el) {
    const href = el.getAttribute('href');
    
    try {
        const response = await request({
            method: 'GET',
            url: href,
            
            // METODO ANTIGO UTILIZANDO CALLBACK
            // success(response) {
            //     carregaResultado(response);
            // },
            // error(errorText) {
            //     console.log(errorText);
            // }
        }).then(response => {
            carregaResultado(response)
        }).catch(error => console.log(error));
    } catch(e) {
        console.log(e);
    }
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response; 
}
