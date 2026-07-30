const suggerimento = document.getElementById("toccaApri");
const musica = document.getElementById("musica");

card.addEventListener("click", () => {

    if (!card.classList.contains("girata")) {
        suggerimento.style.opacity = "0";
    }

    card.classList.toggle("girata");
    musica.play();

});

document.getElementById("nomi").textContent = invito.nomi;
document.getElementById("frase").textContent = invito.frase;
document.getElementById("data").textContent = invito.data;
document.getElementById("ora").textContent = invito.ora;
document.getElementById("luogo").textContent = invito.luogo;