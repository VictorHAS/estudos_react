import axios from "axios";

export const services = {
  getImages: product => {
    const params = {
      key: "AIzaSyCLqhyfngNs9cPTokHkzLRi0ouN5n2ESSQ",
      cx: "004852152977252151084%3Azmbhvyqckqa",
      searchType: "Image",
      lr: "lang_pt",
      num: 1,
      q: product
    };
    return axios
      .get("https://www.googleapis.com/customsearch/v1", { params })
      .then(res => res.data.items[0].link)
      .catch(err => err);
  }
};
