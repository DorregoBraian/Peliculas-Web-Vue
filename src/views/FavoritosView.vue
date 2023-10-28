<template>
  <div class="div-conteiner-favoritos">
    <h2>Películas Guardadas</h2>
    <div class="div-card-favoritos">
      <CardPelicula
        v-for="pelicula in peliculasGuardadas"
        :key="pelicula.imdbID"
        :titulo="pelicula.Title"
        :img="pelicula.Poster"
        :fecha="pelicula.Year"
      >
      </CardPelicula>
    </div>
  </div>
</template>


<script>
import CardPelicula from "@/components/CardPelicula.vue";
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  name: "Favoritos",
  props: {},
  data() {
    return {
      peliculasGuardadas: [],
    };
  },
  created() {
    const data = localStorage.getItem("peliculasGuardadas");
    this.peliculasGuardadas = data ? JSON.parse(data) : [];
  },
  components: {
    CardPelicula
  },
};
</script>


<style scoped>
.div-conteiner-favoritos h2{
    text-align: center;
    font-size: 250%;
    margin: 5%;
}
.div-card-favoritos{
    display: flex;
    margin: 5% 2% 2% 2%;
}
</style>