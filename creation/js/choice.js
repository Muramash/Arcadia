/* var race = document.querySelector(".butcon");
var log = document.querySelector("#log");

race.addEventListener("submit", function(event) {
  var data = new FormData(form);
  var output = "";
  for (const entry of data) {
    output = entry[0] + "=" + entry[1] + "\r";
  };
  log.innerText = output;
  event.preventDefault();
}, false);

*/


//TODO : Faire le scale 1.1 sur le selected

let race;
let content ="<form id='leform' name='general'>"+

"<input type='radio' name='classchoice' class='hideradio' id='classchoice-1' value='guerrier'/>"+
"<span class='total'><label class='imgradio' for='classchoice-1'><img class='classgame' src='./svg/guerrier.svg' alt='guerrier' id='guerrier'/></label>"+
"<span class='caption'>Guerrier<br/>Puissants combattants au corps à corps,<br/> les guerriers sont réputés pour leur maîtrise des armes. <br/>Les guerriers sont des aventuriers au coeur rempli d'honneur<br/> Devient un Gladiateur.</span></span>"+

"<input type='radio' name='classchoice' class='hideradio' id='classchoice-2' value='chasseur'/>"+
"<span class='total'><label class='imgradio' for='classchoice-2'><img class='classgame' src='./svg/chasseur.svg' alt='chasseur' id='chasseur'/></label>"+
"<span class='caption'>Chasseur<br/>Les chasseurs sont maître dans les armes à distance,<br/> ils savent détecter et poser de puissants pièges,<br/> et ont une connaissance accrue de la nature.<br/> Devient un Trappeur.</span></span>"+

"<input type='radio' name='classchoice' class='hideradio' id='classchoice-3' value='mage'/>"+
"<span class='total'><label class='imgradio' for='classchoice-3'><img class='classgame' src='./svg/mage.svg' alt='mage' id='mage'/></label>"+
"<span class='caption'>Mage<br/>La maîtrise de la magie est une chose habituelle à Arcadia,<br/>Les mages apprennent tout type de sort,<br/>transformant la mana pure en éléments.<br/>Devient Archimage.</span></span>"+

"<input type='radio' name='classchoice' class='hideradio' id='classchoice-4' value='paladin'/>"+
"<span class='total'><label class='imgradio' for='classchoice-4'><img class='classgame' src='./svg/paladin.svg' alt='paladin' id='paladin'/></label>"+
"<span class='caption'>Paladin<br/>Messagers de la Lumière, les paladins sont réputés <br/>pour leur maîtrise de la Lumière et des armes.<br/>Les paladins sont très polyvalents de ce fait.<br/>Devient un Exarque.</span></span>"+

"<input type='radio' name='classchoice' class='hideradio' id='classchoice-5' value='druide'/>"+
"<span class='total'><label class='imgradio' for='classchoice-5'><img class='classgame' src='./svg/druide.svg' alt='druide' id='druide'/></label>"+
"<span class='caption'>Druide<br/>Les druides sont la voix de la Nature,<br/>ils parlent et communiquent avec les plantes et les animaux,<br/>afin de la protéger et de répendre la parole de Terre-Mère<br/>Devient un Archidruide.</span></span>"+

"<input type='radio' name='classchoice' class='hideradio' id='classchoice-6' value='pretre'/>"+
"<span class='total'><label class='imgradio' for='classchoice-6'><img class='classgame' src='./svg/pretre.svg' alt='pretre' id='pretre'/></label>"+
"<span class='caption'>Prêtre<br/>Les prêtres sont fidèle à leur religion, peu importe son origine,<br/>ils utilisent les pouvoirs que les déités leurs offre<br/>pour protéger leurs idéaux.<br/>Devient un Evêque.</span></span>"+

"<input type='radio' name='classchoice' class='hideradio' id='classchoice-7' value='commerce'/>"+
"<span class='total'><label class='imgradio' for='classchoice-7'><img class='classgame' src='./svg/commerce.svg' alt='commerce' id='commerce'/></label>"+
"<span class='caption'>Commerçant<br/>De véritables orateurs, les commerçants préfèrent<br/> résoudrent les problèmes par l'éloquence.<br/> Ils ont accès à de nombreux objets utiles pour leurs voyages.<br/>Devient un Marchand.</span></span>"+

"<input type='radio' name='classchoice' class='hideradio' id='classchoice-8' value='occultiste'/>"+
"<span class='total'><label class='imgradio' for='classchoice-8'><img class='classgame' src='./svg/occultiste.svg' alt='occultiste' id='occultiste'/></label>"+
"<span class='caption'>Occultiste<br/>Adeptes de l'Ombre, l'occultiste capte les<br/> énergies sombres pour les soumettre à sa volonté.<br/>Ils entendent les voix du Néant et utilisent leurs pouvoirs.<br/>Devient un Sorcier.</span></span>"+

