import { IsArray, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateMovieDTO {
  @IsString()
  readonly title: string;

  @IsNumber()
  readonly year: number;

  @IsString()
  @IsOptional()
  readonly geners: string;
}
