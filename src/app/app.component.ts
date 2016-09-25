import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app works!';

  views: Object[] = [
    {
      name: 'My account',
      description: 'Edit my account information',
      icon: 'assignment ind'
    },
    {
      name: 'Potential dates',
      description: 'Find your ',
      icon: 'pets'
    }
  ];

  dogs: Object[] = [
    {name: 'Porter'},
    {name: 'Mal'},
    {name: 'Razzle'},
    {name: 'Koby'},
    {name: 'Molly'},
    {name: 'Husi'}
  ];

}
