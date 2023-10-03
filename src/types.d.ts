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
  owner: IUser | null;
  isPrivate: boolean;
  password: string | null;
}

interface IUser {
  id: string;
  username: string;
  email: string;
  password: string;
}
