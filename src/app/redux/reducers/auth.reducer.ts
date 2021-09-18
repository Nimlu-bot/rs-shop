import { createReducer, on, Action } from '@ngrx/store';

import { DeliveryInfo } from 'src/app/core/constants/models';
import * as AuthActions from '../actions/auth.actions';

import { IAuthState, initialAuthState } from '../state/auth.state.model';

const reducer = createReducer(
  initialAuthState,
  on(
    AuthActions.login,
    (state, { userData }): IAuthState => ({
      ...state,
      isLogin: true,
      userData,
    })
  ),
  on(AuthActions.logout, (state): IAuthState => ({ ...state, isLogin: false })),
  on(AuthActions.checkLogin, (state): IAuthState => ({ ...state })),
  on(
    AuthActions.toFavorite,
    (state, { product }): IAuthState => ({
      ...state,
      favorite: state.favorite.concat(product),
    })
  ),
  on(AuthActions.fromFavorite, (state, { product }): IAuthState => {
    const newFavorite = state.favorite.filter((item) => item.id !== product.id);
    return {
      ...state,
      favorite: newFavorite,
    };
  }),
  on(
    AuthActions.toCart,
    (state, { product }): IAuthState =>
      // const newOrderProducts = [...state.currentOrder.products, product];
      // const newOrder = { ...state.currentOrder, products: newOrderProducts };
      ({
        ...state,
        currentOrder: state.currentOrder.concat({ ...product, amount: 1 }),
      })
  ),
  on(AuthActions.fromCart, (state, { product }): IAuthState => {
    const newCart = state.currentOrder.filter((item) => item.id !== product.id);
    return {
      ...state,
      currentOrder: newCart,
    };
  }),
  on(AuthActions.increaseAmount, (state, { product }): IAuthState => {
    // const currentProduct = state.currentOrder.filter(
    //   (item) => item.id === product.id
    // )[0];
    // const otherProducts = state.currentOrder.filter(
    //   (item) => item.id !== product.id
    // );
    // const newAmount = currentProduct.amount ? currentProduct.amount + 1 : 1;
    // const productWithNewAmount = { ...currentProduct, amount: newAmount };
    // const newOrder = [...otherProducts, productWithNewAmount];
    const newOrder = state.currentOrder.map((item) => {
      if (item.id !== product.id) return item;
      return { ...item, amount: item.amount ? item.amount + 1 : 1 };
    });
    return { ...state, currentOrder: newOrder };
  }),
  on(AuthActions.decreaseAmount, (state, { product }): IAuthState => {
    const newOrder = state.currentOrder.map((item) => {
      if (item.id !== product.id) return item;
      return {
        ...item,
        amount: item.amount && item.amount > 1 ? item.amount - 1 : 1,
      };
    });
    return { ...state, currentOrder: newOrder };
  }),
  on(
    AuthActions.createOrder,
    (state, { order }): IAuthState => ({
      ...state,
      orders: [...state.orders, order],
    })
  ),
  on(
    AuthActions.clearCurrentOrder,
    (state): IAuthState => ({
      ...state,
      currentOrder: [],
    })
  ),
  on(
    AuthActions.deleteOrder,
    (state, { orderId }): IAuthState => ({
      ...state,
      orders: state.orders.filter((order) => order.id !== orderId),
    })
  ),
  on(
    AuthActions.editOrder,
    (state, { order }): IAuthState => ({
      ...state,
      orderToEdit: order,
    })
  ),
  on(
    AuthActions.confirmEditOrder,
    (state, { order }): IAuthState => ({
      ...state,
      orderToEdit: JSON.parse(JSON.stringify(new DeliveryInfo())),
      orders: state.orders.map((item) =>
        item.id === order.id ? { ...order } : item
      ),
    })
  ),
  on(
    AuthActions.setCurrentOrder,
    (state, { products }): IAuthState => ({
      ...state,
      currentOrder: products,
    })
  )
);

export function AuthReducer(state: IAuthState, action: Action) {
  return reducer(state, action);
}
