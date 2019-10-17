$(document).ready(function(){
  $("body").css("display", "none");
  $("body").delay(800).fadeIn(1500);
  });


  function newgame()
  {
    $(".butcon").attr("href","#");
    $(".butcon").attr("onclick","");

    $(document).keypress(function(e) {
 /*     if (e.keyCode === 32) {
 $("#passer").delay(100).fadeIn(200); 
        setTimeout(function(){
          window.location.replace("./creation/index.html"); 
        }   ,3000);
        $(document).keyup(function(r){
          if(r.keyCode === 32){
            
          }
        });

      } */
      
      if (e.keyCode === 13) {
       
        setTimeout(function(){
          window.location.replace("./creation/index.html"); 
        }   ,2000);
        $(document).keyup(function(r){
          if(r.keyCode === 32){
            
          }
        }); 
      }
    /*  if (e.keyCode === 27) {
        $("#passer").delay(100).fadeIn(200); 
        setTimeout(function(){
          window.location.replace("./creation/index.html"); 
        }   ,3000);
        $(document).keyup(function(r){
          if(r.keyCode === 32){
            
          }
        });
      } */
    }); 
  
  $("#core").delay(200).fadeOut(1500);
  $("#passer").delay(100).fadeIn(200); 
  var ply = document.getElementById('player');
  var oldSrc = ply.src;
  ply.src = "";
  setTimeout(function(){
    $("body").css("overflow", "hidden");
    $("body").css("background-color", "black"); 
    $(".textanim").append('“Au commencement,<br/><span style="padding-left:100px">les mots et la magie</span><br/> <span style="padding-right:110px">étaient une seule <br/><span style="padding-left:120px">et même chose.”</span></span>');
    var audio = new Audio('./audio/The Legend of Zelda_ Breath of the Wild OST -  Main Theme Extended (192  kbps).mp3');
    audio.play();
    $("#whole").css("display", "inline-block");

  setTimeout(function(){

    $("#main-title").delay(800).fadeOut(1500);
 
    setTimeout(function(){

      $("#main-title").delay(800).fadeIn(1500);

      setTimeout(function(){
        $(".textanim").empty();
        $(".textanim").append('Arcadia, terres de magie <br/><span style="padding-left:100px">et de songes fut ainsi créée,</span><br/><span style="padding-right:110px">soufflée par les </span><br/><span style="padding-left:110px">paroles des Dieux</span> ');
        setTimeout(function(){

          $("#main-title").delay(800).fadeOut(1500);
       
          setTimeout(function(){
      
            $("#main-title").delay(800).fadeIn(1500);
      
            setTimeout(function(){
              $(".textanim").empty();
              $(".textanim").append('La vie prit son cours, <br/><span style="padding-left:100px">Arcadia et sa population</span><br/><span style="padding-right:110px">vinrent au monde.</span><br/><span style="padding-left:110px"> Les choses ne pouvaient</span><br/><span style="padding-right:110px"> aller mieux.</span>');
              setTimeout(function(){

                $("#main-title").delay(800).fadeOut(1500);
             
                setTimeout(function(){
            
                  $("#main-title").delay(800).fadeIn(1500);
            
                  setTimeout(function(){
                    $(".textanim").empty();
                    $(".textanim").append('Cependant, tout cycle doit avoir une fin, <br/><span style="padding-left:100px">et certains mortels</span><br/><span style="padding-right:110px"> perdirent la reconnaissance</span><br/><span style="padding-left:110px"> qu\'ils avaient envers</span><br/><span style="padding-right:110px"> les dieux.</span>');
                    setTimeout(function(){

                      $("#main-title").delay(800).fadeOut(1500);
                   
                      setTimeout(function(){
                  
                        $("#main-title").delay(800).fadeIn(1500);
                  
                        setTimeout(function(){
                          $(".textanim").empty();
                          $(".textanim").append('Des guerres vinrent <br/><span style="padding-left:100px">briser les peuples,</span><br/><span style="padding-right:110px"> les croyances se séparèrent,</span><br/><span style="padding-left:110px"> et ce durant des millénaires.</span>');
                          setTimeout(function(){

                            $("#main-title").delay(800).fadeOut(1500);
                         
                            setTimeout(function(){
                        
                              $("#main-title").delay(800).fadeIn(1500);
                        
                              setTimeout(function(){
                                $(".textanim").empty();
                                $(".textanim").append('Mais un jour, <br/><span style="padding-left:100px">une voix s\'éleva de la foule,</span><br/><span style="padding-right:110px"> brisant les discordes</span><br/><span style="padding-left:110px"> et unifiant les peuples.</span>');
                                setTimeout(function(){

                                  $("#main-title").delay(800).fadeOut(1500);
                               
                                  setTimeout(function(){
                              
                                    $("#main-title").delay(800).fadeIn(1500);
                              
                                    setTimeout(function(){
                                      $(".textanim").empty();
                                      $(".textanim").append('Le monde se souvient d\'un héros, <br/><span style="padding-left:100px">capable de défier les doutes,</span><br/><span style="padding-right:110px"> et d\'unir les pays</span>');
                                      setTimeout(function(){

                                        $("#main-title").delay(800).fadeOut(1500);
                                     
                                        setTimeout(function(){
                                    
                                          $("#main-title").delay(800).fadeIn(1500);
                                    
                                          setTimeout(function(){
                                            $(".textanim").empty();
                                            $(".textanim").append('... Oh, mais je vous reconnais,<br/><span style="padding-left:100px"> on dirait que</span><br/><span style="padding-right:110px"> je suis tombé au bon endroit,</span><br/><span style="padding-left:100px"> jeune héros.</span>');
                                            setTimeout(function(){

                                              $("#main-title").delay(800).fadeOut(1500);
                                           
                                              setTimeout(function(){
                                          
                                                $("#main-title").delay(800).fadeIn(1500);
                                          
                                                setTimeout(function(){
                                                  $(".textanim").empty();
                                                  $(".textanim").append('Apporterez-vous<br/><span style="padding-left:100px"> l\'ombre ou la lumière </span><br/><span style="padding-right:110px">sur ce monde ?</span>');
                                                  setTimeout(function(){

                                                    $("#main-title").delay(800).fadeOut(1500);
                                                 
                                                    setTimeout(function(){
                                                
                                                      $("#main-title").delay(800).fadeIn(1500);
                                                
                                                      setTimeout(function(){
                                                        $(".textanim").empty();
                                                        $(".textanim").append('Je suis curieux <br/><span style="padding-left:100px">de voir quel chemin </span><br/><span style="padding-right:110px">vous allez suivre.</span>');
                                                        setTimeout(function(){

                                                          $("#main-title").delay(800).fadeOut(1500);
                                                       
                                                          setTimeout(function(){
                                                      
                                                            $("#main-title").delay(800).fadeIn(1500);
                                                      
                                                            setTimeout(function(){
                                                              $(".textanim").empty();
                                                              $(".textanim").append('Votre réincarnation ne va pas tarder, <br/><span style="padding-left:100px">et en tant que héros,</span><br/><span style="padding-right:110px"> je vous offre le droit de choisir</span><br/><span style="padding-left:110px"> votre réincarnation.</span>');
                                                              setTimeout(function(){

                                                                $("#main-title").delay(800).fadeOut(1500);
                                                             
                                                                setTimeout(function(){
                                                            
                                                                  $("#main-title").delay(800).fadeIn(1500);
                                                            
                                                                  setTimeout(function(){
                                                                    $(".textanim").empty();
                                                                    $(".textanim").append('Eh, ne me remerciez pas, <br/><span style="padding-left:100px">c\'est la maison qui offre.</span>');
                                                                    setTimeout(function(){

                                                                      $("#main-title").delay(800).fadeOut(1500);
                                                                   
                                                                      setTimeout(function(){
                                                                  
                                                                        $("#main-title").delay(800).fadeIn(1500);
                                                                  
                                                                        setTimeout(function(){
                                                                          $(".textanim").empty();
                                                                          $(".textanim").append('Enfin, trève de plaisanterie. <br/><span style="padding-left:100px">Nos chemins vont se recroiser,</span><br/><span style="padding-right:110px"> en attendant,</span><br/><span style="padding-left:110px"> fais ce qui te semble juste.</span>');
                                                                          setTimeout(function(){

                                                                            $("#main-title").delay(800).fadeOut(1500);
                                                                         
                                                                            setTimeout(function(){
                                                                        
                                                                              $("#main-title").delay(800).fadeIn(1500);
                                                                        
                                                                              setTimeout(function(){
                                                                                $(".textanim").empty();
                                                                                $("#topimg").attr("src","");
                                                                                $("#whole").delay(200).fadeOut(1500);
                                                                                setTimeout(function(){

                                                                                  $("#main-title").delay(800).fadeOut(1500);
                                                                               
                                                                                  setTimeout(function(){
                                                                              
                                                                                    $("#main-title").delay(800).fadeIn(1500);
                                                                              
                                                                                    setTimeout(function(){
                                                                                      $("body").css("background-color", "white"); 
                                                                                      window.location.replace("./creation/index.html"); 
                                                                                    },1000)
                                                                              
                                                                              
                                                                                  }, 1500)
                                                                              
                                                                                }, 5000)
                                                                              },1000)
                                                                        
                                                                        
                                                                            }, 1500)
                                                                        
                                                                          }, 5000)
                                                                        },1000)
                                                                  
                                                                  
                                                                      }, 1500)
                                                                  
                                                                    }, 5000)                                                                               
                                                                  },1000)
                                                            
                                                            
                                                                }, 1500)
                                                            
                                                              }, 5000)
                                                            },1000)
                                                      
                                                      
                                                          }, 1500)
                                                      
                                                        }, 5000)
                                                      },1000)
                                                
                                                
                                                    }, 1500)
                                                
                                                  }, 5000)
                                                },1000)
                                          
                                          
                                              }, 1500)
                                          
                                            }, 5000)
                                          },1000)
                                    
                                    
                                        }, 1500)
                                    
                                      }, 5000)
                                    },1000)
                              
                              
                                  }, 1500)
                              
                                }, 5000)
                              },1000)
                        
                        
                            }, 1500)
                        
                          }, 5000)
                        },1000)
                  
                  
                      }, 1500)
                  
                    }, 5000)
                  },1000)
            
            
                }, 1500)
            
              }, 5000)
            },1000)
      
      
          }, 1500)
      
        }, 5000)
      },1000)


    }, 1500)

  }, 5000)

  } ,1500)
 
  }