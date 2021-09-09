import {
  Iauth,
  IcartProduct,
  IdeliveryInfo,
  Iproduct,
} from 'src/app/core/constants/models';

export interface IAuthState {
  isLogin: boolean;
  userData: Iauth;
  currentOrder: IcartProduct[];
  orders: IdeliveryInfo[];
  favorite: Iproduct[];
}
export const initialAuthState: IAuthState = {
  isLogin: false,
  userData: { email: '', password: '' },
  currentOrder: [],
  orders: [],
  favorite: [],
};
