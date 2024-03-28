import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KoliBriModule } from '@public-ui/angular-v17';

@Component({
	selector: 'angular-app',
	standalone: true,
	templateUrl: './app.component.html',
	imports: [RouterOutlet, KoliBriModule],
})
export class AppComponent {
	title = 'angular';
}
