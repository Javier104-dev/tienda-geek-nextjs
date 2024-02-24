'use client';
import { useParams } from 'next/navigation';

const ViewProduct: React.FC = () => {
  const { id } = useParams();

  return (
    <div>
      {id}
    </div>
  );
};

export default ViewProduct;