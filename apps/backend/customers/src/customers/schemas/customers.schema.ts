import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
@Schema({ timestamps: true })
export class Customer {
  @Prop()
  name: string; // Name of the customer

  @Prop()
  email: string; //email of the customer

  @Prop()
  phone: string; //phone number of the customer

  @Prop()
  address?: string;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);
