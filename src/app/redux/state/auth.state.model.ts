import {
  DeliveryInfo,
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
  orderToEdit: IdeliveryInfo;
}
export const initialAuthState: IAuthState = {
  isLogin: false,
  userData: { email: '', password: '' },
  currentOrder: [],
  orders: [],
  favorite: [],
  orderToEdit: JSON.parse(JSON.stringify(new DeliveryInfo())),
};
