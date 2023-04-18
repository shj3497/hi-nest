import { ApiProperty } from '@nestjs/swagger';
import { Movie } from './entities/movie.entity';
import { BaseResponse } from 'src/utils/base.response';

export abstract class MovieResponseData {
  @ApiProperty()
  movies: Movie;
}

export abstract class MovieListResponse extends BaseResponse {
  @ApiProperty({ isArray: true })
  details: Movie;
}

export abstract class MovieItemResponse extends BaseResponse {
  @ApiProperty()
  details: Movie;
}
