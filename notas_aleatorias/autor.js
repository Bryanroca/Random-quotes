const nombre_autor = document.getElementById('autor')
const nota_primera = document.getElementById('nota_primera')
const nota_segunda = document.getElementById('nota_segunda')
const nota_tercera = document.getElementById('nota_tercera')
const columna_segunda = document.getElementById('columna_segunda')
const columna_tercera = document.getElementById('columna_tercera')
const boton = document.getElementById('boton')
function detallesAutor(){
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('autor');
    fetch(`https://api.quotable.io/quotes?author=${myParam}`)

    .then(function(response) {
      return response.json();
    })
    .then(function(data){
      nombre_autor.innerHTML = myParam
      nota_primera.innerHTML = `"${data.results[0].content},"`
      if(data.results.length == 1){
        console.log('hola_1')
        columna_segunda.style.display = "none"
        columna_tercera.style.display = "none"
      }

      if(data.results.length == 2){
        console.log('hola_1')
        columna_tercera.style.display = "none"
      }

      console.log(data.results)
      nota_segunda.innerHTML = `"${data.results[1].content},"`
      nota_tercera.innerHTML = `"${data.results[2].content},"`
    });
    boton.addEventListener('click', function(){
      window.location.href=`index.html?autor=${autor.innerHTML}`
  
    })
  }

detallesAutor()