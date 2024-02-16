import { IsNumber, IsString, MaxLength } from 'class-validator';

export class ProductRequestDTO {
  @IsNumber({}, { message: 'price must be a number' })
  price: number;

  @MaxLength(10, {
    message: 'name must be a string less than or equal to 10 characters',
  })
  @IsString({
    message: 'name must be a string less than or equal to 10 characters',
  })
  name: string;
}
