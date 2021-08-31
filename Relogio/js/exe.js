function carregar(){
    var texto = window.document.getElementById('texto');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    texto.innerHTML = `Agora são <strong>${hora} horas.</strong>`;

    if (hora >= 5 && hora <= 10) {
        // Comecodia
        img.src = "imagens/comecodia.png";
        texto2.innerHTML = `<strong>Bom dia!</strong>`;
        document.body.style.background = "rgb(255, 216, 157)";


    } else if (hora >= 11 &&  hora <= 14) {
        // Meiodia

        img.src = "imagens/meiodia.png";
        texto2.innerHTML = `<strong>Boa tarde!</strong>`;
        document.body.style.background = "rgb(58, 123, 245)";
        
    } else if (hora >= 15 && hora <= 17) {
        // Entardecer

        img.src = "imagens/entardecer.png";
        texto2.innerHTML = `<strong>Bom entardecer!</strong>`;
        document.body.style.background = "rgb(204, 135, 32)";

    } else if (hora >= 18 && hora <= 19) {
        // Anoitecer
     
        img.src = "imagens/anoitecer.png";
        texto2.innerHTML = `<strong>Bom anoitecer!</strong>`;
        document.body.style.background = "rgb(41, 77, 194)";

    } else {
        // Noite

        img.src = "imagens/noite.png";
        texto2.innerHTML = `<strong>Boa noite!</strong>`;
        document.body.style.background = "rgb(58, 61, 73)";
    }
}