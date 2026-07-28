const card = document.getElementById("card");

card.addEventListener("click", () => {
    card.classList.toggle("girata");
});

document.getElementById("nomi").textContent = invito.nomi;
document.getElementById("frase").textContent = invito.frase;
document.getElementById("data").textContent = invito.data;
document.getElementById("ora").textContent = invito.ora;
document.getElementById("luogo").textContent = invito.luogo;