export interface ClassName {
  container: string,
}

export interface IdAndClassName {
  id: number,
  container: string,
}

export interface Product {
  id?: number,
  image: null | File,
  category: string,
  name: string,
  price: number,
  description: string,
};

export interface Categories {
  category: string,
  products: Product[],
};

export interface TargetValue {
  name: string,
  value: string,
  files?: FileList | null,
};

// HOOK useReducer

export interface MyState {
  loading: false | true,
  data: null | Product[] | Product,
  error: null | string,
};

interface LoadAction {
  type: 'LOAD';
  payload?: null;
}

interface SuccessAction {
  type: 'SUCCESS';
  payload: Product[] | Product;
}

interface FailureAction {
  type: 'FAILURE';
  payload: string;
}

export type Action = LoadAction | SuccessAction | FailureAction;

export type FetchFunction = (id: number) => Promise<Product | Product[]>;

export type SetDateFunction = React.Dispatch<React.SetStateAction<Product>>;