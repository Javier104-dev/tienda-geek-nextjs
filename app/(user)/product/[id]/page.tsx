'use client';

import ViewProduct from '@/components/main/user/ViewProduct';
import { useParams } from 'next/navigation';

const ViewProductPage: React.FC = () => {
  const { id }: {id: string} = useParams();

  return (
    <ViewProduct
      container={'container'}
      id={Number(id)}
    />
  );
};

export default ViewProductPage;