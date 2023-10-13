import { IsNumber, IsString } from 'class-validator';

export class AddTransactionDto {
  @IsString()
  title: string;

  @IsNumber()
  value: number;
}
