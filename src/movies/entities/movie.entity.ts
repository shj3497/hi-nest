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
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  year: number;

  @Column({ nullable: true })
  geners: string;

  @CreateDateColumn()
  created_date?: Date;

  @UpdateDateColumn()
  updated_date?: Date;
}
