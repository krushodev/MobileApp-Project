// @ts-nocheck

import axios from '../index';

export const listRooms = async data => {
  try {
    const response = await axios.get('/rooms');
    return response.data;
  } catch (err) {
    throw new Error(err as string);
  }
};

export const getRoom = async id => {
  try {
    const response = await axios.get(`/rooms/${id}`);
    return response.data;
  } catch (err) {
    throw new Error(err as string);
  }
};

export const createRoom = async data => {
  try {
    const response = await axios.post('/rooms', data);
    return response.data;
  } catch (err) {
    throw new Error(err as string);
  }
};

export const removeRoom = async id => {
  try {
    const response = await axios.delete(`/rooms/${id}`);
    return response.data;
  } catch (err) {
    throw new Error(err as string);
  }
};

export const sendMessage = async data => {
  try {
    const response = await axios.post(`/rooms/${data.id}/sendMessage`, data);
    return response.data;
  } catch (err) {
    throw new Error(err as string);
  }
};
