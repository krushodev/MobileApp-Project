export interface IMessage {
  id: string;
  user: IUser;
  text: string;
  date: Date;
}

interface MessageBody {
  id: string;
  user: string;
  text: string;
  date: Date;
}

interface RoomBody {
  id: string;
  name: string;
  topics: string[];
  members: { user: string }[];
  messages?: MessageBody[];
  owner: string;
  isPrivate?: boolean;
  password?: string | null;
}

interface IRoom {
  id: string;
  name: string;
  topics: string[];
  members: { user: IUser }[];
  messages: IMessage[];
  owner: string | null;
  isPrivate: boolean;
  password: string | null;
}

interface IUser {
  id: string;
  username: string;
  email: string;
  image: string;
  password: string;
  rooms: {
    room: string;
    isOwner: boolean;
  }[];
}

type ToastProps = {
  message: string;
  type: 'error' | 'success' | 'warning' | 'info';
  duration?: number;
  position?: number;
};
