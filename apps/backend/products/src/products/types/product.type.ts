import { Document } from 'mongoose';
export interface IProducts extends Omit<Document, 'model'> {
  readonly image?: string;
  readonly model: string;
  readonly category: string;
  readonly price: number;
  readonly stock: number;
  readonly status?: string;
}
