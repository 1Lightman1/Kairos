const slider = document.querySelector(".slider");
const art = slider.querySelectorAll(".article");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const nb_art = art.length;
var id_central = 0;
let translateX = 0;
let scale = 1;
const step_trans = 230; // Distance de déplacement
const step = 2 / nb_art;

//Initialisation des articles
for (var i = 0; i < nb_art; i++) {
    if (i <= id_central) {
        art[i].style.scale = 1 - (id_central-i)*step;
        art[i].style.opacity = 1 - (id_central-i)*step;
    }
    else {
        art[i].style.scale = 1 - (i-id_central)*step;
        art[i].style.opacity = 1 - (i-id_central)*step;
    }
}

nextBtn.addEventListener("click", () => {
    translateX -= step_trans;
    slider.style.transform = `translateX(${translateX}px)`;

    for (var i = 0; i < nb_art; i++) {
        if (i <= id_central) {
            art[i].style.scale = art[i].style.scale * 1 - step;
            art[i].style.opacity = art[i].style.opacity * 1 - step;
        }
        else {
            art[i].style.scale = art[i].style.scale * 1 + step;
            art[i].style.opacity = art[i].style.opacity * 1 + step;
        }
    }
    id_central++;
});

prevBtn.addEventListener("click", () => {
    translateX += step_trans;
    slider.style.transform = `translateX(${translateX}px)`;

    for (var i = 0; i < nb_art; i++) {
        if (i < id_central) {
            art[i].style.scale = art[i].style.scale * 1 + step;
            art[i].style.opacity = art[i].style.opacity * 1 + step;
        }
        else {
            art[i].style.scale = art[i].style.scale * 1 - step;
            art[i].style.opacity = art[i].style.opacity * 1 - step;
        }
    }
    id_central--;
});

//Moyen de mettre un easter-egg: le glissement des articles n'est pas restreint, on pourrait alors atteindre un certain niveau pour afficher qq ?
