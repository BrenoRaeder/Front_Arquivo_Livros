import { http } from "./config";

export default {
  listar: () => {
    return http.get("/livros");
  },
  salvar: (produto) => {
    return http.post("/livro", produto);
  },
  atualizar: (produto) => {
    return http.put("/livro", produto);
  },
  deletar: (produto) => {
    return http.delete("/livro", { data: produto });
  },
};
