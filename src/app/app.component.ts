import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { Component, OnInit } from '@angular/core';
import { GoogleAuthService } from './services/google-auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CesDataService } from './services/ces-data.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, DashboardComponent, HeaderComponent, HttpClientModule],
  templateUrl: './app.component.html',
  //  template: `
  //   <h1>CES Data</h1>
  //   <ul>
  //     <li *ngFor="let row of cesData">{{ row.string_field_9 }}</li>
  //   </ul>
  //   <p *ngIf="cesData.length === 0">Loading...</p>
  // `
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

 cesData: any[] = [];

  constructor(private cesDataService: CesDataService) {}

  ngOnInit() {
    // this.cesDataService.getCesData().subscribe(data => {
    //   this.cesData = data;
    //   console.log('CES Data from backend:', data);
    // });
  }
 

  
}
  
