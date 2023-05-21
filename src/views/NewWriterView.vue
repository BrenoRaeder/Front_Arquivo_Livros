<template>
  <Subtitulo titulo="Autores"></Subtitulo>
  <div class="lista" v-for="autor in autores" :key="autor.idAutor">
    <p>{{ autor.idAutor }} - {{ autor.nome }}</p>
    <div class="excluir" @click="excluir(autor.idAutor)">x</div>
  </div>
  <v-form class="form" @submit.prevent>
    <v-text-field label="nome" v-model="autor.nome"></v-text-field>
    <button @click="salvar">Salvar</button>
  </v-form>
</template>

<script>
import Autores from "../services/autores.js";
import Subtitulo from "@/components/SubtituloComponent.vue";
export default {
  data() {
    return {
      autores: [],
      autor: {
        nome: "",
      },
    };
  },
  components: {
    Subtitulo,
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
          window.location.reload();
        })
        .catch((error) => {
          alert(error);
          console.log(error);
        });
    },
    excluir(id) {
      Autores.deletar(id)
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
