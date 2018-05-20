import {Component, OnInit} from '@angular/core';
import {WebSocketService} from './web-socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  messages: string[] = [];
  username = '';
  message = '';
  isUserSet = false;

  today = Date.now();
  fixedTimezone = '2015-06-15T09:03:01+0900';


  constructor(private webSocketService: WebSocketService) {

  }

  ngOnInit(): void {
    this.webSocketService.onMessage.subscribe(msg => {
      this.messages.push(JSON.parse(msg.data));
    });
  }

  sendMessage() {
    this.webSocketService.send('{"username":"' + this.username + '","content":"' + this.message + '"}');
    this.message = '';
  }

  sendUsername() {
    this.webSocketService.send('{"username":"' + this.username + '","content":""}');
    this.isUserSet = true;
  }


}
