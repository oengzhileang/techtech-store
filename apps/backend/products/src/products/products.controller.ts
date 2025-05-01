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
  Query,
  HttpException,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Response } from 'express';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PaginationQueryDto } from './dto/pagination-query.dto';
import { ProductResponseDto } from './dto/product-response.dto';
@Controller('v1/products')
@ApiTags('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  //* this function create new product
  @Post()
  @ApiOperation({ summary: 'Create product' })
  @ApiBody({ type: CreateProductDto })
  @ApiResponse({ status: 201, description: 'Product created' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          return cb(null, `${randomName}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  async create(
    @Body() createProductDto: CreateProductDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    if (file) {
      createProductDto.image = `http://localhost:3000/uploads/${file.filename}`;
    }
    return this.productsService.create(createProductDto);
  }
  //* This function get all products
  @Get()
  @ApiOperation({ summary: 'Get all products' })
  @ApiResponse({ status: 200, description: 'Get all products' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async findAllProducts(
    @Query() query: PaginationQueryDto,
    @Res() response: Response,
    @Query('category') category?: string,
  ): Promise<Response> {
    try {
      const page = Math.max(1, Number(query.page || 1));
      const limit = Math.max(1, Math.min(100, Number(query.limit || 10))); // Cap limit at 100
      const { products, total } = await this.productsService.findAllProducts(
        page,
        limit,
        category,
      );
      const responseDto: ProductResponseDto = {
        message: 'Products Retrived successfully',
        data: products,
        meta: {
          page,
          limit,
          total,
        },
      };
      return response.status(HttpStatus.OK).json(responseDto);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'Failed to retrived products',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }

  //* This function get single product
  @Get(':id')
  @ApiOperation({ summary: 'Retrieve single product' })
  @ApiResponse({ status: 200, description: 'Get single product' })
  @ApiResponse({ status: 404, description: 'Product not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async findOneProduct(@Res() response: Response, @Param('id') id: string) {
    try {
      const productData = await this.productsService.findOneProduct(id);
      return response.status(HttpStatus.OK).json({
        message: 'Retrived one product success',
        data: productData,
      });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        status: 400,
        message: 'Retrived one product failed',
        error: 'Bad Request',
      });
    }
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update product' })
  @ApiResponse({ status: 200, description: 'Product updated' })
  @ApiResponse({ status: 404, description: 'Product not found' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  async update(
    @Res() response: Response,
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    try {
      const product = await this.productsService.updateProduct(
        id,
        updateProductDto,
      );
      return response.status(HttpStatus.OK).json({
        message: 'Product Updated successfully',
        data: product,
      });
    } catch (error) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
      return response.status(error.status).json(error.response);
    }
  }

  //* This function delete product
  @Delete(':id')
  @ApiOperation({ summary: 'Delete product' })
  @ApiResponse({ status: 200, description: 'Product deleted' })
  @ApiResponse({ status: 404, description: 'Product not found' })
  async removeProduct(@Res() response: Response, @Param('id') id: string) {
    try {
      const product = await this.productsService.removeProduct(id);
      return response.status(HttpStatus.OK).json({
        message: 'Product deleted success',
        data: product,
      });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        status: 400,
        message: 'Failed delete product',
        error: 'Bad request',
      });
    }
  }
}
