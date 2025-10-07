export interface ILoginRequest {
  email: string;
  password: string;
}

export interface ILoginResponse {
  success: boolean;
  accessToken: string;
  refreshToken: string;
  message?: string;
  user?: {
    id: string;
    name: string;
    email: string;
  };
}
