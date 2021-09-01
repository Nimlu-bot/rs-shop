import { Icategory } from 'src/app/core/constants/models';

export interface ICategoriesState {
  categories: Icategory[];
  currentCategory: string;
  currentSubCategory: string;
  isLogged: boolean;
  loading: boolean;
  loaded: boolean;
  error: Error | null;
}
export const initialCategoriesState: ICategoriesState = {
  categories: [],
  currentCategory: 'appliances',
  currentSubCategory: 'refrigerators',
  isLogged: false,
  loading: false,
  loaded: false,
  error: null,
};
