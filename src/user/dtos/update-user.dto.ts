import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  isString,
} from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @IsNotEmpty()
  readonly fullName: string;

  @IsString()
  @IsNotEmpty()
  readonly email: string;

  @IsNumber()
  readonly mobileNumber: number;
}
