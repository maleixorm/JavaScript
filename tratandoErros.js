var video = [];
video[1] = [];
video[1]['nome'] = 'Fullmetal Alchemist';
video[2]['nome'] = 'Naruto';
video[1]['categoria'] = 'Anime';

function getVideo(video) {
    try {
        console.log(video[0]['nome']);
    } catch(erro) {
        tratarErro(erro);
        console.log('Agora podemos tratar o erro!');
        throw new Error('Houve um erro mas não se preocupe. Estamos trabalhando nisso agora!');
    } 
    finally {
        console.log('Sempre passa por aqui!');
    }
    console.log('A aplicação não morreu!');
}

function tratarErro (e) {
    console.log(e);
}

getVideo(video);