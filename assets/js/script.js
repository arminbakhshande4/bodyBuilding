/* Variable de l'ID omega-content */
var content = document.querySelector('#navbar-content');
/* Variable de l'ID omega-sidebar-body */
var sidebarBody = document.querySelector('#navbar-sidebar-body');
/* Variable du bouton hamburger */
var button = document.querySelector('#navbar-hamburger');
/* Variable de la div overlay */
var overlay = document.querySelector('#navbar-overlay');
/* Class CSS */
var activatedClass = 'navbar-activated';


sidebarBody.innerHTML = content.innerHTML

/**
 * Permet de d'ajouter la class CSS omega-activated si le bouton est cliqué
 */
button.addEventListener('click', function (e){
    e.preventDefault;
    this.parentNode.classList.add(activatedClass);
});

/**
 * Permet de fermer la sidebar avec la touche echap du clavier
 */
button.addEventListener('keydown', function (e){
    if (this.parentNode.classList.contains(activatedClass))
    {
        if (e.repeat === false && e.which === 27)
            this.parentNode.classList.remove(activatedClass);
    }
});

/**
 * Permet de fermer la sidebar si clic dans l'overlay
 */
overlay.addEventListener('click', function (e){
    e.preventDefault;
    this.parentNode.classList.remove(activatedClass);
})



