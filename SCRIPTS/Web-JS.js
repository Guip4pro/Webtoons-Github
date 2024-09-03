

		/* Cette ligne attend que tout le contenu HTML de la page soit entièrement chargé avant d'exécuter le JS */
document.addEventListener('DOMContentLoaded', function () {
    const webtoonLinks = document.querySelectorAll('.tier-grid a');
    const detailSections = document.querySelectorAll('.webtoon-details');
    const closeButtons = document.querySelectorAll('.close-details');

	
		// Ouvre un pop-up
    webtoonLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetID = this.getAttribute('href').substring(1);
            const targetDetail = document.getElementById(targetID);
            if (targetDetail) {
                targetDetail.style.display = 'block';
            }
        });
    });
});

	// Fermeture en cliquant en dehors du pop-up
document.addEventListener('DOMContentLoaded', function () {

    // Fermer le pop-up en cliquant à l'extérieur
    window.addEventListener('click', function(event) {
        const openPopup = document.querySelector('.webtoon-details[style*="display: block"]');
        if (openPopup && !openPopup.contains(event.target) && !event.target.matches('.tier-grid img')) {
            openPopup.style.display = 'none';
        }
    });
});


