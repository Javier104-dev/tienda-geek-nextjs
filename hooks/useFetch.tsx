import { useEffect, useReducer } from 'react';

const initialState = {
  loading: false,
  data: null,
  error: null
};

const fetchReducer = (state: any, action: any) => {
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


const useFetchReducer = (fetchResource: any, param: any) => {
  const [state, dispath] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    const getData = async () => {
      dispath({ type: 'LOAD' });
      try {
        const resource = await fetchResource(param);
        dispath({ type: 'SUCCESS', payload: resource });
  
      } catch (error) {
        dispath({ type: 'FAILURE', payload: error });
      }
    };

    getData();
  }, [fetchResource, param]);

  return state;
};

export {
  useFetchReducer,
};
