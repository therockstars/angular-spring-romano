package com.trs.socketclient;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.socket.HandshakeInfo;
import org.springframework.web.reactive.socket.WebSocketHandler;
import org.springframework.web.reactive.socket.WebSocketMessage;
import org.springframework.web.reactive.socket.WebSocketSession;
import reactor.core.publisher.Mono;


/**
 * Created by shajee on 17/5/18.
 */
@Component
public class SocketClientHandler implements WebSocketHandler {
    static Logger LOG = LoggerFactory.getLogger(SocketClientHandler.class);


    @Override
    // the webSocketSession will be created automatically when someone connects to our endpoint
    public Mono<Void> handle(WebSocketSession webSocketSession) {
        HandshakeInfo handshakeInfo = webSocketSession.getHandshakeInfo();
        System.out.println(handshakeInfo.toString());

        return webSocketSession.send(webSocketSession.receive()
                .doOnNext(WebSocketMessage::retain)
                //.doOnNext(WebSocketMessage::retain)
                .doOnNext(wsm -> {
                    this.log(wsm);
//                    try {
//                        Thread.sleep(5000);
//                    }
//                    catch (Exception e) {
//                        e.printStackTrace();
//                    }
                })
        );
    }

    private void log(WebSocketMessage message) {
        LOG.info("Response Message {} ", message);
    }
}
