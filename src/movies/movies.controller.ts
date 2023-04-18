import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDTO } from './dto/create-movie.dto';
import { UpdateMovieDTO } from './dto/update-movie.dto';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { MovieListResponse, MovieItemResponse } from './movies.response';

@Controller('movies')
@ApiTags('Movie')
export class MoviesController {
  constructor(readonly moviesService: MoviesService) {}

  @ApiOperation({
    summary: '영화 목록',
  })
  @ApiOkResponse({
    type: MovieListResponse,
  })
  @Get()
  async getAll() {
    const data = await this.moviesService.getAll();

    return {
      message: '',
      result: true,
      details: data,
    };
  }

  @ApiOperation({
    summary: '영화 상세',
  })
  @ApiOkResponse({
    type: MovieItemResponse,
  })
  @Get(':id')
  async getOne(@Param('id') movieId: number) {
    const data = await this.moviesService.getOne(movieId);

    return {
      message: '',
      result: true,
      details: data,
    };
  }

  @ApiOperation({
    summary: '영화 생성',
  })
  @ApiBody({
    type: CreateMovieDTO,
  })
  @ApiCreatedResponse({
    type: MovieItemResponse,
  })
  @Post()
  async create(@Body() movieData: CreateMovieDTO) {
    const data = await this.moviesService.create(movieData);

    return {
      message: 'create success',
      result: true,
      details: data,
    };
  }

  @ApiOperation({
    summary: '영화 삭제',
  })
  @ApiOkResponse({
    schema: {
      example: {
        message: 'delete success',
        result: true,
        details: null,
      },
    },
  })
  @Delete(':id')
  async remove(@Param('id') movieId: number) {
    await this.moviesService.deleteOne(movieId);
    return {
      message: 'delete success',
      result: true,
      details: null,
    };
  }

  @ApiOperation({
    summary: '영화 수정',
  })
  @ApiBody({
    type: UpdateMovieDTO,
  })
  @ApiOkResponse({
    type: MovieItemResponse,
  })
  @Patch(':id')
  async patch(
    @Param('id') movieId: number,
    @Body() updateData: UpdateMovieDTO,
  ) {
    const data = await this.moviesService.update(movieId, updateData);
    return {
      message: 'update success',
      result: true,
      details: data,
    };
  }
}
