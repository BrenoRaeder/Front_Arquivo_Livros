<template>
  <div class="lista" v-for="autor in autores" :key="autor.id">
    <p>{{ autor.nome }}</p>
    <p>{{ autor.id }}</p>
  </div>
  <v-form class="form" @submit.prevent>
    <v-text-field label="nome" v-model="autor.nome"></v-text-field>
    <button @click="salvar">Salvar</button>
  </v-form>
</template>

<script>
import Autores from "../services/autores.js";
export default {
  data() {
    return {
      autores: [],
      autor: {
        nome: "",
      },
    };
  },
  created() {
    Autores.listar().then((response) => {
      this.autores = response.data;
    });
  },
  methods: {
    salvar() {
      Autores.salvar(this.autor)
        .then(() => {
          alert("Salvo com sucesso");
        })
        .catch((error) => {
          alert(error);
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.lista {
  margin: 100px auto 0 auto;
  border: 1px solid var(--preto);
  padding: 20px;
  width: 30vw;
}

.form {
  margin: 100px auto 100px auto;
  border: 1px solid var(--preto);
  padding: 20px;
  width: 30vw;
}

button {
  color: var(--branco);
  background: var(--preto);
  padding: 5px 10px;
  transition: 0.6s;
  font-weight: bold;
  margin: 0 5px;
}

button:hover {
  color: var(--preto);
  background: var(--branco);
}
</style>
