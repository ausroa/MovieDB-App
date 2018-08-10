import {Component, Input, OnInit} from '@angular/core';
import {Movie} from '../movie.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  movies: Movie[] = [];

  constructor() { }

  ngOnInit() {
  }

  onMovieAdd(movie: Movie) {
    this.movies.push(movie);
  }

  onRemove() {
    this.movies.splice(-1, 1);
  }
}
