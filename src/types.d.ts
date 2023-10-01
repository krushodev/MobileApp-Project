export interface IMessage {
  id: string;
  user: string;
  text: string;
  date: Date;
}

export interface IRoom {
  id: string;
  name: string;
  topics: string[];
  members: { user: string }[];
  messages?: IMessage[];
  isPrivate?: boolean;
  password?: string | null;
}

export interface IUser {
  id: string;
  username: string;
  email: string;
  password: string;
}
