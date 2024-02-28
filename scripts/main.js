// *-*-*- Pour créer une valeur dans une clé -*-*-*
// localStorage.setItem("maPetiteCle", "Hello world")

// *-*-*- Pour aller récupérer la valeur d'une clé -*-*-*
// localStorage.getItem("maPetiteCle")

// *-*-*- Pour vider la valeur d'une clé -*-*-*
// localStorage.removeItem("maPetiteCle")

// *-*-*- Pour vider toutes les valeurs de toutes les clés -*-*-*
// localStorage.clear

// 🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐

// ⭐ // // // // // // // Début de l'exercice // // // // // // // // // /🍄

// 🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐🍄⭐

// Déclaration de variables
let form = document.querySelector(".form"),
    nameInput = document.querySelector(".name"),
    avatarInput = document.querySelector(".avatar"),
    button = document.querySelector("button"),
    show = document.querySelector(".showBox"),
    circle = document.querySelector(".circle"),
    back = document.querySelector(".back"),
    userInfo = document.querySelector(".user-info");

// Remplir le formulaire avec les données du local storage s'il y en a
if (localStorage.getItem("name") && localStorage.getItem("avatar")) {
    nameInput.value = localStorage.getItem("name");
    avatarInput.value = localStorage.getItem("avatar");
}

function displayUser() {
    // Vérifier si les champs ne sont pas vides
    if (nameInput.value !== "" && avatarInput.value !== "") {
        form.classList.add("slide_form");
        show.classList.add("slide_box");

        // Injection du contenu en HTML
        circle.style.background = `url(${avatarInput.value}) center / cover`;
        userInfo.innerHTML = `
            <p>Bonjour, ${nameInput.value}.</p>
        `;
        // Enregistrement des données dans le local storage
        localStorage.setItem("name", nameInput.value);
        localStorage.setItem("avatar", avatarInput.value);

        // Réinitialisation des valeurs du formulaire
        nameInput.value = "";
        avatarInput.value = "";
    } else {
        alert("Veuillez remplir tous les champs.");
    }
}

// Évenement sur le bouton "Envoyer"
button.addEventListener("click", function(){
    displayUser()
    nameInput.value = localStorage.getItem("name");
    avatarInput.value = localStorage.getItem("avatar");
});

// Évenement sur le bouton "Retour"
back.addEventListener("click", function(){
    form.classList.remove("slide_form");
    show.classList.remove("slide_box");
});