

document.getElementById("boton_ocultar").addEventListener("click", function(){
    document.getElementById("demo").style.display = "none";
          });

          document.getElementById("boton_mostrar").addEventListener("click", function(){
            document.getElementById("demo").style.display = "block";
                  });
                  
                

                  function myFunction() {
                    var dots = document.getElementById("dots");
                    var moreText = document.getElementById("more");
                    var btnText = document.getElementById("myBtn");
                  
                    if (dots.style.display === "none") {
                      dots.style.display = "inline";
                      btnText.innerHTML = "Leer más";
                      moreText.style.display = "none";
                    } else {
                      dots.style.display = "none";
                      btnText.innerHTML = "Leer menos";
                      moreText.style.display = "inline";
                    }
                  }