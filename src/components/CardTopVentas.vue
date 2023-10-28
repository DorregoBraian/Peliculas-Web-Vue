<template>
  <div class="card-topVentas">
    <img :src="img" alt="pelicula"/>
    <div class="card-topVentas-info">
      <h4>{{titulo}}</h4>
      <br />
      <h4>{{fecha}}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardTopVentas",
  props: {
    titulo: String,
    img: String,
    fecha: String
  }
};
</script>

<style scoped>
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
</style>