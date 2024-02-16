// create unit tests for productRequestDto

import { ProductRequestDTO } from './productRequestDTO';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

describe('ProductRequestDTO', () => {
  it('should be a valid productRequestDto', async () => {
    const productRequestObject = {
      price: 10,
      name: 'product',
    };
    const productReqestDto = plainToInstance(
      ProductRequestDTO,
      productRequestObject,
    );
    const errors = await validate(productReqestDto);
    expect(errors.length).toBe(0);
    expect(productReqestDto).toBeInstanceOf(ProductRequestDTO);
  });

  it('should throw error if price is invalid', async () => {
    const productRequestObject = {
      price: '10',
      name: 'product',
    };
    const productReqestDto = plainToInstance(
      ProductRequestDTO,
      productRequestObject,
    );
    const errors = await validate(productReqestDto);
    expect(errors.length).toBe(1);
    console.log(errors[0].constraints);
    expect(errors[0].constraints).toMatchObject({
      isNumber: 'price must be a number',
    });
  });

  it('should throw error if name is invalid', async () => {
    const productRequestObject = {
      price: 10,
      name: 'productproduct',
    };
    const productRequestDto = plainToInstance(
      ProductRequestDTO,
      productRequestObject,
    );
    const errors = await validate(productRequestDto);
    expect(errors.length).toBe(1);
    expect(errors[0].constraints).toMatchObject({
      maxLength: 'name must be a string less than or equal to 10 characters',
    });
  });
});
