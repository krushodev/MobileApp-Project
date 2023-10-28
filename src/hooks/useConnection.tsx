import { useEffect, useState } from 'react';
import socket from '../services/socket';

export const useConnection = () => {
  const [connectedUsers, setConnectedUsers] = useState<string[]>([]);

  const handleReceiveConnection = async () => {
    socket.timeout(1000).emit('getConnections', (err: Error, response: string[]) => {
      if (err) return;
      setConnectedUsers(response);
    });
  };

  useEffect(() => {
    if (connectedUsers.length === 0) {
      handleReceiveConnection();
    }

    socket.on('updateConnections', (data: string[]) => {
      setConnectedUsers(data);
    });

    return () => {
      socket.off('updateConnections');
    };
  }, []);

  return {
    connectedUsers
  };
};
