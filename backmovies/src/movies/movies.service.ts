import { Injectable } from '@nestjs/common';
import { IMovie } from './movies.interface';
import movies from '../data/movies.json'

@Injectable()
export class MoviesService {

getMovies()
{
    return movies;
}

async getMoviexId(id:string):Promise<IMovie>
{
    const movie = movies.movies.find(m => m.id === id);
    return movie;

}
}
