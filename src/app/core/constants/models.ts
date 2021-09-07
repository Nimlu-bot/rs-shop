export interface Icategory {
  id: string;
  name: string;
  subCategories: IsubCategory[];
}

export interface IsubCategory {
  id: string;
  name: string;
}

export interface Iauth {
  email: string;
  password: string;
}

export interface Iproduct {
  id: string;
  name: string;
  imageUrls: string[];
  rating: number;
  price: number;
  availableAmount: number;
  description: string;
  isInCart: boolean;
  isFavorite: boolean;
  category?: string;
  subCategory?: string;
}
// export interface IproductInSerch extends Iproduct {
//   category: string;
//   subCategory: string;
// }
