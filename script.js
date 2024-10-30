// On crée un tapis de jeu
let plateau = document.createElement('div')
plateau.classList.add('tapis')
document.body.appendChild(plateau)

// On crée une carte de dame de coeur
let carte1 = new Image()
carte1.src = "https://renardeau.ch/cours/img/cartej/dosr.png"
plateau.appendChild(carte1)        
carte1.onclick = function() {
  alert("Tu as cliqué !!!")          
}

// On crée une carte de dame de coeur
let carte2 = new Image()
carte2.src = "https://renardeau.ch/cours/img/cartej/36.png"
plateau.appendChild(carte2)        
carte2.onclick = function() {
  alert("Tu as cliqué !!!")          
}

// On crée une carte de dame de coeur
let carte3 = new Image()
carte3.src = "https://renardeau.ch/cours/img/cartej/25.png"
plateau.appendChild(carte3)        
carte3.onclick = function() {
  alert("Tu as cliqué !!!")          
}
