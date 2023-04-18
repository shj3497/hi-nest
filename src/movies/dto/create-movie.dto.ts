import { PickType } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { Movie } from '../entities/movie.entity';

export class CreateMovieDTO extends PickType(Movie, [
  'title',
  'year',
  'geners',
] as const) {
  @IsString()
  title: string;

  @IsNumber()
  year: number;

  @IsString()
  @IsOptional()
  geners: string;
}
