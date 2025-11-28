// Fichier: script.js

document.addEventListener('DOMContentLoaded', (event) => {
    
    // 1. Fonctionnalité: Message de Bienvenue (Utilisation du DOM)
    // Affiche un message personnalisé lorsque la page est entièrement chargée
    console.log("Bienvenue sur le portfolio d'Ayoub Lakouam!");
    alert("Bonjour et bienvenue ! Découvrez mes compétences en Cloud et Infrastructure.");


    // 2. Fonctionnalité: Défilement Fluide pour les Liens de Navigation
    // Cela améliore l'expérience utilisateur lorsque l'on clique sur un lien interne (ex: #skills)

    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            
            // Empêche le comportement par défaut du lien (saut brutal)
            e.preventDefault(); 
            
            // Récupère l'élément cible à partir de l'attribut href du lien
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Fait défiler la page vers l'élément cible de manière fluide
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    
    // 3. Fonctionnalité (Exemple Avancé): Mettre en évidence la section active
    // Permet d'ajouter une classe CSS à la section lorsqu'elle est visible à l'écran
    
    const sections = document.querySelectorAll('.content-section');
    const options = {
      rootMargin: '0px',
      threshold: 0.5 // 50% de la section doit être visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log(`Section active: ${entry.target.id}`);
          // Ici, on pourrait ajouter une classe 'active' pour mettre en évidence le lien de navigation correspondant
        }
      });
    }, options);

    sections.forEach(section => {
      observer.observe(section);
    });
});