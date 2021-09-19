import {
  DeliveryInfo,
  IcartProduct,
  IdeliveryInfo,
  Iproduct,
  IstoredData,
} from 'src/app/core/constants/models';

export interface IAuthState {
  isLogin: boolean;
  userData: IstoredData;
  currentOrder: IcartProduct[];
  orders: IdeliveryInfo[];
  favorite: Iproduct[];
  orderToEdit: IdeliveryInfo;
}
export const initialAuthState: IAuthState = {
  isLogin: false,
  userData: { email: '', token: '' },
  currentOrder: [],
  orders: [],
  favorite: [],
  orderToEdit: JSON.parse(JSON.stringify(new DeliveryInfo())),
};
