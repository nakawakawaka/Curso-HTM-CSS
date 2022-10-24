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
    try{
        const href = el.getAttribute('href');
        const response = await fetch(href);
    
        if(response.status !== 200) throw new Error('ERRO 404!');
    
        const html = await response.text();
        carregaResultado(html);
    } catch(e) {
        console.log(e);
    }



    // fetch(href)
    //     .then(response => {
    //         if(response.status !== 200) throw new Error('ERRO 404!');
    //         return response.text();
    //     })
    //     .then(html => carregaResultado(html))
    //     .catch(e => console.log(e));

}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response; 
}

// fetch('pg1.html') // esta funcao retorna uma promise
//     .then(resposta => { // a resposta nao vem com os dados prontos para serem usado é necessario converter-los
//         if(resposta.status !== 200) throw new Error('ERRO 404 NOSSO');
//         return resposta.text(); // esta funcao tambem retornar promise
//     })
//     .then(html => console.log(html))
//     .catch(e => console.log(e));

