import axios from '../index';

import type { IMessage, IRoom } from '../../types';

export const listRooms = async (): Promise<IRoom[] | undefined> => {
  try {
    const response = await axios.get<SuccessResponse>('/rooms');
    const { payload } = response.data;
    return payload as IRoom[];
  } catch (err) {
    console.log('error:', err);
  }
};

export const getRoom = async (id: string): Promise<IRoom | undefined> => {
  try {
    const response = await axios.get<SuccessResponse>(`/rooms/${id}`);
    const { payload } = response.data;
    return payload as IRoom;
  } catch (err) {
    console.log('Error', err);
  }
};

export const createRoom = async (data: IRoom) => {
  try {
    const response = await axios.post<SuccessResponse>('/rooms', data);
    const { payload } = response.data;

    return payload as IRoom;
  } catch (err) {
    console.log('Error', err);
  }
};

export const removeRoom = async (id: string): Promise<string | undefined> => {
  try {
    const response = await axios.delete<SuccessResponse>(`/rooms/${id}`);
    const { message } = response.data;
    return message;
  } catch (err) {
    console.log('Error', err);
  }
};

export const sendMessage = async (data: IMessage): Promise<IMessage | undefined> => {
  try {
    const response = await axios.post<SuccessResponse>(`/rooms/${data.id}/sendMessage`, data);
    const { payload } = response.data;
    return payload as IMessage;
  } catch (err) {
    console.log('Error', err);
  }
};
