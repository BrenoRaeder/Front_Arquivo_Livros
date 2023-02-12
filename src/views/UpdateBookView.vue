<template>
  <h1>Atualizar Livro</h1>
  <div>
    <label>Título</label>
    <input type="text" v-model="livro.titulo" />
    <label>Começou</label>
    <input type="date" v-model="livro.dataInicio" />
    <label>Terminou</label>
    <input type="date" v-model="livro.dataTermino" />
    <label>Páginas</label>
    <input type="number" v-model="livro.quantidadePaginas" />
    <label>Imagem (link)</label>
    <input type="text" v-model="livro.imagem" />
    <button @click="atualizarLivro">Salvar</button>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Livro from "../services/livros.js";
export default {
  computed: mapState({
    livro: "livro",
  }),
  methods: {
    atualizarLivro() {
      Livro.atualizar(this.livro)
        .then(() => {
          alert("Atualizado com sucesso");
          this.$router.push("/");
        })
        .catch((error) => {
          alert("Deu pau :(");
          console.log(error);
        });
    },
  },
};
</script>
