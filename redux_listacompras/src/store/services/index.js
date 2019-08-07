import axios from "axios";

// Pegue as credenciais aqui => https://developers.google.com/custom-search/v1/introduction
const keys = {
  key: "Chave key do google api",
  cx: "CX gerado pela engina de search image"
};

export const services = {
  getImages: product => {
    const params = {
      searchType: "image",
      lr: "lang_pt",
      num: "1",
      q: product,
      key: keys.key,
      cx: keys.cx
    };
    return axios
      .get("https://www.googleapis.com/customsearch/v1", { params })
      .then(res => res.data.items[0].link)
      .catch(err => err);
  }
};
