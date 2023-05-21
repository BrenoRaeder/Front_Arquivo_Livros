<template>
  <SubtituloComponent titulo="Editar Livro"></SubtituloComponent>
  <v-form ref="form" class="form" @submit.prevent>
    <v-container>
      <v-row>
        <v-col>
          <v-text-field
            v-model="livroSalvar.titulo"
            label="Título"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2">
          <v-text-field
            v-model="livroSalvar.qtdPaginas"
            label="Páginas"
            type="number"
            cols="6"
          ></v-text-field>
        </v-col>
        <v-col cols="10">
          <v-text-field
            v-model="livroSalvar.imgCapa"
            label="Imagem (link)"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-autocomplete
            :items="autores"
            v-model="livroSalvar.autor.idAutor"
            label="Autor"
          ></v-autocomplete>
        </v-col>
        <v-col cols="6">
          <v-autocomplete
            :items="generos"
            v-model="livroSalvar.genero.idGenero"
            label="Gênero"
          ></v-autocomplete>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-col cols="6">
          <v-text-field
            v-model="livroSalvar.dataInicio"
            label="Data de Início"
            type="date"
          ></v-text-field>
        </v-col>
        <v-col md="6">
          <v-text-field
            v-model="livroSalvar.dataTermino"
            label="Data de Término"
            type="date"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
    <div class="container-btn">
      <button @click="atualizarLivro" class="btn-salvar">Salvar</button>
      <button @click="cancelar" class="btn-cancelar">Cancelar</button>
    </div>
  </v-form>
</template>

<script>
import { mapState } from "vuex";
import Livro from "../services/livros.js";
import Autor from "../services/autores.js";
import Genero from "../services/generos.js";
import SubtituloComponent from "../components/SubtituloComponent.vue";
export default {
  computed: mapState({
    livro: "livro",
  }),
  data() {
    return {
      generos: [],
      autores: [],
      livroSalvar: {
        idLivro: null,
        titulo: null,
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
    //passando os dados por causa do autorDTO
    this.livroSalvar.idLivro = this.livro.idLivro;
    this.livroSalvar.titulo = this.livro.titulo;
    this.livroSalvar.dataInicio = this.livro.dataInicio.substring(0, 10);
    this.livroSalvar.dataTermino = this.livro.dataTermino.substring(0, 10);
    this.livroSalvar.qtdPaginas = this.livro.qtdPaginas;
    this.livroSalvar.imgCapa = this.livro.imgCapa;
    this.livroSalvar.genero.idGenero = this.livro.generoDTO.idGenero.toString();
    this.livroSalvar.autor.idAutor = this.livro.autorDTO.idAutor.toString();
  },
  components: {
    SubtituloComponent,
  },
  methods: {
    atualizarLivro() {
      this.livroSalvar.autor.idAutor = this.livroSalvar.autor.idAutor.substring(
        0,
        3
      );
      this.livroSalvar.genero.idGenero =
        this.livroSalvar.genero.idGenero.substring(0, 3);
      Livro.atualizar(this.livroSalvar)
        .then(() => {
          alert("Atualizado com sucesso");
          this.$router.push("/");
        })
        .catch((error) => {
          // alert("Deu pau :(");
          this.$router.push("/");
          console.log(error);
        });
    },
    cancelar() {
      this.$router.push("/");
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
