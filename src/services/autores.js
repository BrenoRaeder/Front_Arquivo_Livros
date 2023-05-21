import { http } from "./config";

export default {
  listar: () => {
    return http.get("/autores/dto");
  },
  salvar: (autor) => {
    return http.post("/autor", autor);
  },
};
