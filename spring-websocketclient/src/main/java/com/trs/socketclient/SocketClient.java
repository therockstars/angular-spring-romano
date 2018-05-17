package com.trs.socketclient;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.socket.client.ReactorNettyWebSocketClient;
import org.springframework.web.reactive.socket.client.WebSocketClient;
import reactor.core.publisher.Flux;

import java.net.URI;
import java.net.URISyntaxException;
import java.time.Duration;

/**
 * Created by shajee on 17/5/18.
 */

@Configuration
public class SocketClient {

    private final SocketClientHandler socketClientHandler;

    public SocketClient(SocketClientHandler socketClientHandler) {
        this.socketClientHandler = socketClientHandler;
    }

    @Bean
    public WebSocketClient client() throws URISyntaxException {
        ReactorNettyWebSocketClient client = new ReactorNettyWebSocketClient();
        client.execute(new URI("ws://localhost:8080/ws"),
                session -> {
            return session.send(
                    Flux.interval(Duration.ofSeconds(1))
                            .map(l -> String.format("%d", l))
                            .map(session::textMessage)
            );
        }).block(Duration.ofDays(1));
        return client;
    }


}
