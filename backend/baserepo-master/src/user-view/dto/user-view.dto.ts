import { IsNotEmpty } from 'class-validator';

export class AddGuest {
  @IsNotEmpty()
  name: string;
}
export class AddToCart {
  @IsNotEmpty()
  product_id: number;
  @IsNotEmpty()
  quantity: number;
}
