import { IAuthState } from './auth.state.model';
import { ICategoriesState } from './categories.state.model';
import { IFrontState } from './frontend.state.model';
import { IGoodsState } from './goods.state.model';

export interface IAppState {
  categoriesState: ICategoriesState;
  frontState: IFrontState;
  authState: IAuthState;
  goodsState: IGoodsState;
}
