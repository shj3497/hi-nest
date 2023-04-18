import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { CreateMovieDTO } from './dto/create-movie.dto';
import { UpdateMovieDTO } from './dto/update-movie.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie) private movieRepository: Repository<Movie>,
  ) {}

  getAll(): Promise<Movie[]> {
    return this.movieRepository.find();
  }

  async getOne(id: number): Promise<Movie> {
    const movie = await this.movieRepository.findOneBy({ id });
    console.log(movie);
    if (!movie) {
      throw new NotFoundException(`Movie with Id: ${id}`);
    }
    return movie;
  }

  async deleteOne(id: number): Promise<void> {
    this.getOne(id);

    await this.movieRepository.delete(id);
  }

  async create(movieData: CreateMovieDTO) {
    this.movieRepository.save(movieData);
  }

  async update(id: number, updateData: UpdateMovieDTO) {
    this.getOne(id);
    await this.movieRepository.update({ id }, updateData);
  }
}
