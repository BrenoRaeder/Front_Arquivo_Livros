<template>
  <SubtituloComponent titulo="Novo Livro"></SubtituloComponent>
  <v-form ref="form" class="form" @submit.prevent>
    <v-container>
      <v-row>
        <v-col>
          <v-text-field v-model="livro.titulo" label="Título"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2">
          <v-text-field
            v-model="livro.qtdPaginas"
            label="Páginas"
            type="number"
            cols="6"
          ></v-text-field>
        </v-col>
        <v-col cols="10">
          <v-text-field
            v-model="livro.imgCapa"
            label="Imagem (link)"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-autocomplete
            :items="autores"
            v-model="livro.autor.idAutor"
            label="Autor"
          ></v-autocomplete>
        </v-col>
        <v-col cols="6">
          <v-autocomplete
            :items="generos"
            v-model="livro.genero.idGenero"
            label="Gênero"
          ></v-autocomplete>
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
      <button @click="salvarLivro" class="btn-salvar">Salvar</button>
      <button @click="cancelar" class="btn-cancelar">Cancelar</button>
    </div>
  </v-form>
</template>

<script>
import SubtituloComponent from "@/components/SubtituloComponent.vue";
import Livro from "../services/livros.js";
import Autor from "../services/autores.js";
import Genero from "../services/generos.js";
export default {
  data() {
    return {
      generos: [],
      autores: [],
      livro: {
        titulo: "",
        dataInicio: null,
        dataTermino: null,
        qtdPaginas: 0,
        imgCapa: "",
        genero: {
          idGenero: null,
        },
        autor: {
          idAutor: null,
        },
      },
    };
  },
  created() {
    Autor.listar().then((response) => {
      response.data.forEach((a) => {
        this.autores.push(a.idAutor + "  - " + a.nome);
      });
    });
    Genero.listar().then((response) => {
      response.data.forEach((a) => {
        this.generos.push(a.idGenero + "  - " + a.nome);
      });
    });
  },
  methods: {
    salvarLivro() {
      this.livro.autor.idAutor = this.livro.autor.idAutor.substring(0, 3);
      this.livro.genero.idGenero = this.livro.genero.idGenero.substring(0, 3);
      Livro.salvar(this.livro)
        .then(() => {
          alert("Salvo com sucesso");
          this.$router.push("/");
        })
        .catch((error) => {
          alert("Deu pau :(");
          console.log(error);
        });
    },
  },
  components: { SubtituloComponent },
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
  margin: 0 5px;
}

.btn-salvar:hover {
  color: var(--preto);
  background: var(--verde);
}

.btn-cancelar:hover {
  color: var(--preto);
  background: #c56b6b;
}
</style>
