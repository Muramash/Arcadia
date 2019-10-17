var lecompte = localStorage.getItem("nvcompte");

var cookies = sessionStorage.getItem("nvcompte");


// alert(lecompte);
// alert(cookies);


function chargerJoueur(data) {
  $("#pseudo").append(data.joueur[0].pseudo);
  $("#location").append(data.joueur[0].location);
  $("#underlocation").append(data.joueur[0].underlocation);
  $("#level").append(data.joueur[0].level);
  $("#text_content").append(data.text-content);
} 