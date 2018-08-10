import {Component, OnInit, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';
import {Movie} from './movie.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  @Output() addMovie = new EventEmitter<Movie>();
  @Output() removeMovie = new EventEmitter<void>();
  @Output() clearMovie = new EventEmitter<void>();
  @ViewChild('movieInput') movieRef: ElementRef;
  movie: Movie;

  constructor() { }

  ngOnInit() {
  }


  onAddMovie(movie) {
    this.movie = movie;
    this.addMovie.emit(movie);
    this.movieRef.nativeElement.value = '';
  }

  onRemoveMovie() {
    this.removeMovie.emit();
    this.movieRef.nativeElement.value = '';
  }

  onClearMovie() {
    this.clearMovie.emit();
    this.movieRef.nativeElement.value = '';
  }
}

