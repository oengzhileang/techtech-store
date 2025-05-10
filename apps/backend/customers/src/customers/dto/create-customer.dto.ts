import {
  IsEmail,
  IsEmpty,
  IsNotEmpty,
  IsString,
  MaxLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateCustomerDto {
  @ApiProperty({ example: 'name', required: true })
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  name: string;

  @ApiProperty({ example: 'youremail@gmail.com', required: true })
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  @IsEmail()
  readonly email: string;

  @ApiProperty({ example: '01234567890', required: true })
  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  readonly phone: string;

  @ApiProperty({ example: 'Your province', required: false })
  @IsString()
  @IsEmpty()
  @MaxLength(100)
  readonly address?: string;
}
