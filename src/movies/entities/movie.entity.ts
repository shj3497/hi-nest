import { Column, PrimaryGeneratedColumn } from 'typeorm';

//* DB 스키마 정의하는 곳
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  year: number;

  @Column()
  geners: string[];
}
