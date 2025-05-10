import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
// import { Customer } from './schemas/customers.schema';
import { Response } from 'express';

@Controller('/v1/customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  //* Create new customer
  @Post()
  async createCustomer(
    @Res() response: Response,
    @Body() createCustomerDto: CreateCustomerDto,
  ) {
    try {
      const newCustomer =
        await this.customersService.createCustomer(createCustomerDto);
      return response.status(HttpStatus.OK).json({
        message: 'Create customer success',
        data: newCustomer,
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json(error.message);
    }
  }

  //* get all customers
  @Get()
  async getAllCustomers(@Res() response: Response) {
    try {
      const customerData = await this.customersService.getAllCustomers();
      return response.status(HttpStatus.OK).json({
        message: 'Retrived all customers',
        data: customerData,
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json(error.response);
    }
  }

  //* get one customer
  @Get(':id')
  async getOneCustomer(@Res() response: Response, @Param('id') id: string) {
    try {
      const customer = await this.customersService.getOneCustomer(id);
      return response.status(HttpStatus.OK).json({
        message: 'Get one customer success',
        data: customer,
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json(error.response);
    }
  }

  //* update customer info
  @Patch(':id')
  async updateCustomer(
    @Res() response: Response,
    @Param('id') id: string,
    @Body() updateCustomerDto: UpdateCustomerDto,
  ) {
    try {
      const customer = await this.customersService.updateCustomer(
        id,
        updateCustomerDto,
      );
      return response.status(HttpStatus.OK).json({
        message: 'Update customer success',
        data: customer,
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json(error.response);
    }
  }

  //* delete customer with id
  @Delete(':id')
  async deleteCustomer(@Res() response: Response, @Param('id') id: string) {
    try {
      const customer = await this.customersService.deleteCustomer(id);
      return response.status(HttpStatus.OK).json({
        message: 'Delete customer success',
        data: customer,
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json(error.response);
    }
  }
}
