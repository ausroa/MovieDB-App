import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Movie} from './movie.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  @Output() addMovie = new EventEmitter<Movie>();
  @Output() removeMovie = new EventEmitter<boolean>();
  movie: Movie;

  constructor() { }

  ngOnInit() {
  }


  onAddMovie(movie) {
    this.movie = movie;
    this.addMovie.emit(movie);
  }

  onRemoveMovie() {
    this.removeMovie.emit(true);
  }
}

