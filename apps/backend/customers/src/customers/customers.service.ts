import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './schemas/customers.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ICustomers } from './types/customers.types';
@Injectable()
export class CustomersService {
  constructor(
    @InjectModel(Customer.name) private customerModel: Model<ICustomers>,
  ) {}

  //* Create new customer
  async createCustomer(
    createCustomerDto: CreateCustomerDto,
  ): Promise<ICustomers> {
    const newCustomer = new this.customerModel(createCustomerDto);
    return newCustomer.save();
  }

  //* get all customers
  async getAllCustomers(): Promise<Customer[]> {
    const customerData = await this.customerModel.find().exec();
    if (!customerData || customerData.length == 0) {
      throw new NotFoundException('No Customers found');
    }
    return customerData;
  }

  //* get one customer
  async getOneCustomer(id: string): Promise<Customer> {
    const customer = await this.customerModel.findById(id).exec();
    if (!customer) {
      throw new NotFoundException(`Customer with id ${id} not found`);
    }
    return customer;
  }

  //* update customer info
  async updateCustomer(
    id: string,
    updateCustomerDto: UpdateCustomerDto,
  ): Promise<ICustomers> {
    const customer = await this.customerModel.findByIdAndUpdate(
      id,
      updateCustomerDto,
      { new: true },
    );
    if (!customer) {
      throw new NotFoundException(`Customer with id ${id} not found`);
    }
    return customer;
  }

  //* delete customer with id
  async deleteCustomer(id: string) {
    const customer = await this.customerModel.findByIdAndDelete(id);
    if (!customer) {
      throw new NotFoundException(`Customer with id ${id} not found`);
    }
    return customer;
  }
}
