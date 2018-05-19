import {OnInit} from '@angular/core';
import {Subject} from 'rxjs/internal/Subject';

export class WebSocketService {
  onMessage: Subject<any> = new Subject<any>();

  webSocket: WebSocket;

  constructor() {
    this.connect();
  }

  connect() {
    console.log('On Init - before Connect ===>' + this.webSocket);
    this.webSocket = new WebSocket('ws://192.168.1.11:8080/chat');
    console.log('On Init - after Connect ===>' + this.webSocket);
    this.webSocket.onmessage = (message: MessageEvent) => {
      this.onMessage.next(message);
    };
  }

  send(message: string): void {
    console.log('On Send=========>' + this.webSocket);
    this.webSocket.send(message);
  }

}
