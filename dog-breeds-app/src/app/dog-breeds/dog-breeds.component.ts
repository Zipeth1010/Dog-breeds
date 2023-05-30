import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dog-breeds',
  templateUrl: './dog-breeds.component.html',
  styleUrls: ['./dog-breeds.component.css'],
})
export class DogBreedsComponent implements OnInit {
  breeds: string[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>('http://localhost:3000/dog-breeds').subscribe((data) => {
      this.breeds = data.breeds;
    });
  }
}
