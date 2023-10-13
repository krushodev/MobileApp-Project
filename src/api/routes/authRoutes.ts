import axios from '../index';

import { showToast } from '../../helper/toast';

import type { IUser } from '../../types';
import type { AxiosError } from 'axios';

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
    const statusCode = (err as AxiosError).response?.status;

    switch (statusCode) {
      case 400:
        showToast({ message: 'Error al intentar sesión. Verifica tus datos', type: 'error' });
        break;
      case 401:
        showToast({ message: 'Error al intentar sesión. Email o contraseña incorrectos', type: 'error' });
        break;
      default:
        showToast({ message: 'Error en el servidor. Intenta nuevamente', type: 'warning' });
    }
  }
};

export const signup = async (data: IUser): Promise<string | undefined> => {
  try {
    const response = await axios.post<SuccessResponse>('/sessions/signup', data);
    const { message } = response.data;
    return message;
  } catch (err) {
    const statusCode = (err as AxiosError).response?.status;

    switch (statusCode) {
      case 400:
        showToast({ message: 'Error al registrarte. El correo ya está en uso', type: 'error' });
        break;
      default:
        showToast({ message: 'Error en el servidor. Intenta nuevamente', type: 'warning' });
    }
  }
};

export const provideRefreshToken = async (data: RefreshTokenBody): Promise<RefreshTokenResponse | undefined> => {
  try {
    const response = await axios.post<SuccessResponse>('/sessions/refresh-token', data);
    const { payload } = response.data;
    return payload as RefreshTokenResponse;
  } catch (err) {
    const statusCode = (err as AxiosError).response?.status;

    switch (statusCode) {
      case 401:
        showToast({ message: 'Error. Tu sesión ya ha expirado', type: 'error' });
        break;
      default:
        showToast({ message: 'Error en el servidor. Intenta nuevamente', type: 'warning' });
    }
  }
};

export const updateImage = async (data: { id: string; image: string }) => {
  try {
    const response = await axios.post<SuccessResponse>(`/sessions/${data.id}/update-image`, { image: data.image });
    const { message } = response.data;
    return message;
  } catch (err) {
    const statusCode = (err as AxiosError).response?.status;

    switch (statusCode) {
      case 400:
        showToast({ message: 'Error al actualizar pefil. Verifica tus datos', type: 'error' });
        break;
      default:
        showToast({ message: 'Error en el servidor. Intenta nuevamente', type: 'warning' });
    }
  }
};
