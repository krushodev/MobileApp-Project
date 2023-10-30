import axios from '../index';

import { showToast } from '../../helper/toast';

import type { IMessage, IRoom, MessageBody, RoomBody } from '../../types';
import type { AxiosError } from 'axios';

export const listRooms = async (): Promise<IRoom[] | undefined> => {
  try {
    const response = await axios.get<SuccessResponse>('/rooms');
    const { payload } = response.data;
    return payload as IRoom[];
  } catch (err) {
    const statusCode = (err as AxiosError).response?.status;

    switch (statusCode) {
      case 404:
        showToast({ message: 'Error. No se han encontrado rooms', type: 'error' });
        break;
      default:
        showToast({ message: 'Error en el servidor. Intenta nuevamente', type: 'warning' });
    }
  }
};

export const getRoom = async (id: string): Promise<IRoom | undefined> => {
  try {
    const response = await axios.get<SuccessResponse>(`/rooms/${id}`);
    const { payload } = response.data;
    return payload as IRoom;
  } catch (err) {
    const statusCode = (err as AxiosError).response?.status;

    switch (statusCode) {
      case 404:
        showToast({ message: 'Error. La room no existe', type: 'error' });
        break;
      default:
        showToast({ message: 'Error en el servidor. Intenta nuevamente', type: 'warning' });
    }
  }
};

export const createRoom = async (data: RoomBody) => {
  try {
    const response = await axios.post<SuccessResponse>('/rooms', data);
    const { payload } = response.data;

    return payload as IRoom;
  } catch (err) {
    const statusCode = (err as AxiosError).response?.status;

    switch (statusCode) {
      case 400:
        showToast({ message: 'Error al crear la room. Verifica tus datos', type: 'error' });
        break;
      default:
        showToast({ message: 'Error en el servidor. Intenta nuevamente', type: 'warning' });
    }
  }
};

export const removeRoom = async (id: string): Promise<string | undefined> => {
  try {
    const response = await axios.delete<SuccessResponse>(`/rooms/${id}`);
    const { message } = response.data;
    return message;
  } catch (err) {
    const statusCode = (err as AxiosError).response?.status;

    switch (statusCode) {
      case 404:
        showToast({ message: 'Error. La room no existe', type: 'error' });
        break;
      default:
        showToast({ message: 'Error en el servidor. Intenta nuevamente', type: 'warning' });
    }
  }
};

export const sendMessage = async (data: { id: string; message: MessageBody }): Promise<IMessage | undefined> => {
  try {
    const response = await axios.post<SuccessResponse>(`/rooms/${data.id}/messages`, data.message);
    const { payload } = response.data;
    return payload as IMessage;
  } catch (err) {
    const statusCode = (err as AxiosError).response?.status;

    switch (statusCode) {
      case 400:
        showToast({ message: 'Error al enviar mensaje. Verifica los datos', type: 'error' });
        break;
      case 404:
        showToast({ message: 'Error. La room no existe', type: 'error' });
        break;
      default:
        showToast({ message: 'Error en el servidor. Intenta nuevamente', type: 'warning' });
    }
  }
};

export const addMember = async (data: { rid: string; uid: string }) => {
  try {
    const response = await axios.post<SuccessResponse>(`/rooms/${data.rid}/add-member/${data.uid}`);
    const { message } = response.data;
    return message;
  } catch (err) {
    const statusCode = (err as AxiosError).response?.status;

    switch (statusCode) {
      case 400:
        showToast({ message: 'Error al unirte. Ya estás en la room', type: 'error' });
        break;
      case 404:
        showToast({ message: 'Error. La room no existe', type: 'error' });
        break;
      default:
        showToast({ message: 'Error en el servidor. Intenta nuevamente', type: 'warning' });
    }
  }
};

export const removeMember = async (data: { rid: string; uid: string }) => {
  try {
    const response = await axios.post<SuccessResponse>(`/rooms/${data.rid}/remove-member/${data.uid}`);
    const { message } = response.data;
    return message;
  } catch (err) {
    const statusCode = (err as AxiosError).response?.status;

    switch (statusCode) {
      case 404:
        showToast({ message: 'Error. La room no existe', type: 'error' });
        break;
      default:
        showToast({ message: 'Error en el servidor. Intenta nuevamente', type: 'warning' });
    }
  }
};