"<input type='radio' name='classchoice' class='hideradio' id='classchoice-9' value='voleur'/>"+
"<span class='total'><label class='imgradio' for='classchoice-9'><img class='classgame' src='./svg/voleur.svg' alt='voleur' id='voleur'/></label><br/>"+
"<span class='caption'>Voleur<br/>La furtivité et la discrétion sont les atouts majeures du voleur<br/>le voleur peut tout aussi bien être bon ou mauvais.<br/>Son seul chemin forgé par la force de sa volonté.<br/>Devient un Assassin.</span></span>"+

"<br/>"+
"<div class='basecenter'>"+
"<input type='text' id='nom' name='nom' placeholder='Nom du personnage'><br/>"+
"<br/>"+
"<div id='lesexe'></div>"+
"Slot de sauvegarde : <select name='slot' id='slot'>"+
"<option value='1'>1</option>"+
"<option value='2'>2</option>"+
"<option value='3'>3</option>"+
"</select><br/>"+
"<input class='push_button colorized' type='submit' value='Créer' onclick='newPerso()'>"+
"</div>"+
"</form>";


$("#choice").append(content);


$( ".classgame" ).click(function() {
  if($(this).hasClass("disabled")){

}
else{
  $(".classgame").removeClass("activated")
  $( this ).addClass( "activated" );
}
});

