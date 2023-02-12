<template>
  <h1>novo livro</h1>
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
    <button @click="salvarLivro">Salvar</button>
  </div>
</template>

<script>
import Livro from "../services/livros.js";
export default {
  data() {
    return {
      livro: {
        titulo: "",
        dataInicio: null,
        dataTermino: null,
        quantidadePaginas: 0,
        imagem: "",
      },
    };
  },
  methods: {
    salvarLivro() {
      Livro.salvar(this.livro)
        .then(() => {
          alert("Salvo com sucesso");
        })
        .catch((error) => {
          alert("Deu pau :(");
          console.log(error);
        });
    },
  },
};
</script>

<style>
div {
  display: flex;
  flex-direction: column;
}
</style>
