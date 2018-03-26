import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {


  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get<UserResponse>('https://api.github.com/users/mnyborg').subscribe(data => {
      console.log('User Login: ' + data.login);
      console.log('Type: ' + data.type);
      console.log('Url: ' + data.url);
    });
  }
}
