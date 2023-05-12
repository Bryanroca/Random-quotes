const boton = document.getElementById('boton');
const notas = document.getElementById('notas');
const autor = document.getElementById('autor');
const genero = document.getElementById('genero');
const container = document.getElementById('container')

fetch('https://api.quotable.io/random')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    var contenido = data.content;
    var autor_nombre = data.author;
    var genero_tag = data.tags[0];
    notas.innerHTML = `"${contenido},"`;
    autor.innerHTML = autor_nombre;
    genero.innerHTML = genero_tag;
  })
  .catch(function(error) {
    console.error("hay un error");
  });
  
  container.addEventListener('click', function(){
    window.location.href=`autor.html?autor=${autor.innerHTML}`

  })

boton.addEventListener('click', function() {
  fetch('https://api.quotable.io/random')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
    var contenido = data.content;
    var autor_nombre = data.author;
    var genero_tag = data.tags[0];
    notas.innerHTML = `"${contenido},"`;
    autor.innerHTML = autor_nombre;
    genero.innerHTML = genero_tag;
    })
    .catch(function(error) {
      console.error("hay un error");
    });
});