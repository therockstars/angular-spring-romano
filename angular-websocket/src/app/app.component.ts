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

  constructor(public webSocketService: WebSocketService) {

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
