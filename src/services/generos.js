import { http } from "./config";

export default {
  listar: () => {
    return http.get("/generos/dto");
  },
  salvar: (genero) => {
    return http.post("/generos", genero);
  },
  deletar: (id) => {
    return http.delete("/generos/" + id);
  },
};
