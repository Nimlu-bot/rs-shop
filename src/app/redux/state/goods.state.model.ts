import { Iproduct, Product } from 'src/app/core/constants/models';

export interface IGoodsState {
  goods: Iproduct[];
  loading: boolean;
  loaded: boolean;
  error: Error | null;
  currentProduct?: Iproduct;
  popular: Iproduct[];
}
export const initialGoodsState: IGoodsState = {
  goods: [new Product()],
  loading: false,
  loaded: false,
  error: null,
  popular: [],
};
