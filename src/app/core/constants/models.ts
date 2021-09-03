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
