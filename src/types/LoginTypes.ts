export interface ILoginRequest {
  email: string;
  password: string;
}

export interface ILoginResponse {
  success: boolean;
  token?: string;
  message?: string;
  user?: {
    id: string;
    name: string;
    email: string;
  };
}
