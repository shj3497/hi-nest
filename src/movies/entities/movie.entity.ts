import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

//* DB 스키마 정의하는 곳
@Entity({
  database: 'Movies',
  name: 'MOVIE_TB',
})
export class Movie {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  title: string;

  @ApiProperty()
  @Column()
  year: number;

  @ApiProperty({
    required: false,
    nullable: true,
  })
  @Column({ nullable: true })
  geners: string;

  @ApiProperty()
  @CreateDateColumn()
  created_date?: Date;

  @ApiProperty()
  @UpdateDateColumn()
  updated_date?: Date;
}
