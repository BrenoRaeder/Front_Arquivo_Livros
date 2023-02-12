<template>
  <header>
    <div>
      <h1>Arquivo de Livros</h1>
      <p>Um lugar para registrar os livros que eu li</p>
    </div>
  </header>
  <Subtitulo titulo="Livros"></Subtitulo>
  <ul>
    <div v-for="livro in livros" :key="livro.id">
      <LivrosChart :livro="livro"></LivrosChart>
    </div>
  </ul>
  <footer></footer>
</template>

<script>
import Livros from "../services/livros.js";
import LivrosChart from "../components/LivrosChart.vue";
import Subtitulo from "../components/SubtituloComponent.vue";
export default {
  data() {
    return {
      livros: [],
    };
  },
  components: {
    LivrosChart,
    Subtitulo,
  },
  created() {
    Livros.listar().then((response) => {
      this.livros = response.data;
    });
  },
};
</script>

<style scoped>
header {
  margin-top: 50px;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: var(--preto);
  background: url("https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9vayUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}

header div {
  background: #ffffff69;
  padding: 15px;
}

h1 {
  font-size: 40px;
}

ul {
  display: grid;
  grid-template-columns: auto auto auto;
  width: 85vw;
  margin: 0 auto;
}

footer {
  height: 15vh;
  background: url("https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9vayUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80");
  background-attachment: fixed;
  background-position-y: bottom;
  margin-top: 100px;
}
</style>
