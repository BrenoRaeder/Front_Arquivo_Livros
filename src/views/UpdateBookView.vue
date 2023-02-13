<template>
  <SubtituloComponent titulo="Editar Livro"></SubtituloComponent>
  <v-form ref="form" class="form">
    <v-container>
      <v-row>
        <v-col>
          <v-text-field v-model="livro.titulo" label="Título"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2">
          <v-text-field
            v-model="livro.paginas"
            label="Páginas"
            type="number"
            cols="6"
          ></v-text-field>
        </v-col>
        <v-col cols="10">
          <v-text-field
            v-model="livro.imagem"
            label="Imagem (link)"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-col cols="6">
          <v-text-field
            v-model="livro.dataInicio"
            label="Data de Início"
            type="date"
          ></v-text-field>
        </v-col>
        <v-col md="6">
          <v-text-field
            v-model="livro.dataTermino"
            label="Data de Término"
            type="date"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
    <div class="container-btn">
      <button type="submit" @click="salvarLivro">Salvar</button>
    </div>
  </v-form>
</template>

<script>
import { mapState } from "vuex";
import Livro from "../services/livros.js";
import SubtituloComponent from "../components/SubtituloComponent.vue";
export default {
  computed: mapState({
    livro: "livro",
  }),
  components: {
    SubtituloComponent,
  },
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

<style scoped>
.container-btn {
  display: flex;
  justify-content: flex-end;
  width: 90vw;
  margin: auto;
}

button {
  color: var(--branco);
  background: var(--preto);
  padding: 5px 10px;
  transition: 0.6s;
  font-weight: bold;
}

button:hover {
  color: var(--preto);
  background: #95dd95;
}
</style>
