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

  async getAll(): Promise<Movie[]> {
    const movies = await this.movieRepository.find();
    return movies;
  }

  async getOne(id: number): Promise<Movie> {
    const movie = await this.movieRepository.findOneBy({ id });
    if (!movie) {
      throw new NotFoundException(`Movie with Id: ${id}`);
    }
    return movie;
  }

  async deleteOne(id: number): Promise<void> {
    await this.getOne(id);

    await this.movieRepository.delete(id);
  }

  async create(movieData: CreateMovieDTO): Promise<Movie> {
    const movie = await this.movieRepository.save(movieData);
    return movie;
  }

  async update(id: number, updateData: UpdateMovieDTO) {
    await this.getOne(id);
    await this.movieRepository.update({ id }, updateData);
    const updatedMovie = await this.getOne(id);
    return updatedMovie;
  }
}
