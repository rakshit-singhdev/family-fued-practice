import { io } from "socket.io-client";

class SocketService {

    socket = null;

    connect() {
        if (this.socket) return this.socket;

        this.socket = io(
            import.meta.env.VITE_SOCKET_URL,
            {
                transports: ["websocket"]
            }
        );

        return this.socket;
    }

    disconnect() {
        this.socket?.disconnect();
        this.socket = null;
    }

    emit(event, payload) {
        this.socket?.emit(event, payload);
    }

    on(event, callback) {
        this.socket?.on(event, callback);
    }

    off(event, callback) {
        this.socket?.off(event, callback);
    }
}

export default new SocketService();