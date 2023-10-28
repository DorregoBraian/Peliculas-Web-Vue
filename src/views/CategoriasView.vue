<template>
  <div>
    <main id="main">
      <section id="main-peliculas">

        <section class="contenedor-categoria">
          <div class="icono_de_genero">
            <h3 id="terror">Terror</h3>
            <img
              src="@/assets/IconosGenero/Terror/icono1.png"
              alt="Icono de Terror"
            />
          </div>
          <hr />
          <section class="lista_pelicula" id="terror">
            <CardPelicula
              v-for="pelicula in $store.state.peliculasPorGenero['terror']"
              :key="pelicula.imdbID"
              :titulo="pelicula.Title"
              :img="pelicula.Poster"
              :fecha="pelicula.Year"
            ></CardPelicula>
          </section>
        </section>

        <section class="contenedor-categoria">
          <div class="icono_de_genero">
            <h3 id="super heroes">Super Heroes</h3>
            <img
              src="@/assets/IconosGenero/SuperHeroes/superhero1.png"
              alt="Icono de Super Heroes"
            />
          </div>
          <hr />
          <section class="lista_pelicula" id="super heroes">
            <CardPelicula
              v-for="pelicula in $store.state.peliculasPorGenero['super heroes']"
              :key="pelicula.imdbID"
              :titulo="pelicula.Title"
              :img="pelicula.Poster"
              :fecha="pelicula.Year"
            ></CardPelicula>
          </section>
        </section>

        <section class="contenedor-categoria">
          <div class="icono_de_genero">
            <h3 id="ciencia ficcion">Aventura</h3>
            <img
              src="@/assets/IconosGenero/CienciaFiccion/cienciaficcion1.png"
            />
          </div>
          <hr />
          <section class="lista_pelicula" id="aventura">
            <CardPelicula
              v-for="pelicula in $store.state.peliculasPorGenero['aventura']"
              :key="pelicula.imdbID"
              :titulo="pelicula.Title"
              :img="pelicula.Poster"
              :fecha="pelicula.Year"
            ></CardPelicula>
          </section>
        </section>

        <section class="contenedor-categoria">
          <div class="icono_de_genero">
            <h3 id="comedia">Comedia</h3>
            <img
              src="@/assets/IconosGenero/Comedia/comedia1.png"
              alt="Icono de Super Comedia"
            />
          </div>
          <hr />
          <section class="lista_pelicula" id="comedia">
            <CardPelicula
              v-for="pelicula in $store.state.peliculasPorGenero['comedia']"
              :key="pelicula.imdbID"
              :titulo="pelicula.Title"
              :img="pelicula.Poster"
              :fecha="pelicula.Year"
            ></CardPelicula>
          </section>
        </section>

        <section class="contenedor-categoria">
          <div class="icono_de_genero">
            <h3 id="accion">Accion</h3>
            <img
              src="@/assets/IconosGenero/Accion/accion1.png"
              alt="Icono de Accion"
            />
          </div>
          <hr />
          <section class="lista_pelicula" id="accion">
            <CardPelicula
              v-for="pelicula in $store.state.peliculasPorGenero['accion']"
              :key="pelicula.imdbID"
              :titulo="pelicula.Title"
              :img="pelicula.Poster"
              :fecha="pelicula.Year"
            ></CardPelicula>
          </section>
        </section>

        <section class="contenedor-categoria">
          <div class="icono_de_genero">
            <h3 id="romance">Romance</h3>
            <img
              src="@/assets/IconosGenero/Romance/romance3.png"
              alt="Icono de Romance"
            />
          </div>
          <hr />
          <section class="lista_pelicula" id="romance">
            <CardPelicula
              v-for="pelicula in $store.state.peliculasPorGenero['romance']"
              :key="pelicula.imdbID"
              :titulo="pelicula.Title"
              :img="pelicula.Poster"
              :fecha="pelicula.Year"
            ></CardPelicula>
          </section>
        </section>
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
    </main>
  </div>
</template>

<script>
import CardTopVentas from "@/components/CardTopVentas.vue";
import CardPelicula from "@/components/CardPelicula.vue";
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  name: "CategoriasView",
  props: {},
  data() {
    return {
      
    };
  },
  mounted() {
    // Llama a la acción para obtener las películas al cargar la vista
    this.obtenerPeliculasRamdom();
    this.obtenerPeliculasPorGenero("terror");
    this.obtenerPeliculasPorGenero("super heroes");
    this.obtenerPeliculasPorGenero("aventura");
    this.obtenerPeliculasPorGenero("comedia");
    this.obtenerPeliculasPorGenero("accion");
    this.obtenerPeliculasPorGenero("romance");

  },
  components: {
    CardPelicula,
    CardTopVentas,
  },
  computed: {
    ...mapState(["peliculasRamdom", "peliculasGenero"]),
  },
  methods: {
    ...mapActions(["obtenerPeliculasRamdom", "obtenerPeliculasPorGenero"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#main {
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

.card-topVentas {
  display: flex;
  color: white;
  margin: 1% 0% 2% 0%;
  padding: 3% 3% 3% 3%;
  background-color: rgba(37, 37, 55, 1);
  border-radius: 15px;
  transition: 0.5s;
}

.card-topVentas img {
  max-width: 20%;
  max-height: 20%;
  border-radius: 5px;
}

.card-topVentas:hover {
  background-color: rgb(51, 51, 75);
}

.card-topVentas-info {
  margin: 1% 1% 0% 5%;
}

.icono_de_genero {
  display: flex;
  align-items: center;
}

.icono_de_genero h3 {
  font-size: 170%;
  color: white;
  margin-left: 1%;
}

.icono_de_genero img {
  max-width: 5%;
  max-height: 2%;
  margin: 1%;
}

#main-peliculas {
  color: whitesmoke;
  margin-bottom: 5%;
}

.contenedor-categoria {
  border-radius: 5%;
  margin: 0% 2% 2% 0%;
}

.lista_pelicula {
  display: flex;
  gap: 1.5%;
  flex-wrap: wrap;
}
</style>