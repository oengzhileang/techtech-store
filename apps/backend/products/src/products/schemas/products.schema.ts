import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
@Schema({ timestamps: true })
export class Product {
  @Prop()
  image?: string;

  @Prop()
  model: string;

  @Prop({ enum: ['Desktop', 'Laptop'] })
  category: string;

  @Prop()
  price: number;

  @Prop()
  stock: number;

  @Prop({ enum: ['in stock', 'low stock', 'out of stock'] })
  status: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
