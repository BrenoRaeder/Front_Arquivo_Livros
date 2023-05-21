<template>
  <Subtitulo titulo="Gêneros"></Subtitulo>
  <div class="lista" v-for="genero in generos" :key="genero.idGenero">
    <p>{{ genero.idGenero }} - {{ genero.nome }}</p>
    <div class="excluir" @click="excluir(genero.idGenero)">x</div>
  </div>
  <v-form class="form" @submit.prevent>
    <v-text-field label="nome" v-model="genero.nome"></v-text-field>
    <button @click="salvar">Salvar</button>
  </v-form>
</template>

<script>
import Genero from "../services/generos.js";
import Subtitulo from "@/components/SubtituloComponent.vue";
export default {
  data() {
    return {
      generos: [],
      genero: {
        nome: "",
      },
    };
  },
  components: {
    Subtitulo,
  },
  created() {
    Genero.listar().then((response) => {
      this.generos = response.data;
    });
  },
  methods: {
    salvar() {
      Genero.salvar(this.genero)
        .then(() => {
          alert("Salvo com sucesso");
          window.location.reload();
        })
        .catch((error) => {
          alert(error);
          console.log(error);
        });
    },
    excluir(id) {
      Genero.deletar(id)
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
.lista {
  margin: 5px auto 0 auto;
  border: 1px solid var(--preto);
  padding: 20px;
  width: 30vw;
  display: flex;
  justify-content: space-between;
}

.excluir {
  cursor: pointer;
  border-radius: 50%;
  padding: 1px 8px;
  font-weight: bold;
  color: var(--preto);
  transition: 0.3s;
}

.excluir:hover {
  background: #c56b6b;
  color: #fff;
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
