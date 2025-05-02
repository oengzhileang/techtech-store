import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  IsEmpty,
} from 'class-validator';
export class CreateProductDto {
  @ApiProperty({ example: 'image', required: false })
  @IsString()
  @IsEmpty()
  @MaxLength(30)
  image: string;

  @ApiProperty({ example: 'model', required: true })
  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  readonly model: string;

  @ApiProperty({
    example: 'category',
    required: true,
    enum: ['Desktop', 'Laptop'],
  })
  @IsString()
  @IsNotEmpty()
  readonly category: string;

  @ApiProperty({ example: 1, required: true })
  @IsNumber()
  @IsNotEmpty()
  readonly price: number;

  @ApiProperty({ example: 1, required: true })
  @IsNumber()
  @IsNotEmpty()
  readonly stock: number;

  // @ApiProperty({
  //   example: 'in stock',
  //   required: true,
  //   enum: ['in stock', 'low stock', 'out of stock'],
  // })
  // @IsString()
  // @IsNotEmpty()
  // readonly status: string;
}
