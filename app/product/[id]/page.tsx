'use client';

import ViewProduct from '@/components/main/ViewProduct';
import { useParams } from 'next/navigation';

const Product: React.FC = () => {
  const { id } = useParams();

  return (
    <ViewProduct
      id={Number(id)}
      container={'container'}
    />
  );
};

export default Product;