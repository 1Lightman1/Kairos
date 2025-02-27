// Sélectionner les éléments nécessaires
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slide-container ');

let currentIndex = 0; // L'indice du slide actuellement affiché

// Fonction pour afficher le slide suivant
function showNextSlide() {
    currentIndex = (currentIndex + 1) % slides.length; // Passage au slide suivant (inclus la boucle)
    updateSliderPosition();
}

// Fonction pour afficher le slide précédent
function showPrevSlide() {
    currentIndex = (currentIndex - 1) % slides.length; // Passage au slide précédent (inclus la boucle)
    updateSliderPosition();
}

// Fonction pour mettre à jour la position du slider
function updateSliderPosition() {
    slider.style.transform = `translateX(${currentIndex * 300}px)`; // 300px = largeur de chaque slide
}

// Ajouter des événements sur les boutons
nextButton.addEventListener('click', showNextSlide);
prevButton.addEventListener('click', showPrevSlide);
