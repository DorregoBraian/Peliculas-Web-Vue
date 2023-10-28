<!--<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/peliculas">Peliculas</router-link> |
    <router-link to="/categorias">Categorias</router-link> |
    <router-link to="/formulario">Formulario</router-link>
  </nav>
  <router-view />
</template>-->

<!--<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>-->

<template>
  <div>
    <header>
      <div class="logo">
        <img src="@/assets/Logotipo/Icono1.png" alt="Icono" />
        <h1>Movie Mobile</h1>
      </div>
      <nav class="navBar">
        <div class="navBar-element">
          <span class="material-symbols-outlined">house</span>
          <router-link to="/">Home</router-link>
        </div>

        <div class="navBar-element">
          <span class="material-symbols-outlined">category</span>
          <router-link to="/categorias">Categorias</router-link>
        </div>

        <div class="navBar-element">
          <span class="material-symbols-outlined">local_activity</span>
          <router-link to="/favoritos">Favoritos</router-link>
        </div>

        <div class="navBar-element">
          <input
            type="text"
            placeholder="Buscar Pelicula..."
            v-model="searchNamePeli"
            @keyup.enter="searchMovies"
          />
          <span class="material-symbols-outlined">search</span>
        </div>

        <div class="navBar-element">
          <span class="material-symbols-outlined">edit_document</span>
          <router-link to="/formulario">Encuesta</router-link>
        </div>

        <div class="navBar-element">
          <span class="material-symbols-outlined">account_circle</span>
          <span class="material-symbols-outlined">arrow_drop_down</span>
        </div>
      </nav>
    </header>

    <router-view />

    <footer>
      <div id="footer-logo">
        <img src="@/assets/Logotipo/Icono1.png" alt="" />
        <h2>Movie Mobile</h2>
      </div>
      <div id="footer-redes">
        <div class="footer-icons">
          <i class="fa-brands fa-facebook"></i>
          <a href="https://www.facebook.com/"><h3>Facebook</h3></a>
        </div>
        <div class="footer-icons">
          <i class="fa-brands fa-twitter"></i>
          <a href="https://twitter.com/"><h3>Twitter</h3></a>
        </div>
        <div class="footer-icons">
          <i class="fa-brands fa-instagram"></i>
          <a href="https://www.instagram.com/"><h3>Instagram</h3></a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchNamePeli: "", // Variable para almacenar el término de búsqueda
    };
  },
  methods: {
    /*async searchMovies() {
      // Llamar a la acción Vuex para buscar películas en la API con this.searchTerm y la página
      await this.$store.dispatch("obtenerPeliculasSearch", {
        searchTerm: this.searchNamePeli,
        page: 1, // número de página por defecto
      });
    },*/

    async searchMovies() {
      // Llamar a la acción Vuex para buscar películas en la API con this.searchTerm
      await this.$store.dispatch("obtenerPeliculasSearch",{
        searchPeli: this.searchNamePeli,
        numePage: 1, // número de página por defecto
      }); 
      //this.$router.push("/search"); // Redirigir a la vista de búsqueda
      this.$router.push(`/search/${this.searchNamePeli}`); // Redirigir a la vista de búsqueda con el título en la URL

    },
  },
  created() {
    // Borra el LocalStorage al inicio de la aplicación.
    localStorage.clear();
  },
};
</script>

<style>
:root {
  --mainColor: rgba(28, 28, 40, 1);
  --secundaryColor: rgba(37, 37, 55, 1);
  --shadowColor: rgba(25, 25, 36, 1);
  --hoverColor: rgba(137, 137, 200, 1);
}

* {
  margin: 0;
  padding: 0;
}

body {
  background-color: var(--mainColor);
}

/*-------------- Header -------------- */
#header {
  padding: 1% 3% 1% 3%;
  display: flex;
  gap: 5%;
  background-color: var(--secundaryColor);
}

.logo {
  max-width: 20%;
  margin: 1%;
  display: flex;
  align-items: center;
}

.logo img {
  max-width: 25%;
}

.logo h1 {
  font-size: 1.4rem;
  color: white;
}

.navBar {
  margin: 2% 5% 2% 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
}

.navBar-element {
  display: flex;
  align-items: center;
  gap: 5%;
  transition: 0.3s;
}

.navBar-element:hover {
  color: var(--hoverColor);
}

.navBar-element a {
  text-decoration: none;
  color: white;
  transition: 0.3s;
  font-size: 1.4rem;
}

.navBar-element a:hover {
  color: var(--hoverColor);
}

.navBar-element input {
  padding: 3%;
  border-radius: 5px;
}

/* ------------------- Footer -------------------------- */

#footer {
  background-color: var(--secundaryColor);
  padding: 3% 8% 3% 8%;
}

#footer-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

#footer-logo img {
  max-width: 5%;
}

#footer-redes {
  display: flex;
  align-items: center;
  justify-content: center;
}

#footer-redes a {
  text-decoration: none;
  color: white;
}

.footer-icons {
  font-size: 1.5rem;
  color: white;
  display: flex;
  align-items: center;
  margin: 2% 2% 0% 2%;
  transition: 0.4s;
  gap: 5%;
}

.footer-icons:hover {
  color: var(--hoverColor);
}
</style>

