function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var segundos = addZero(data.getSeconds());
    var minutos = addZero(data.getMinutes());
    var hora = addZero(data.getHours());
    function addZero(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }
    setTimeout('carregar()', 500);

    msg.innerHTML = `Agora são ${hora}:${minutos}:${segundos}`
    if (hora >= 5 && hora < 12) {
        alert(`Bom dia!`)
        img.src = "./img/fotomanha.png";
        document.body.style.background = '#ffe353';
    } else if (hora >= 12 && hora < 18) {
        alert(`Boa tarde!`)
        img.src = "./img/fototarde.png";
        document.body.style.background = '#e5cba3';
    } else {
        alert(`Boa noite!`)
        img.src = "./img/fotonoite.png";
        document.body.style.background = '#193f58';
    }
}