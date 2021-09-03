import { Iauth } from 'src/app/core/constants/models';

export interface IAuthState {
  isLogin: boolean;
  userData: Iauth;
}
export const initialAuthState: IAuthState = {
  isLogin: false,
  userData: { email: '', password: '' },
};
