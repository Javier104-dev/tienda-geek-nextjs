import { Product, SetDateFunction, TargetValue } from '@/interface/interface';

export const setData = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  dataForm: Product,
  setDate: SetDateFunction
) => {
  const { name, value, files }: TargetValue = e.target;

  setDate({
    ...dataForm,
    [name]: files ? files[0] : value,
  });
};