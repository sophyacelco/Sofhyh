 document.addEventListener('DOMContentLoaded', function(){
    const botaoDeAcessibilidade = document.getElementById('Borao-Acessibilidade');
    const opcoesDeAcessibilidade = document.getElementById('Opcoes-Acessibilidade');

    botaoDeAcessibilidade.addEventListener('click', function(){
        botaoDeAcessibilidade.classList.toggle('rotacao-botao')
    opcoesDeAcessibilidade.classList.toggle('apresenta-lista')    

    const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
    botaoDeAcessibilidade.setAttribute('aria-expanded', !botaoSelecionado)

    })

    const aumentaFonteBotao = document.getElementById('Aumentar-Fonte');
    const diminuiFonteBotao = document.getElementById('Diminuir-Fonte');

    const alternaContraste = document.getElementById('Alterna-Contraste');

    let tamanhoAtualFonte = 1;

    aumentaFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`
     })

    diminuiFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte -= 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`
     })

     alternaContraste.addEventListener('click', function(){
        document.body.classList.toggle('alto-contraste')
     })
 })

ScrollReveal().reveal('#inicio',{dalay: 500});
ScrollReveal().reveal('#tropicalia',{dalay: 500});
ScrollReveal().reveal('#galeria',{dalay: 500});
ScrollReveal().reveal('#contato',{dalay: 500});
 