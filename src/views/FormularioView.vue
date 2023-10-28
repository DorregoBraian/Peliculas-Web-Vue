<template>
  <div>
    <form action="" id="formulario">
      <h2>Dejanos Tu Opinion</h2>
      <div class="formulario-item">
        <label for="nombre">Nombre: </label>
        <input type="text" class="formulario__input" id="nombre" autofocus />
      </div>

      <div class="formulario-item">
        <label for="apellido">Apellido: </label>
        <input type="text" class="formulario__input" id="apellido" />
      </div>

      <div class="formulario-item">
        <label for="fecha">Fecha de Nacimiento: </label>
        <input type="date" id="fecha" />
      </div>

      <div class="formulario-item">
        <label for="genero">Genero: </label>
        <select name="genero" id="genero">
          <option value="default" selected disabled hidden>- -</option>
          <option value="hombre">Hombre</option>
          <option value="mujer">Mujer</option>
          <option value="otro">Otro</option>
        </select>
      </div>

      <div class="formulario-item">
        <label for="valoracion">Valoración de la Pagina:</label>
        <select name="valoracion" id="valoracion">
          <option value="default" selected disabled hidden>- -</option>
          <option value="me encanto">Me encantó</option>
          <option value="cumple con mis expectativas">
            Cumple con mis expectativas
          </option>
          <option value="podria ser mejor">Podría ser mejor</option>
          <option value="mala">Mala</option>
          <option value="lamentable">Lamentable</option>
        </select>
      </div>

      <div class="formulario-item">
        <label for="email">Email: </label>
        <input type="text" class="formulario__input" id="email" />
      </div>

      <div class="formulario-item">
        <label for="comentario">Comentario: </label>
        <textarea name="" id="comentario" cols="30" rows="3"></textarea>
      </div>

      <div id="botones" class="formulario-item">
        <button class="form-button" id="button-enviar" type="button">
          Enviar
        </button>
        <button class="form-button" id="button-cancelar" type="button">
          Cancelar
        </button>
        <button class="form-button" id="button-reset" type="reset">
          Restablecer valores
        </button>
      </div>
    </form>

    <section id="modal-cancelar">
      <div id="modalcancelar" class="modal">
        <div class="modal-content">
          <div class="modal-header">
            <span id="modalBtnX" class="close">&times;</span>
            <h2>Esta seguro que desea cancelar?</h2>
          </div>
          <div class="modal-body" id="modal-body-reserva"></div>
          <div class="modal-footer">
            <div class="modal-footer-botones">
              <button
                type="button"
                id="modal-boton-volver"
                class="modal-boton modal-boton-ok"
              >
                Sí, deseo volver a la página anterior
              </button>
              <button
                type="button"
                id="modal-boton-cancelar"
                class="modal-boton modal-boton-cancelar"
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "FormularioView",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
}

#formulario {
  color: white;
  border-radius: 10px;
  padding: 3% 2% 3% 2%;
  background-color: var(--shadowColor);
  text-align: center;
  max-width: 50%;
  margin: 5% auto 5% auto;
  background: rgb(28, 28, 40, 1);
}

#formulario h2 {
  margin: 1% 0% 5% 0%;
}

#formulario input,
select {
  padding: 0.5% 1% 0.5% 1%;
}

#formulario textarea {
  vertical-align: top;
  resize: none;
}

.form-button {
  margin: 5% 0% 0% 0%;
  padding: 1.2% 1.5% 1.2% 1.5%;
  transition: 0.4s;
}

.form-button:hover {
  background-color: rgba(255, 255, 255, 0.534);
}

.formulario-item {
  margin: 0% 0% 3% 0%;
}

/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
  position: relative;
  background-color: #fefefe;
  margin: auto;
  padding: 0;
  border: 1px solid #888;
  width: 50%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: animatetop;
  animation-duration: 0.7s;
}

/* Add Animation */
@-webkit-keyframes animatetop {
  from {
    top: -300px;
    opacity: 0;
  }
  to {
    top: 0;
    opacity: 1;
  }
}

@keyframes animatetop {
  from {
    top: -300px;
    opacity: 0;
  }
  to {
    top: 0;
    opacity: 1;
  }
}

/* The Close Button */
.close {
  color: white;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  text-decoration: none;
  cursor: pointer;
}

.modal-header {
  padding: 3%;
  background-color: var(--mainColor);
  color: white;
}

.modal-body {
  background-color: var(--mainColor);
}

.modal-footer {
  padding: 3%;
  background-color: var(--mainColor);
  color: white;
}

.modal-footer-botones {
  display: flex;
  justify-content: right;
}

.modal-boton {
  padding: 1% 2% 1% 2%;
  border: 1px solid gray;
  border-radius: 4px;
  margin-right: 3%;
  color: white;
  font-size: 1rem;
  transition: 0.4s;
}

#modal-boton-cancelar {
  background-color: var(--lightMainColor);
}

#modal-boton-cancelar:hover {
  background-color: var(--hoverColor);
}

#modal-boton-volver {
  background-color: rgb(107, 107, 107);
}

#modal-boton-volver:hover {
  background-color: rgb(127, 127, 127);
}

#modalSucces {
  text-align: center;
}

#modal-success-boton {
  background-color: rgba(101, 150, 37, 255);
  color: white;
  padding: 1% 2% 1% 2%;
  margin: 15px 0 0 0;
}

#modal-conten-success {
  width: 30%;
}
</style>