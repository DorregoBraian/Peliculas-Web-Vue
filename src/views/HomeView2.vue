<template>
  <div>
    <main>
      <aside id="presentacion">
        <h2>Peliculas Online</h2>
        <h3>
          Movie Mobile™ es el lugar ideal donde podrás comprar y ver las mejores
          películas online en audio latino, subtitulado y castellano. Disfruta
          de todas las películas de estreno de una manera fácil, rápida y
          sencilla.
        </h3>
      </aside>

      <section id="main-container">
        <section id="peliculas-container">
          <div id="peliculas-container-header">
            <h2>Ultimas Peliculas Añadidas</h2>
            <div id="carrito-container">
              <span class="material-symbols-outlined" id="carrito-icono"
                >shopping_cart</span
              >
              <h3>$<span id="carrito-precio"></span></h3>
            </div>
          </div>
          <hr />
          <section id="card-container">
            <CardPelicula
              v-for="pelicula in peliculasRamdom"
              :key="pelicula.imdbID"
              :titulo="pelicula.Title"
              :img="pelicula.Poster"
              :fecha="pelicula.Year"
            >
            </CardPelicula>
            <div class="btn-paginacion">
              <button @click="obtenerPeliculasRamdom ">Anterior</button>
              <h3>Página 1</h3>
              <button @click="obtenerPeliculasRamdom">Siguiente</button>
            </div>
          </section>
        </section>

        <aside id="top-ventas">
          <h2 id="top-ventas-header">Top ventas</h2>
          <hr />
          <CardTopVentas
            v-for="pelicula in peliculasRamdom"
            :key="pelicula.imdbID"
            :titulo="pelicula.Title"
            :img="pelicula.Poster"
            :fecha="pelicula.Year"
          ></CardTopVentas>
        </aside>
      </section>
    </main>
  </div>
</template>

<script>
import CardPelicula from "@/components/CardPelicula.vue";
import CardTopVentas from "@/components/CardTopVentas.vue";
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  name: "HomeView2",
  props: {},
  components: {
    CardPelicula,
    CardTopVentas,
  },
  computed: {
    ...mapState(["peliculasRamdom"]),
  },
  methods: {
    ...mapActions(["obtenerPeliculasRamdom"]),
  },
  mounted() {
    // Llama a la acción para obtener las películas al cargar la vista
    this.obtenerPeliculasRamdom();
  },
};
</script>

<style scoped>
:root {
  --mainColor: rgba(28, 28, 40, 1);
  --secundaryColor: rgba(37, 37, 55, 1);
  --lightMainColor: rgba(50, 50, 70, 1);
  --shadowColor: rgba(25, 25, 36, 1);
  --hoverColor: rgba(137, 137, 200, 1);
  --doradoColor: rgba(218, 165, 32, 1);
}

#presentacion {
  padding: 2% 3% 2% 3%;
  color: white;
  text-align: center;
  background-color: var(--lightMainColor);
  margin: 1% 2% 2% 2%;
  border-radius: 5px;
}

#presentacion h2 {
  margin-bottom: 2%;
}

#main-container {
  color: white;
  display: grid;
  grid-template-columns: 72% 25%;
  gap: 3%;
  margin: 1% 0% 2% 0%;
  padding: 0% 3% 0% 3%;
}

.main-container-header {
  font-size: 1.2rem;
  color: red;
}

#main-container hr {
  margin: 1% 0% 1% 0%;
}

#peliculas-container-header {
  display: flex;
  justify-content: space-between;
}

#carrito-container {
  display: flex;
  color: white;
  margin-right: 1%;
}

#carrito-icono {
  color: greenyellow;
}

#card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1%;
}

#top-ventas {
  color: whitesmoke;
  margin-top: 0%;
}

#top-ventas hr {
  margin: 0% 0% 5% 0%;
}

#top-ventas h2 {
  font-size: 1.5rem;
  margin: 0% 0% 2.6% 0%;
}
.btn-paginacion {
  margin-top: 5%;
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






