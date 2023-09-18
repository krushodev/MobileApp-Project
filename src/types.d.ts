export interface IMessage {
  id: string;
  user: {
    name: string;
    image: string;
  };
  text: string;
  date: Date;
}

export interface IRoom {
  id: string;
  name: string;
  topics: string[];
  members: string[];
}
