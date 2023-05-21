<template>
  <div class="details-container">
    <img :src="livro.imagem" alt="Capa do livro" />
    <div class="details-chart">
      <p><span>Titulo:</span> {{ livro.titulo }}</p>
      <p><span>Começou:</span> {{ livro.dataInicio }}</p>
      <p><span>Terminou:</span> {{ livro.dataTermino }}</p>
      <p><span>Nº páginas:</span> {{ livro.qtdPaginas }}</p>
      <p><span>Autor:</span> {{ livro.autorDTO.nome }}</p>
      <p><span>Gênero:</span> {{ livro.genero }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    livro: Object,
  },
};
</script>

<style scoped>
.details-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

img {
  width: 30%;
}

.details-chart {
  font-size: 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: 1px solid var(--preto);
  border-radius: 5px;
  padding: 0 20px;
}

span {
  background: var(--preto);
  color: var(--branco);
}
</style>
