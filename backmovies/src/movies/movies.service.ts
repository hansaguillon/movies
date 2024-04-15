import { Injectable, NotFoundException } from '@nestjs/common';
import { IMovie } from './movies.interface';
import movies from '../data/movies.json'
import { NotFoundError } from 'rxjs';

@Injectable()
export class MoviesService {

getMovies()
{
    return movies;
}

async getMoviexId(id:string):Promise<IMovie>
{
    try{ 
    const movie = movies.movies.find(m => m.id === id);
    if(Object.keys(movie).length)return movie;
}catch (e){
    throw new NotFoundException(`Movie con un id: '${id}' no existe`);
}
}
}
