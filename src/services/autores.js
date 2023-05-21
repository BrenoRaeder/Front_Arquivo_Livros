import { http } from "./config";

export default {
  listar: () => {
    return http.get("/autores/dto");
  },
  salvar: (autor) => {
    return http.post("/autores", autor);
  },
  deletar: (id) => {
    return http.delete("/autores/" + id);
  },
};
