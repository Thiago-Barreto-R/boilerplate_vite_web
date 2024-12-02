export interface SigInData {
  username: string;
  password: string;
}

export interface SigInResponse {
  login: SigInData[];
  message: string;
}
