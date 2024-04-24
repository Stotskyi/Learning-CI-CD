import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-data',
  standalone: true,
  imports: [],
  templateUrl: './data.component.html',
  styleUrl: './data.component.css'
})
export class DataComponent implements OnInit{
  stringResponse: string | undefined;

  constructor(private apiService: ApiService) {}
    
  ngOnInit(): void {
    this.fetchStringData();
  }

    fetchStringData(): void {
      this.apiService.getData().subscribe(data => {
        this.stringResponse = data;
        console.log(this.stringResponse);
      });
  }
}
