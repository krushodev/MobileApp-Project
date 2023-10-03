import { decodeToken } from 'react-jwt';
import { provideRefreshToken } from '../api/routes/authRoutes';

import type { IUser } from '../types';

export const getDataWithRefreshToken = async (token: string) => {
  const result = await provideRefreshToken({ refreshToken: token });

  if (!result) return null;

  const { accessToken } = result;

  const decodedAccessToken: { user: IUser } | null = decodeToken(accessToken);

  if (!decodedAccessToken?.user) return null;

  return { accessToken, decodedAccessToken };
};
