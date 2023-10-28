<template>
  <div class="div-conteiner">
    <h1>{{ peli.Title }}</h1>
    <div class="div-conteiner-info">
      <img :src="peli.Poster" alt="Imagen de Pelicula" />

      <div class="div-info-peli">
        <h4>Director: {{ peli.Director }}</h4>
        <h4>Actores: {{ peli.Actors }}</h4>
        <h4>Lenguage: {{ peli.Language }}</h4>
        <h4>Genero: {{ peli.Genre }}</h4>
        <h4>Clasificasion: {{ peli.imdbRating }} / 10 ⭐</h4>
        <h4>Votos: {{ peli.imdbVotes }}</h4>
      </div>

      <div class="div-info-peli">
        <h4>Año: {{ peli.Year }}</h4>
        <h4>Lansamiento: {{ peli.Released }}</h4>
        <h4>Duracion: {{ peli.Runtime }}</h4>
        <h4>Pais: {{ peli.Country }}</h4>
        <h4>Taquillas vendidas: {{ peli.BoxOffice }}</h4>
      </div>
    </div>
    <button @click="agregarAlLocalStorage">Agregar al LocalStorage</button>
    <h3>Sinopsis:</h3>
    <p>{{ peli.Plot }}</p>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  name: "InfoPelicula",
  props: {},
  data() {
    return {

    };
  },
  mounted() {
    this.obtenerPeliculasPorTitulo(this.tituloInfo); // Pasa el título como argumento
  },
  computed: {
    ...mapState(["tituloInfo", "peli"]), // Mapea el título desde Vuex como propiedad computada
  },
  methods: {
    ...mapActions(["obtenerPeliculasPorTitulo"]), // Mapea el método de acción
    
    agregarAlLocalStorage() {
    // Obtenemos las películas guardadas del LocalStorage
    const peliculasGuardadas = JSON.parse(localStorage.getItem('peliculasGuardadas')) || [];

    // Verificamos si la película actual no está ya en la lista
    const peliculaExistente = peliculasGuardadas.find((pelicula) => pelicula.Title === this.peli.Title);
    if (!peliculaExistente) {
      peliculasGuardadas.push(this.peli);

      // Guardamos la lista actualizada en el LocalStorage
      localStorage.setItem('peliculasGuardadas', JSON.stringify(peliculasGuardadas));

      alert('La película ha sido agregada al LocalStorage.');
    } 
    else {
      alert('La película ya está en la lista del LocalStorage.');
    }
  },
  },
};
</script>


<style scoped>
h1{
  text-align: center;
  font-size: 350%;
  color: white;
} 
h3 {
  text-align: center;
  font-size: 250%;
  color: white;
}
h4{
  font-size: 130%;
  color: white;
}
p {
  text-align: start;
  font-size: 150%;
  margin: 2%;
  color: white;
}
button{
  padding: 1%;
  font-size: 80%;
  border: 3px solid var(--hoverColor);
  border-radius: 15%;
  color: white; 
  background: var(--lightMainColor);
}
button:hover{
  background: var(--hoverColor);
}
.div-conteiner {
  padding: 2%;
  margin: 2%;
}

.div-conteiner-info {
  display: flex;
  justify-content: space-around;
  margin: 5% 1% 5% 1%;
  padding: 2%;
  font-size: 120%;
}
.div-info-peli {
  padding: 10% 1% 1% 1%;
}


</style>




