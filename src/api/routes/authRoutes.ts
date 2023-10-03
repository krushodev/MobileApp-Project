import axios from '../index';

import type { IUser } from '../../types';

interface LoginBody {
  email: string;
  password: string;
}

interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}

interface RefreshTokenBody {
  refreshToken: string;
}

interface RefreshTokenResponse {
  accessToken: string;
}

export const login = async (data: LoginBody): Promise<LoginResponse | undefined> => {
  try {
    const response = await axios.post<SuccessResponse>('/sessions/login', data);
    const { payload } = response.data;
    return payload as LoginResponse;
  } catch (err) {
    console.log(err as string);
  }
};

export const signup = async (data: IUser): Promise<string | undefined> => {
  try {
    const response = await axios.post<SuccessResponse>('/sessions/signup', data);
    const { message } = response.data;
    return message;
  } catch (err) {
    console.log(err as string);
  }
};

export const provideRefreshToken = async (data: RefreshTokenBody): Promise<RefreshTokenResponse | undefined> => {
  try {
    const response = await axios.post<SuccessResponse>('/sessions/refresh-token', data);
    const { payload } = response.data;
    return payload as RefreshTokenResponse;
  } catch (err) {
    console.log(err as string);
  }
};
