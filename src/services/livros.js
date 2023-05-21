import { http } from "./config";

export default {
  listar: () => {
    return http.get("/livros/dto");
  },
  salvar: (livro) => {
    return http.post("/livros", livro);
  },
  atualizar: (livro) => {
    return http.put("/livros", livro);
  },
  deletar: (livro) => {
    return http.delete("/livros", { data: livro });
  },
};
