export interface IMessage {
  id: string;
  user: {
    name: string;
    image: string;
  };
  text: string;
  date: Date;
}
