export type Product = {
  categoryID: number;
  id: number;
  name: string;
  quantity: number;
};

export type Category = {
  id: number;
  name: string;
};

export type FormData = {
  fullName: string;
  address: string;
  email: string;
};

export type ShoppingState = {
  categories: Category[];
  products: Product[];
  totalItems: number;
};
