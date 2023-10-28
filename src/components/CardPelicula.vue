<template>
  <router-link to="/info-pelicula" @click="guardarTitulo">
    <article class="card-pelicula">
      <img :src="img" alt="" />
      <div class="card-pelicula-info">
        <h2>{{ titulo }}</h2>
        <div class="card-pelicula-info-detalle">
          <div class="card-pelicula-info-detalle-rate">
            <span class="material-symbols-outlined">star_rate</span>
            <h2>5.3/10</h2>
          </div>
          <h2>20 USD</h2>
        </div>
      </div>
    </article>
  </router-link>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  name: "CardPelicula",
  props: {
    titulo: String,
    img: String,
    fecha: String,
  },
  methods: {
    ...mapMutations(["setTituloInfo"]), // Mapea la mutación de Vuex
    guardarTitulo() {
      this.setTituloInfo(this.titulo); // Llama a la mutación para establecer el título en Vuex
    },
  },
};
</script>

<style scoped>
router-link {
  display: block; /* Hacer que el enlace sea un bloque para ocupar todo el ancho disponible */
  text-decoration: none; /* Evitar subrayado en el enlace (puede variar según tus necesidades) */
}
.card-pelicula {
  background-color: var(--secundaryColor);
  max-width: 80%;
  margin: 2%;
  padding: 2%;
  color: white;
  text-align: center;
  align-items: center;
  font-size: 0.8rem;
  transition: 0.5s;
}

.card-pelicula:hover {
  transform: scale(1.1);
  background-color: var(--hoverColor);
}

.card-pelicula img {
  max-width: 100%;
}

.card-pelicula-info-detalle {
  display: flex;
  justify-content: space-between;
  padding: 0% 2% 0% 2%;
  margin: 5% 0% 0% 0%;
}

.card-pelicula-info-detalle-rate {
  display: flex;
  gap: 3%;
  align-items: center;
}

.card-pelicula .material-symbols-outlined {
  /*Estrellita de puntaje*/
  color: var(--doradoColor);
}
</style>