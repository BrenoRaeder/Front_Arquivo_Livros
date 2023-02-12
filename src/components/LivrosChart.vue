<template>
  <v-dialog v-model="dialog" width="auto">
    <LivroDetails :livro="livro"></LivroDetails>
  </v-dialog>
  <div class="chart">
    <img
      :src="livro.imagem"
      class="chart-capa"
      alt="Capa do livro"
      @click="dialog = true"
    />
    <div class="chart-opcoes">
      <a @click="editar">Editar</a>
      <a @click="deletar">Deletar</a>
    </div>
  </div>
</template>

<script>
import Livro from "../services/livros.js";
import LivroDetails from "./LivroDetails.vue";
export default {
  name: "LivrosChart",
  props: {
    livro: Object,
  },
  components: {
    LivroDetails,
  },
  data() {
    return {
      chartExpanded: false,
      dialog: false,
    };
  },
  methods: {
    editar() {
      this.$store.dispatch("setLivro", this.livro);
      this.$router.push("/atualizacao");
    },
    deletar() {
      Livro.deletar(this.livro)
        .then(() => {
          window.location.reload();
        })
        .catch((error) => {
          alert("Deu pau :(");
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
li {
  list-style: none;
  width: 90vw;
  margin: 50px auto;
  padding: 100px 0;
  transition: 0.6s;
  display: flex;
  justify-content: space-around;
  background: #c0c0c0;
  border-radius: 10px;
  box-shadow: 1px 1px 10px #1d1c1c;
}

.chart {
  width: 25vw;
}
.chart-capa {
  width: 25vw;
  cursor: pointer;
  transition: 0.6s;
}
.chart-capa:hover {
  box-shadow: 5px 1px 10px var(--preto);
}
.chart-opcoes {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.chart-opcoes a {
  cursor: pointer;
  transition: 0.6s;
  background: var(--vermelho);
  padding: 2px;
  font-size: 10px;
  font-weight: bold;
  margin: 0 1px;
  color: var(--preto);
  background: transparent;
}

.chart-opcoes a:hover {
  color: var(--branco);
  background: var(--preto);
}
</style>
