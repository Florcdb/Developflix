import peliculas from './peliculas.js';




//const generos = document.querySelectorAll(".genero-container");
const contenedor = document.querySelectorAll(".genero")
const generos = ["genero-28", "genero-53", "genero-12"];
const action = document.getElementById ("genero-28");
const thrilling = document.getElementById("genero-53")
const adventure = document.getElementById("genero-12")


document.addEventListener("DOMContentLoaded", function (){
   for (let i=0; i < peliculas.length; i ++) {
      console.log(peliculas[i].genre_ids);   
   }
})

const peliculaElemento = document.getElementById("genero-28")
const peliculasAccion = peliculas.filter(pelicula => pelicula.genre_ids.includes(28));
peliculaElemento.innerHTML= "<img src= https://image.tmdb.org/t/p/w200/qXChf7MFL36BgoLkiB3BzXiwW82.jpg>";
peliculaElemento.innerHTML="<img src= https://image.tmdb.org/t/p/w200/ljl70pjLIX1hx3bPyCCbxGj6WPr.jpg>";
peliculaElemento.innerHTML="<img src= https://image.tmdb.org/t/p/w200/fiVW06jE7z9YnO4trhaMEdclSiC.jpg>";
peliculaElemento.innerHTML="<img src= https://image.tmdb.org/t/p/w200/b0Ej6fnXAP8fK75hlyi2jKqdhHz.jpg>";
peliculaElemento.innerHTML="<img src= https://image.tmdb.org/t/p/w200/51tqzRtKMMZEYUpSYkrUE7v9ehm.jpg";
peliculaElemento.innerHTML="<img src= https://image.tmdb.org/t/p/w500/iwsMu0ehRPbtaSxqiaUDQB9qMWT.jpg>";
peliculaElemento.innerHTML="<img src= https://image.tmdb.org/t/p/w500/NNxYkU70HPurnNCSiCjYAmacwm.jpg>";
peliculaElemento.innerHTML="<img src= https://image.tmdb.org/t/p/w500/qA5kPYZA7FkVvqcEfJRoOy4kpHg.jpg>";
peliculaElemento.innerHTML="<img src= https://image.tmdb.org/t/p/w500/tPyj6Gii1HrnzCbJXEF7JdSFkQ8.jpg>";
peliculaElemento.innerHTML="<img src= https://image.tmdb.org/t/p/w500/yNySAgpAnWmPpYinim9E0tUzJWG.jpg";
peliculaElemento.innerHTML="<img src= https://image.tmdb.org/t/p/w500/ssEFC5wfFjj7lJpUgwJDOK1Xu1J.jpg>";
peliculaElemento.innerHTML="<img src= https://image.tmdb.org/t/p/w500/mXLOHHc1Zeuwsl4xYKjKh2280oL.jpg>";
peliculaElemento.innerHTML="<img src= https://image.tmdb.org/t/p/w500/aTvePCU7exLepwg5hWySjwxojQK.jpg>";
peliculaElemento.innerHTML="<img src= https://image.tmdb.org/t/p/w500/a9bt9byTQ1MIfRWYQX240HiYPrl.jpg>";
peliculaElemento.innerHTML="<img src= https://image.tmdb.org/t/p/w500/gPbM0MK8CP8A174rmUwGsADNYKD.jpg>";
peliculaElemento.innerHTML="<img src= https://image.tmdb.org/t/p/w500/r08U3dwiOeStXcjYmfnRyumgKyq.jpg>";
peliculaElemento.innerHTML="<img src= https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg>";
peliculaElemento.innerHTML="<img src= https://image.tmdb.org/t/p/w500/kt9nqD0uOar8IVE9191HXhWOXKI.jpg>";
peliculaElemento.innerHTML="<img src= https://image.tmdb.org/t/p/w500/ozkZ8TeIRwzNH2zF5LFS39M3v5U.jpg>";

const genero28Contenedor = document.getElementById("genero-28");

const imagenesAccion = peliculas.map(pelicula => `
  <img src="https://image.tmdb.org/t/p/w500${pelicula.poster_path}" alt="Póster de la película">
`).join("");

