export interface RegisterPayload {
  name: string;
  email: string;
  phone_number: string;
  password: string;
}

export interface RegisterResponse {
  accessToken: string;
  refreshToken: string;
}
