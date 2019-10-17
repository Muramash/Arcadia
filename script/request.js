$.ajax({
  type: "GET",
  url: "./game/db/player_data.json",
  dataType: "json",
  success: chargerJoueur1,
  error: function() {
    alert("Echec du chargement du joueur 1");
  }
});

function chargerJoueur1(data) {
  $("#pseudo1").append(data.joueur[0].pseudo);
  $("#location1").append(data.joueur[0].location);
  $("#underlocation1").append(data.joueur[0].underlocation);
  $("#level1").append(data.joueur[0].level);
  $("#text_content1").append(data.text-content);
} 

$.ajax({
  type: "GET",
  url: "./game/db/player_data.json",
  dataType: "json",
  success: chargerJoueur2,
  error: function() {
    alert("Echec du chargement du joueur 2");
  }
});

function chargerJoueur2(data) {
  $("#pseudo2").append(data.joueur[1].pseudo);
  $("#location2").append(data.joueur[1].location);
  $("#underlocation2").append(data.joueur[1].underlocation);
  $("#level2").append(data.joueur[1].level);
  $("#text_content2").append(data.text-content);
} 

$.ajax({
  type: "GET",
  url: "./game/db/player_data.json",
  dataType: "json",
  success: chargerJoueur3,
  error: function() {
    alert("Echec du chargement du joueur 3");
  }
});

function chargerJoueur3(data) {
  $("#pseudo3").append(data.joueur[2].pseudo);
  $("#location3").append(data.joueur[2].location);
  $("#underlocation3").append(data.joueur[2].underlocation);
  $("#level3").append(data.joueur[2].level);
  $("#text_content3").append(data.text-content);

} 