genero28Contenedor.innerHTML = imagenesAccion;


const peliculaElementoT = document.getElementById("genero-53");
const peliculasThriller = peliculas.filter(pelicula => pelicula.genre_ids.includes(53));
peliculaElementoT.innerHTML= "<img src= https://image.tmdb.org/t/p/w200/qXChf7MFL36BgoLkiB3BzXiwW82.jpg>";
peliculaElementoT.innerHTML="<img src= https://image.tmdb.org/t/p/w200/ljl70pjLIX1hx3bPyCCbxGj6WPr.jpg>";
peliculaElementoT.innerHTML="<img src= https://image.tmdb.org/t/p/w200/fiVW06jE7z9YnO4trhaMEdclSiC.jpg>";
peliculaElementoT.innerHTML="<img src= https://image.tmdb.org/t/p/w200/b0Ej6fnXAP8fK75hlyi2jKqdhHz.jpg>";
peliculaElementoT.innerHTML="<img src= https://image.tmdb.org/t/p/w500/iwsMu0ehRPbtaSxqiaUDQB9qMWT.jpg>";
peliculaElementoT.innerHTML="<img src= https://image.tmdb.org/t/p/w500/NNxYkU70HPurnNCSiCjYAmacwm.jpg>";
peliculaElementoT.innerHTML="<img src= https://image.tmdb.org/t/p/w500/yNySAgpAnWmPpYinim9E0tUzJWG.jpg";
peliculaElementoT.innerHTML="<img src= https://image.tmdb.org/t/p/w500/gPbM0MK8CP8A174rmUwGsADNYKD.jpg>";
peliculaElementoT.innerHTML="<img src= https://image.tmdb.org/t/p/w500/kt9nqD0uOar8IVE9191HXhWOXKI.jpg>";
peliculaElementoT.innerHTML="<img src= https://image.tmdb.org/t/p/w500/ozkZ8TeIRwzNH2zF5LFS39M3v5U.jpg>";

const genero53Contenedor = document.getElementById("genero-53");
peliculaElementoT.innerHTML = peliculasThriller.map(pelicula => `
  <img src="https://image.tmdb.org/t/p/w500${pelicula.poster_path}" alt="Póster de la película">
`).join("");




const peliculaElementoA = document.getElementById("genero-12")
const peliculasAventura = peliculas.filter(pelicula => pelicula.genre_ids.includes(12));
peliculaElementoA.innerHTML="<img src= https://image.tmdb.org/t/p/w200/51tqzRtKMMZEYUpSYkrUE7v9ehm.jpg";
peliculaElementoA.innerHTML="<img src= https://image.tmdb.org/t/p/w500/iwsMu0ehRPbtaSxqiaUDQB9qMWT.jpg>";
peliculaElementoA.innerHTML="<img src= https://image.tmdb.org/t/p/w500/mXLOHHc1Zeuwsl4xYKjKh2280oL.jpg>";
peliculaElementoA.innerHTML="<img src= https://image.tmdb.org/t/p/w500/gPbM0MK8CP8A174rmUwGsADNYKD.jpg>";
peliculaElementoA.innerHTML="<img src= https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg>";
peliculaElementoA.innerHTML="<img src= https://image.tmdb.org/t/p/w500/kt9nqD0uOar8IVE9191HXhWOXKI.jpg>";
peliculaElementoA.innerHTML="<img src= https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg>";

const genero12Contenedor = document.getElementById("genero-12");
peliculaElementoA.innerHTML = peliculasAventura.map(pelicula => `
  <img src="https://image.tmdb.org/t/p/w500${pelicula.poster_path}" alt="Póster de la película">`).join("");



function mostrarPeliculasPorGenero(generoId, contenedorId) {
    const peliculasPorGenero = peliculas.filter(pelicula => pelicula.genre_ids.includes(generoId));
    peliculasPorGenero.forEach(pelicula => agregarPeliculaAlContenedor(pelicula,contenedorId));
      console.log(mostrarPeliculasPorGenero);
}



