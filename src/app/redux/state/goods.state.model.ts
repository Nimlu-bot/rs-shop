import { Iproduct } from 'src/app/core/constants/models';

export interface IGoodsState {
  goods: Iproduct[];
  loading: boolean;
  loaded: boolean;
  error: Error | null;
}
export const initialGoodsState: IGoodsState = {
  goods: [],
  loading: false,
  loaded: false,
  error: null,
};
