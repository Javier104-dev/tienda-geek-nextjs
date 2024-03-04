import { Action, FetchFunction, MyState, Product } from '@/interface/interface';
import { useEffect, useReducer } from 'react';

const initialState: MyState = {
  loading: false,
  data: null,
  error: null
};

const fetchReducer = (state: MyState, action: Action): MyState => {
  const { type, payload } = action;

  switch (type) {
    case 'LOAD':
      return { ...state, loading: true, data: null, error: null };
    case 'SUCCESS':
      return { ...state, loading: false, data: payload, error: null };
    case 'FAILURE':
      return { ...state, loading: false, data: null, error: payload };
    default:
      return state;
  }
};
const useFetchReducer = (fetchResource: FetchFunction, id: number): MyState => {
  const [state, dispath] = useReducer(fetchReducer, initialState);
  useEffect(() => {
    const getData = async () => {
      dispath({ type: 'LOAD' });
      try {
        const resource: Product[] | Product = await fetchResource(id);
        dispath({ type: 'SUCCESS', payload: resource });

      } catch (error: any) {
        dispath({ type: 'FAILURE', payload: error.message });
      }
    };

    getData();
  }, [fetchResource, id]);

  return state;
};

export {
  useFetchReducer,
};
