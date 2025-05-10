import { Document } from 'mongoose';
export interface ICustomers extends Omit<Document, 'name'> {
  name: string; // Name of the customer
  email: string; // Email address of the customer
  phone: string; // Phone number of the customer
  address?: string; // Address of the customer
} // Unique identifier for the customer
