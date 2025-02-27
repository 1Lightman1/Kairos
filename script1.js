// S�lectionner les �l�ments n�cessaires
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slide-container ');

let currentIndex = 0; // L'indice du slide actuellement affich�

// Fonction pour afficher le slide suivant
function showNextSlide() {
    currentIndex = (currentIndex + 1) % slides.length; // Passage au slide suivant (inclus la boucle)
    updateSliderPosition();
}

// Fonction pour afficher le slide pr�c�dent
function showPrevSlide() {
    currentIndex = (currentIndex - 1) % slides.length; // Passage au slide pr�c�dent (inclus la boucle)
    updateSliderPosition();
}

// Fonction pour mettre � jour la position du slider
function updateSliderPosition() {
    slider.style.transform = `translateX(${currentIndex * 300}px)`; // 300px = largeur de chaque slide
}

// Ajouter des �v�nements sur les boutons
nextButton.addEventListener('click', showNextSlide);
prevButton.addEventListener('click', showPrevSlide);
