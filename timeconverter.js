// on définit les variables globales
const secs = document.getElementById('secs') // pointe vers l'input de type nombre 
const reponse = document.getElementById('reponse') // pointe vers la div avec l'id "demo"
// fonction faite maison
function toJHMS(total_secondes) { // prend pour paramètre le nombre total de secondes
    // on définit les variables encapsulées dans la fonction
    let jours = Math.floor(total_secondes / 86400)
    // un jour = 86400s => jours = total/86400 (arrondi)
    let heures = Math.floor((total_secondes - jours * 86400) / 3600)
    // une heure = 3600s => heures = (total - total jours en secondes)/3600 (arrondi)
    let minutes = Math.floor((total_secondes - jours * 86400 - heures * 3600) / 60)
    // minute = 60s => minutes = (total - total jours en secondes - total heures en secondes)/60 (arrondi)
    let secondes = total_secondes % 60
    // secondes = total de secondes modulo 60

    // on renvoit le résultat sous forme de chaine de caractères
    return `${total_secondes} secondes correspond à ${jours} jours ${heures} heures ${minutes} minutes et ${secondes} secondes`
} // fin de la fonction

// DEBUT DU PROGRAMME
secs.addEventListener('change', () => {  // vérifie si l'input a été modifié
    reponse.innerHTML = toJHMS(secs.value) // si oui on écrit le résultat renvoyé par la fonction dans la div qui a comme id "reponse" 
})