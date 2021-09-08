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

export interface IsortParams {
  price: boolean;
  priceReverse: boolean;
  count: boolean;
  countReverse: boolean;
}

export interface Iimage {
  image: string;
  thumbImage: string;
  tile?: string;
}

export class Product implements Iproduct {
  id: '';

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

  constructor() {
    this.id = '';
    this.name = '';
    this.imageUrls = [];
    this.rating = 0;
    this.price = 0;
    this.availableAmount = 0;
    this.description = '';
    this.isInCart = false;
    this.isFavorite = false;
  }
}
export class SubCategory implements IsubCategory {
  id: string;

  name: string;

  constructor() {
    this.id = '';
    this.name = '';
  }
}
export class Category implements Icategory {
  id: string;

  name: string;

  subCategories: IsubCategory[];

  constructor() {
    this.id = '';
    this.name = '';
    this.subCategories = [new SubCategory()];
  }
}
