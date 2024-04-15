import { Controller, Get, HttpStatus, Param, Res } from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
    constructor(private readonly moviesService:MoviesService){}

  
    
@Get()
getAllMovies()
{
    return this.moviesService.getMovies();
}

@Get(':id')
getMoviesxId(@Param('id')id:string)
{
  return this.moviesService.getMoviexId(id);
}
}
