import { IsNotEmpty } from 'class-validator';

export class CreateProduct {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  image_url: string;
  @IsNotEmpty()
  price: number;
}