function getRace (obj)
{
  if (obj.href)
  tab = obj.href.split("race=")
  document.getElementById("dialog-title").innerHTML=tab[1];
  document.getElementById("dialog-title").value=tab[1];
  race = tab[1];

  if(race == "Alra"){
    document.getElementById('lesexe').innerHTML = "";
    $("#lesexe").append("<p>Femme</p><input type='hidden' id='sexe' name='sexe' value='femme'/>")
  }
  else if(race == "Akirien"){
    document.getElementById('lesexe').innerHTML = "";
    $("#lesexe").append("<p>Homme</p><input type='hidden' id='sexe' name='sexe' value='homme'/>")
  }
  else{
    document.getElementById('lesexe').innerHTML = "";
    $("#lesexe").append("<label for='homme'>Homme</label> <input id='sexe1' value='homme' class='radiobutton' name='sexe' type='radio'> "+
    "<label for='femme'>Femme</label> <input id='sexe2' value='femme' class='radiobutton' name='sexe' type='radio'><br/>");
  }

  switch (race) {
case "Carmien" :

      $('#leform')[0].reset();
      $(".classgame").removeClass("activated")

      $( "#mage" ).last().addClass( "disabled" );
      $( "#druide" ).last().addClass( "disabled" );
      $( "#occultiste" ).last().addClass( "disabled" );
      $( "#voleur" ).last().addClass( "disabled" );

      $("#classchoice-3").attr("disabled", 'true');
      $("#classchoice-5").attr("disabled", 'true');
      $("#classchoice-8").attr("disabled", 'true');
      $("#classchoice-9").attr("disabled", 'true');
      
      $( "#guerrier" ).removeClass( "disabled" );
      $( "#chasseur" ).removeClass( "disabled" );
      $( "#paladin" ).removeClass( "disabled" );
      $( "#pretre" ).removeClass( "disabled" );
      $( "#commerce" ).removeClass( "disabled" );

      $("#classchoice-1").removeAttr("disabled");
      $("#classchoice-2").removeAttr("disabled");
      $("#classchoice-4").removeAttr("disabled");
      $("#classchoice-6").removeAttr("disabled");
      $("#classchoice-7").removeAttr("disabled");
      break;

case "Dalmana" :

      $('#leform')[0].reset();
      $(".classgame").removeClass("activated")

      $( "#paladin" ).last().addClass( "disabled" );
      $( "#druide" ).last().addClass( "disabled" );
      $( "#pretre" ).last().addClass( "disabled" );
      $( "#occultiste" ).last().addClass( "disabled" );

      $("#classchoice-4").attr("disabled", 'true');
      $("#classchoice-5").attr("disabled", 'true');
      $("#classchoice-6").attr("disabled", 'true');
      $("#classchoice-8").attr("disabled", 'true');

      $( "#guerrier" ).removeClass( "disabled" );
      $( "#chasseur" ).removeClass( "disabled" );
      $( "#mage" ).removeClass( "disabled" );
      $( "#commerce" ).removeClass( "disabled" );
      $( "#voleur" ).removeClass( "disabled" );

      $("#classchoice-1").removeAttr("disabled");
      $("#classchoice-2").removeAttr("disabled");
      $("#classchoice-3").removeAttr("disabled");
      $("#classchoice-9").removeAttr("disabled");
      $("#classchoice-7").removeAttr("disabled");
      break;

case "Arcadien" :

      $('#leform')[0].reset();
      $(".classgame").removeClass("activated")

      $( "#chasseur" ).last().addClass( "disabled" );
      $( "#druide" ).last().addClass( "disabled" );
      $( "#occultiste" ).last().addClass( "disabled" );
      $( "#voleur" ).last().addClass( "disabled" );

      $("#classchoice-2").attr("disabled", 'true');
      $("#classchoice-5").attr("disabled", 'true');
      $("#classchoice-8").attr("disabled", 'true');
      $("#classchoice-9").attr("disabled", 'true');

      $( "#guerrier" ).removeClass( "disabled" );
      $( "#mage" ).removeClass( "disabled" );
      $( "#paladin" ).removeClass( "disabled" );
      $( "#pretre" ).removeClass( "disabled" );
      $( "#commerce" ).removeClass( "disabled" );

      $("#classchoice-1").removeAttr("disabled");
      $("#classchoice-3").removeAttr("disabled");
      $("#classchoice-4").removeAttr("disabled");
      $("#classchoice-6").removeAttr("disabled");
      $("#classchoice-7").removeAttr("disabled");
      break;

case "Vatarien" :

      $('#leform')[0].reset();
      $(".classgame").removeClass("activated")

      $( "#mage" ).last().addClass( "disabled" );
      $( "#paladin" ).last().addClass( "disabled" );
      $( "#pretre" ).last().addClass( "disabled" );
      $( "#occultiste" ).last().addClass( "disabled" );

      $("#classchoice-3").attr("disabled", 'true');
      $("#classchoice-4").attr("disabled", 'true');
      $("#classchoice-6").attr("disabled", 'true');
      $("#classchoice-8").attr("disabled", 'true');

      $( "#guerrier" ).removeClass( "disabled" );
      $( "#chasseur" ).removeClass( "disabled" );
      $( "#druide" ).removeClass( "disabled" );
      $( "#commerce" ).removeClass( "disabled" );
      $( "#voleur" ).removeClass( "disabled" );

      $("#classchoice-1").removeAttr("disabled");
      $("#classchoice-2").removeAttr("disabled");
      $("#classchoice-9").removeAttr("disabled");
      $("#classchoice-5").removeAttr("disabled");
      $("#classchoice-7").removeAttr("disabled");
      break;

case "Alra":

      $('#leform')[0].reset();
      $(".classgame").removeClass("activated")

      $( "#guerrier" ).last().addClass( "disabled" );
      $( "#mage" ).last().addClass( "disabled" );
      $( "#paladin" ).last().addClass( "disabled" );
      $( "#commerce" ).last().addClass( "disabled" );

      $("#classchoice-1").attr("disabled", 'true');
      $("#classchoice-3").attr("disabled", 'true');
      $("#classchoice-4").attr("disabled", 'true');
      $("#classchoice-7").attr("disabled", 'true');

      $( "#chasseur" ).removeClass( "disabled" );
      $( "#druide" ).removeClass( "disabled" );
      $( "#pretre" ).removeClass( "disabled" );
      $( "#occultiste" ).removeClass( "disabled" );
      $( "#voleur" ).removeClass( "disabled" );

      $("#classchoice-2").removeAttr("disabled");
      $("#classchoice-5").removeAttr("disabled");
      $("#classchoice-6").removeAttr("disabled");
      $("#classchoice-8").removeAttr("disabled");
      $("#classchoice-9").removeAttr("disabled");
      break;

case "Akirien" :

      $('#leform')[0].reset();
      $(".classgame").removeClass("activated")

      $( "#druide" ).last().addClass( "disabled" );
      $( "#commerce" ).last().addClass( "disabled" );
      $( "#occultiste" ).last().addClass( "disabled" );
      $( "#voleur" ).last().addClass( "disabled" );

      $("#classchoice-5").attr("disabled", 'true');
      $("#classchoice-7").attr("disabled", 'true');
      $("#classchoice-8").attr("disabled", 'true');
      $("#classchoice-9").attr("disabled", 'true');

      $( "#guerrier" ).removeClass( "disabled" );
      $( "#chasseur" ).removeClass( "disabled" );
      $( "#mage" ).removeClass( "disabled" );
      $( "#paladin" ).removeClass( "disabled" );
      $( "#pretre" ).removeClass( "disabled" );

      $("#classchoice-1").removeAttr("disabled");
      $("#classchoice-2").removeAttr("disabled");
      $("#classchoice-3").removeAttr("disabled");
      $("#classchoice-4").removeAttr("disabled");
      $("#classchoice-6").removeAttr("disabled");
      break;

case "Ebens" :

      $('#leform')[0].reset();
      $(".classgame").removeClass("activated")

      $( "#chasseur" ).last().addClass( "disabled" );
      $( "#paladin" ).last().addClass( "disabled" );
      $( "#druide" ).last().addClass( "disabled" );
      $( "#commerce" ).last().addClass( "disabled" );

      $("#classchoice-2").attr("disabled", 'true');
      $("#classchoice-4").attr("disabled", 'true');
      $("#classchoice-5").attr("disabled", 'true');
      $("#classchoice-7").attr("disabled", 'true');

      $( "#guerrier" ).removeClass( "disabled" );
      $( "#mage" ).removeClass( "disabled" );
      $( "#pretre" ).removeClass( "disabled" );
      $( "#occultiste" ).removeClass( "disabled" );
      $( "#voleur" ).removeClass( "disabled" );

      $("#classchoice-1").removeAttr("disabled");
      $("#classchoice-3").removeAttr("disabled");
      $("#classchoice-6").removeAttr("disabled");
      $("#classchoice-8").removeAttr("disabled");
      $("#classchoice-9").removeAttr("disabled");
      break;

case "Va'tani" :

      $('#leform')[0].reset();
      $(".classgame").removeClass("activated")

      $( "#guerrier" ).last().addClass( "disabled" );
      $( "#mage" ).last().addClass( "disabled" );
      $( "#paladin" ).last().addClass( "disabled" );
      $( "#pretre" ).last().addClass( "disabled" );
            
      $("#classchoice-1").attr("disabled", 'true');
      $("#classchoice-3").attr("disabled", 'true');
      $("#classchoice-4").attr("disabled", 'true');
      $("#classchoice-6").attr("disabled", 'true');

      $( "#chasseur" ).removeClass( "disabled" );
      $( "#druide" ).removeClass( "disabled" );
      $( "#commerce" ).removeClass( "disabled" );
      $( "#occultiste" ).removeClass( "disabled" );
      $( "#voleur" ).removeClass( "disabled" );

      $("#classchoice-2").removeAttr("disabled");
      $("#classchoice-5").removeAttr("disabled");
      $("#classchoice-7").removeAttr("disabled");
      $("#classchoice-8").removeAttr("disabled");
      $("#classchoice-9").removeAttr("disabled");
      break;
  }

}


