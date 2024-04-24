import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataComponent } from "./retrieving/data/data.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, DataComponent]
})
export class AppComponent {
  title = 'LearningCiCDClient';
}
