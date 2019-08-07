import { call, put } from "redux-saga/effects";
import { services as api } from "../services";
import { Creators as ListActions } from "../actions/list";

const genericImg =
  "https://www.nhttps://i0.wp.com/www.mercadoeconsumo.com.br/wp-content/uploads/2019/03/Mercado-Livre-disponibiliza-mais-de-90-mil-ofertas-para-o-Dia-do-Consumidor.png?fit=1500%2C1061&ssl=1oticiasdeaveiro.pt/wp-content/uploads/2019/07/o-mercado.jpg";

export function* getImageRequest(action) {
  try {
    const img = yield call(api.getImages, action.product.product);
    yield put(ListActions.getImageSuccess(action.product, img));
  } catch (err) {
    console.log(err);
    yield put(ListActions.getImageFailure(action.product, genericImg));
  }
}
