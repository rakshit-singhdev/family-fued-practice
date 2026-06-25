import { useEffect } from "react";
import socketService from "../services/socket.service";

export const useSocketEvent = (
    event,
    handler
) => {

    useEffect(() => {

        socketService.on(event, handler);

        return () => {
            socketService.off(event, handler);
        };

    }, [event, handler]);
};