function newPerso(){

  var slot = document.getElementById("slot").value;
  var name = document.getElementById("nom").value;
  var race = document.getElementById("dialog-title").value;
  
  if(race == "Akirien" || race == "Alra"){
    var sexe = document.getElementById('sexe').value;
	} else if(document.getElementById('sexe2').checked) {
		var sexe = document.getElementById('sexe2').value;
  }
  else if(document.getElementById('sexe1').checked){
    var sexe = document.getElementById('sexe1').value;
  }

  if(document.getElementById('classchoice-1').checked) {
  var classe = document.getElementById('classchoice-1').value;
}
else if(document.getElementById('classchoice-2').checked){
  var classe = document.getElementById('classchoice-2').value;
}
else if(document.getElementById('classchoice-3').checked){
  var classe = document.getElementById('classchoice-3').value;
}
else if(document.getElementById('classchoice-4').checked){
  var classe = document.getElementById('classchoice-4').value;
}
else if(document.getElementById('classchoice-5').checked){
  var classe = document.getElementById('classchoice-5').value;
}
else if(document.getElementById('classchoice-6').checked){
  var classe = document.getElementById('classchoice-6').value;
}
else if(document.getElementById('classchoice-7').checked){
  var classe = document.getElementById('classchoice-7').value;
}
else if(document.getElementById('classchoice-8').checked){
  var classe = document.getElementById('classchoice-8').value;
}
else if(document.getElementById('classchoice-9').checked){
  var classe = document.getElementById('classchoice-9').value;
}

var nvperso = [];
nvperso.push (slot);
nvperso.push (name);
nvperso.push (race);
nvperso.push (classe);
nvperso.push (sexe);

let parsed = JSON.stringify(nvperso);
localStorage.setItem ("nvcompte", parsed);
sessionStorage.setItem("nvcompte", parsed);

var lecompte = localStorage.getItem("nvcompte");

window.location.replace("./../game/game.html"); 

var cookies = sessionStorage.getItem("nvcompte");
alert(lecompte);
alert(cookies);
}
