import { IProducts } from '../types/product.type';

export class ProductResponseDto {
  message: string;
  data: IProducts[];
  meta: {
    page: number;
    limit: number;
    total: number;
  };
}
