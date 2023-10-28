<template>
  <div>
    <main id="main">
      <section id="main-peliculas">
        <div id="peli">
          <img src="../assets/logo.png" alt="pelicula" />
          <div id="info_peli">
            <h2 class="titulo">Titulo</h2>
            <div class="info">
              <h3 class="duracion">Duracion:</h3>
              <h3 class="fecha">Fecha:</h3>
              <h3 class="genero">Genero:</h3>
              <h3>Director:</h3>
              <h3 class="actores">Actores:</h3>
              <h3>Producción:</h3>
              <h3 class="idioma">Idioma:</h3>
            </div>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          eligendi sequi provident quo labore. Soluta voluptatibus neque
          provident. Quia qui totam, odit debitis beatae corrupti et harum dolor
          reiciendis a?
        </p>
      </section>
      <section>
        <div id="botones">
          <button id="cargar_datos">Comprar</button>
          <button>Añadir al Carrito</button>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "PeliculasView",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#main {
  display: grid;
  grid-template-columns: 72% 25%;
  gap: 3%;
  margin: 1% 8% 1% 8%;
  background: rgb(28,28,40,1);
}

#botones {
  display: grid;
  margin-top: 50%;
  height: 50%;
  width: 120%;
  justify-content: center;
}

#botones button {
  background-color: brown;
  border-radius: 10%;
  font-size: 120%;
  color: white;
  height: 30%;
  width: 220%;
}

#main-peliculas {
  margin: 3%;
}

#peli {
  display: flex;
}

#peli img {
  width: 30%;
  height: 30%;
  margin: 2%;
}

#info_peli h2 {
  font-size: 350%;
  text-align: center;
  margin-bottom: 1%;
  color: white;
}

.hora_fecha {
  display: flex;
  margin-bottom: 2%;
  margin-left: 1%;
}

#info_peli h3 {
  font-size: 140%;
  margin-left: 2%;
  color: white;
}

#info_peli div {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 10%;
}

.info h3 {
  margin-bottom: 2%;
  margin-top: 3%;
  color: white;
}

#main-peliculas p {
  font-size: 150%;
  color: white;
}
</style>


