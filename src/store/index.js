import { createStore } from 'vuex'

export default createStore({
  state: {
    peliculasRamdom: [],      // Array de peliculas ramdom segun palabrasRamdon
    palabrasRamdon: ['series', 'family', 'horror', 'romance', 'adventure', 'animated', 'comedy', 'superhero', 'action'],
    //['terror', 'horror', 'adventure', 'comedy', 'fantasy', 'family', 'romance', 'science fiction', 'action', 'disney', 'series', 'animated', 'suspense', 'superhero', 'documentary', 'drama']
    peliculasPorGenero: {    // Array de listas por genero
      "genero": [],
    },
    resultadoSearch: [],     // Arry de un busqueda por el input
    tituloInfo: '',          // titulo para buscar  
    peli: ''                 // es un Objeto Pelicula
    
  },
  getters: {
    
  },
  mutations: {
    listPeliculasRamdom(state, peliRamdom) {
      state.peliculasRamdom = peliRamdom
    },

    setPeliculasPorGenero(state, { genero, peliculas }) {
      state.peliculasPorGenero[genero] = peliculas;
    },

    setResultadoSearch(state, results) {
      state.resultadoSearch = results;
    },

    setTituloInfo(state, nuevoTitulo) {
      state.tituloInfo = nuevoTitulo;
    },

    setPeliTitulo(state, nombreTitulo) {
      state.peli = nombreTitulo;
    }
  },
  actions: {
    //apiKey = 939a21a72753c9e15fd923613f860706
    //http://www.omdbapi.com/?type=xxx&apikey=d15a3c4f
    //https://www.omdbapi.com/?apikey=d15a3c4f&s=terror&page=1 ---- para Paguinacion ----
    obtenerPeliculasRamdom: async function ({ commit, state }) {
      const searchQuery = state.palabrasRamdon[Math.floor(Math.random() * state.palabrasRamdon.length)];

      try {
        const response = await fetch(`http://www.omdbapi.com/?apikey=d15a3c4f&s=${searchQuery}`);
        const data = await response.json();
        console.log('Data de la API:', data);

        if (data.Response === 'True') {
          commit('listPeliculasRamdom', data.Search);
        }
        else {
          console.error('Error en la respuesta de la API:', data.Error);
        }
      }
      catch (error) {
        console.error('Error al buscar Ramdom:', error);
      }
    },

    obtenerPeliculasPorGenero: async function ({ commit }, genero) {
      try {
        const response = await fetch(`http://www.omdbapi.com/?apikey=d15a3c4f&s=${genero}&page=1`);
        const data = await response.json();
        console.log('Data de la API:', data);
        if (data.Response === 'True') {
          commit('setPeliculasPorGenero', { genero, peliculas: data.Search.slice(0, 8) });
        }
        else {
          console.error('Error en la respuesta de la API:', data.Error);
        }
      }
      catch (error) {
        console.error('Error al buscar películas por género:', error);
      }
    },

    obtenerPeliculasSearch: async function ({ commit }, {searchPeli,numePage}) {
      try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=d15a3c4f&s=${searchPeli}&page=${numePage}`);
        const data = await response.json();
        console.log('Data de la API:', data);

        if (data.Response === 'True') {
          commit('setResultadoSearch', data.Search);
        }
        else {
          console.error('Error en la respuesta de la API:', data.Error);
        }
      }
      catch (error) {
        console.error('Error al buscar películas:', error);
      }
    },

    obtenerPeliculasPorTitulo: async function ({ commit }, nameTitulo) {
      try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=d15a3c4f&t=${nameTitulo}`);
        const data = await response.json();
        console.log('Busqueda por nombre;', data);
        if (data.Response === 'True') {
          commit('setPeliTitulo', data);
        }
        else {
          console.error('Error en la respuesta de la API:', data.Error);
        }
      }
      catch (error) {
        console.error('Error al buscar películas:', error);
      }
    },
  },
  modules: {

  }
})
