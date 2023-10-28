<template>
  <div class="div-conteiner">
    <section class="div-searchview">
      <CardPelicula
        v-for="pelicula in resultadoSearch"
        :key="pelicula.imdbID"
        :titulo="pelicula.Title"
        :img="pelicula.Poster"
        :fecha="pelicula.Year"
      ></CardPelicula>
      <div class="btn-paginacion">
        <button @click="cambiarPagina(- 1)" :disabled="currentPage === 1">Anterior</button>
        <h3>Página {{ currentPage }}</h3>
        <button @click="cambiarPagina(+ 1)">Siguiente</button>
      </div>
    </section>

    <!--punlicidad notas y demas -->
    <aside id="aside">
      <h2>Top ventas</h2>
      <hr />
      <CardTopVentas
        v-for="pelicula in peliculasRamdom"
        :key="pelicula.imdbID"
        :titulo="pelicula.Title"
        :img="pelicula.Poster"
        :fecha="pelicula.Year"
      ></CardTopVentas>
    </aside>
  </div>
</template>

<script>
import CardTopVentas from "@/components/CardTopVentas.vue";
import CardPelicula from "@/components/CardPelicula.vue";
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  name: "SearchView",
  props: {},
  data() {
    return {
      currentPage: 1,
      tituloUrl: this.$route.params.movieTitle,
      
    };
  },
  mounted() {
    // Llama a la acción para obtener las películas al cargar la vista
    this.obtenerPeliculasRamdom();
  },
  components: {
    CardPelicula,
    CardTopVentas,
  },
  computed: {
    ...mapState(["resultadoSearch"]),
    ...mapState(["peliculasRamdom"]),
  },
  methods: {
    ...mapActions(["obtenerPeliculasRamdom"]),

    cambiarPagina(incremento) {
      this.currentPage += incremento;

      // Llama a la acción para obtener películas con el nuevo número de página
      this.obtenerPeliculasSearch();
    },
    obtenerPeliculasSearch() {
      // Llama a la acción Vuex para buscar películas en la API con el término y el número de página
      this.$store.dispatch("obtenerPeliculasSearch", {
        searchPeli: this.tituloUrl,
        numePage: this.currentPage,
      });
    },
  },
};
</script>

<style scoped>
.div-searchview {
  display: flex;
  gap: 1.5%;
  flex-wrap: wrap;
}

.div-conteiner {
  display: grid;
  grid-template-columns: 72% 25%;
  gap: 3%;
  padding: 0% 3% 0% 3%;
  background: rgb(28, 28, 40, 1);
}

#aside {
  color: whitesmoke;
  margin-top: 9%;
}

#aside hr {
  margin: 1% 0% 5% 0%;
}
.btn-paginacion {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}
.btn-paginacion button {
  padding: 1%;
  font-size: 120%;
  border: solid var(--hoverColor);
  border-radius: 15%;
  color: white;
  background: var(--hoverColor);
}
.btn-paginacion h3 {
  font-size: 180%;
}
</style>





